// import E360Adapter from "@lib/adapter";
import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// const accessToken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwb3J0YWxAZTM2MC5jb20iLCJyb2xlIjoiUk9MRV9QQSIsImlhdCI6MTY1MDY5OTcwNiwiZXhwIjoxNjUzNTA3NzA2fQ.6MuCVmE-FSWK6TGBtkrPCw6SBJlAQ0W2Reof__hBjwg";

const getFullUrlOrThrow = (url: string): string => {
  const baseUrl = process.env.E360_API_URL;
  if (!baseUrl || !baseUrl.trim()) {
    throw Error("Please add an env variable for E360_API_URL");
  }
  return `${baseUrl}${url}`;
};

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  // adapter: E360Adapter(process.env.E360_API_URL),
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      const res = await axios.post(
        getFullUrlOrThrow(`/website/auth/user/signup-or-login`),
        {
          user,
          account,
          profile,
        }
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorizaion: `Bearer ${accessToken}`,
        //   },
        // }
      );
      if (res.data?.isAllowedToSignIn) {
        user.accessToken = res.data?.accessToken;
        user.refreshToken = res.data?.refreshToken;
        return new Promise((resolve) => resolve(true));
      } else {
        return new Promise((resolve) => resolve(false));
      }
    },

    jwt: async function jwt({ token, user }) {
      if (user) {
        token = { accessToken: user.accessToken, refreshToken: user.refreshToken };
      }
      return token;
    },

    session: async function session({ session, token }) {
      session.accessToken = token.accessToken;
      try {
        const { data } = await axios.get(getFullUrlOrThrow("/website/auth/user/profile"), {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
        session.user = data;
      } catch (error) {
        console.error(error);
      }
      return session;
    },
  },
});
