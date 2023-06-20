import Image from "next/image";
import AboutPage from "./about/page";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/about");
}
