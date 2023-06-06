import Navbar from "./Navbar";

const meta = {
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

export default meta;
