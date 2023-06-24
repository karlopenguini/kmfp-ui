import Link from "next/link";
import Chevron from "./svg/Chevron";

interface NavbarProps {
  sub_routes: {
    name: string;
    path: string;
  }[];
}

const Navbar = ({ sub_routes }: NavbarProps) => {
  const routes = [
    {
      name: "Writeups",
      path: "",
      sub_routes,
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Photos",
      path: "/photos",
    },
  ];

  const Routes = routes.map((route) => {
    if (!route.sub_routes) {
      return (
        <Link
          key={route.name}
          className="px-4 py-2 hover:cursor-pointer text-[10px]"
          href={route.path}
        >
          {route.name}
        </Link>
      );
    } else {
      const subRouteComponents = route.sub_routes.map((sub_route) => {
        return (
          <li key={sub_route.name}>
            <Link
              className="hover:underline hover:cursor-pointer w-full p-1"
              href={sub_route.path}
            >
              {sub_route.name}
            </Link>
          </li>
        );
      });

      return (
        <div
          key={route.name + route.path}
          className="px-4 py-2 group  text-[10px] z-10"
        >
          <div className="flex justify-between hover:cursor-pointer">
            {route.name}
            <div className=" -rotate-90 group-hover:rotate-0">
              <Chevron />
            </div>
          </div>
          <ul className="mt-2 p-1 space-y-1 absolute border border-secondary border-opacity-50 bg-background w-80 hidden group-hover:block">
            {subRouteComponents}
          </ul>
        </div>
      );
    }
  });

  return (
    <div className="text-xs bg-background border border-secondary border-opacity-50">
      <ul className="flex">{Routes}</ul>
    </div>
  );
};

export default Navbar;
