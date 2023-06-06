import Link from "next/link";
import {useRouter} from "next/router";

type NavbarProps = {
  links: {
    route: string;
    title: string;
  }[];
};

export default function Navbar({links}: NavbarProps) {
  const router = useRouter();

  return (
    <div className="w-full h-14 bg-primary mb-4 flex justify-around text-light items-center">
      <h1 className="font-logo text-2xl">BREWED</h1>
      <div className="inline-flex justify-between w-64 h-full items-end">
        {links.map((link) => {
          return (
            <Link
              href={link.route}
              className={`w-28 h-full inline-flex items-end justify-center ${
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
