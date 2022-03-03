export interface Menu {
  href: string;
  text: string;
}

export const menus: Menu[] = [
  {
    href: "/#how-it-works",
    text: "Get Started",
  },
  {
    href: "/#docs",
    text: "Docs",
  },
  {
    href: "/#pricing",
    text: "Pricing",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

export const manageMenus: Menu[] = [
  {
    href: "/manage/profile",
    text: "Profile",
  },
  {
    href: "/manage/company",
    text: "Company",
  },
  {
    href: "/manage/team-members",
    text: "Team Members",
  },
  {
    href: "/manage/payment-history",
    text: "Payment History",
  },
  {
    href: "/manage/settings",
    text: "Settings",
  },
];
