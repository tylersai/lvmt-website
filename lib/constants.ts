const constants = {
  ACCESS_TOKEN_KEY: "accessToken",
  E360_V1_API_URL: process.env.NEXT_PUBLIC_E360_API_URL || "",
  E360_V2_API_URL: String(process.env.NEXT_PUBLIC_E360_API_URL).replace("v1", "v2"),
};

export default constants;
