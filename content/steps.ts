export interface Step {
  step: number;
  desc: string;
  items: string[];
}

const steps: Step[] = [
  {
    step: 1,
    desc: "Login/Signup",
    items: [
      "Signup to create a new account",
      "Verify your email",
      "No credit card required",
      "Setup your profile and detail information about you",
      "Enjoy your 7-day free trial",
    ],
  },
  {
    step: 2,
    desc: "Create Lawyer(s)",
    items: [
      "If you're signing up with individual plan, you can skip this step",
      "If you're signing up as a team, you may create many staffs",
      "Staffs have 3 different roles: Manager, Secretary, Lawyer",
      "Manager has the highest privilege and can see all lawyers' info",
      "Enter a lawyer's info such as name, email, global hourly rate, etc.",
    ],
  },
  {
    step: 3,
    desc: "Create a Client",
    items: [
      "Create a client either as a company or an individual",
      "Enter your client's basic information",
      "Choose the country of your client and their BRN",
      "Save their phone, email, postal and billing address for contact",
      "You can configure payment terms and interest rate as well",
    ],
  },
  {
    step: 4,
    desc: "Create a Case",
    items: [
      "To create a case, simply enter what's the form is asking you to",
      "Case details such as case name, court case no., will be needed",
      "Choose which client this case is for, which lawyer is responsible",
      "Optionally, you can have additional lawyers on the case as well",
      "You may choose the default point of contact or enter a new one",
    ],
  },
  {
    step: 5,
    desc: "Key-in Time Entry and Start Invoicing",
    items: [
      "After everything is setup, you can start keying in your daily work",
      "This can be done via quick time entry or timer",
      "You can key-in expenses incurred by the case as well",
      "Additionally, you can search, filter, export your entries as needed",
      "Finally, invoice your client with those time/expense entries",
      "Get paid!",
    ],
  },
];

export default steps;
