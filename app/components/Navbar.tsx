import Link from "next/link";
import Chevron from "./svg/Chevron";

const Navbar = () => {
  const routes = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Photos",
      path: "/photos",
    },
    {
      name: "Writeups",
      path: "",
      sub_routes: [
        {
          name: "How to suck dikc",
          path: "/writeup/how-to-suck-dick",
        },
        {
          name: "how to suck pussy",
          path: "/writeup/how-to-suck-pussy",
        },
        {
          name: "eat ass",
          path: "/writeup/eat-ass",
        },
        {
          name: "gay",
          path: "/writeup/gay",
        },
      ],
    },
  ];

  const Routes = routes.map((route) => {
    if (!route.sub_routes) {
      return (
        <Link
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
        <ul className="px-4 py-2 group  text-[10px]">
          <div className="flex justify-between hover:cursor-pointer">
            {route.name}
            <div className=" -rotate-90 group-hover:rotate-0">
              <Chevron />
            </div>
          </div>
          <div className="mt-2 absolute border border-secondary border-opacity-50 bg-background w-80 hidden group-hover:block">
            {subRouteComponents}
          </div>
        </ul>
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
