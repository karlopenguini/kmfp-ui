import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Logo from "./components/svg/Logo";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Karlo Palisoc's Blog",
  description: "Created by Karlo Miguel F Palisoc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dayjs = require("dayjs");
  const YEAR_TODAY = dayjs().year();
  return (
    <html lang="en">
      <body className="max-w-[1024px] mx-auto px-24 my-20">
        <nav className="mb-4">
          <Header />
          <Navbar />
        </nav>
        {children}
        <footer className="relative h-80 bg-background border border-secondary p-5 text-xs mt-32">
          <div className="w-36">
            <p className="italic text-sm">About</p>
            <p className="text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
