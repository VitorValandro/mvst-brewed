import Navbar from "./Navbar";

export default {
  component: Navbar,
  title: "Navbar",
  tags: ["autodocs"],
};

export const DEFAULT = {
  parameters: {
    nextjs: {
      router: {
        pathname: "/active",
      },
    },
  },
  args: {
    links: [
      {
        route: "/active",
        title: "Active",
      },
      {
        route: "/inactive",
        title: "Inactive",
      },
    ],
  },
};
