import { getClient } from "@/lib/sanity.client";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Logo from "./components/svg/Logo";
import "./globals.css";
import type { Metadata } from "next";
import { layoutQuery } from "@/lib/sanity.queries";
import { LayoutPayload } from "@/types";
import LogoSmall from "./components/svg/LogoSmall";
export const metadata: Metadata = {
  title: "kmfp",
  description: "Created by Karlo Miguel F Palisoc",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dayjs = require("dayjs");
  const YEAR_TODAY = dayjs().year();
  const client = getClient();
  const data = await client.fetch<LayoutPayload>(layoutQuery);

  return (
    <html lang="en">
      <body className="max-w-[1024px] mx-auto px-24 mt-20 max-md:w-full max-md::mx-0 max-md:px-0 max-md:mt-0">
        <nav className="w-full">
          <Header />
          <Navbar sub_routes={data.writeupCategories} />
        </nav>
        {children}
        <footer className="relative h-80 bg-background border border-secondary p-5 text-xs mt-32">
          <div className="w-36">
            <LogoSmall />
            <p className="text-[10px] mt-2 mb-4 pl-2 leading-snug">
              A blog about me and my love for computer science.
            </p>
            <p className="text-[10px]  pl-2 leading-snug text-main">
              <span className="font-bold">Github:</span>{" "}
              <a
                target="_blank"
                className="hover:underline"
                href="https://github.com/karlopenguini"
              >
                @karlopenguini
              </a>
            </p>
            <p className="text-[10px]  pl-2 leading-snug text-main">
              <span className="font-bold">Linkedin:</span>{" "}
              <a
                target="_blank"
                className="hover:underline"
                href="https://www.linkedin.com/in/kmfpalisoc/"
              >
                @kmfpalisoc
              </a>
            </p>
          </div>
          <div className="absolute my-5 mx-auto w-full bottom-0">
            <p className="text-[9px] w-full text-center">
              Built with <span className="font-bold   ">Next.js</span>
            </p>
            <p className="text-[9px] w-full text-center">
              Copyright © {YEAR_TODAY} Karlo Miguel Palisoc <br />
              All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
