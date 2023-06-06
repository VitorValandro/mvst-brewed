import Link from "next/link";
import {useRouter} from "next/router";
import {ReactElement} from "react";

type NavbarProps = {
  links: {
    route: string;
    title: string;
  }[];
};

export default function Navbar({links}: NavbarProps): ReactElement {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row w-full h-24 sm:h-14 bg-primary mb-4 justify-end sm:justify-around text-light items-center">
      <h1 className="font-logo text-4xl sm:text-2xl">BREWED</h1>
      <div className="inline-flex w-full sm:w-64 h-1/2 sm:h-full sm:justify-between items-end">
        {links.map((link) => {
          return (
            <Link
              passHref
              key={link.route}
              href={link.route}
              className={`w-full sm:w-28 h-full inline-flex items-end justify-center ${
                router.pathname == link.route
                  ? "border-b-10 border-secondary"
                  : "border-b-10 border-transparent"
              }`}
            >
              <span className="h-2/3 font-medium flex justify-center pb-1">
                {link.title}
              </span>
            </Link>
          );
        })}
      </div>
      <span></span>
    </div>
  );
}
