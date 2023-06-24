import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Chevron from "../svg/Chevron";
import { BiTime, BiSolidRightArrow } from "react-icons/bi";
import { IoPricetagSharp } from "react-icons/io5";

export default async function WriteupPreview({
  categoryName = "",
  parentSlug = "",
  isPreview = true,
  _createdAt,
  slug,
  writeupTags,
  title,
  writeupPost,
  marginTop = "10",
}: any) {
  const dayjs = require("dayjs");
  const date = dayjs(_createdAt);
  const DATE_CREATED = date.format("MMMM D, YYYY hh:MM a");
  const month = date.format("MM");
  const day = date.format("DD");
  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/${month}/${day}`;
  const response = await fetch(url, { cache: "no-store" });
  const res: any = await response.json();
  return (
    <div className={`w-full space-y-10 my-${marginTop}`}>
      <div>
        {!isPreview && (
          <div className="flex items-center text-[10px] text-main mb-3">
            <p className="hover:underline">
              <Link href={`/writeup/${parentSlug}`}>{categoryName}</Link>
            </p>
            <div className="-rotate-90 scale-75">
              <Chevron />
            </div>
            <p className="">{title}</p>
          </div>
        )}

        <h1 className="text-5xl w-full hover:underline hover:text-main  text-[#303030] font-serif">
          <Link href={`/writeup/post/${slug.current}`}>{title}</Link>
        </h1>
        <div className="mt-3 flex space-x-4 text-xs text-main whitespace-nowrap">
          <div className="flex items-center space-x-2 group hover:underline hover:cursor-pointer rounded-sm">
            <div className="absolute z-20 group-hover:visible invisible w-52 -translate-x-52 whitespace-break-spaces flex items-center space-x-0">
              <p className="bg-main p-2 text-[#FFFFFF] ">
                {res.selected[0].text}
              </p>
              <p className="text-base -translate-x-1">
                <BiSolidRightArrow />
              </p>
            </div>
            <BiTime />
            <p>{DATE_CREATED}</p>
          </div>
          <div className="flex items-center space-x-2 text-main">
            <IoPricetagSharp />
            <p className="w-full whitespace-break-spaces">
              {writeupTags.join(", ")}
            </p>
          </div>
        </div>
      </div>
      <div className="prose text-sm leading-6 w-full">
        <MDXRemote source={writeupPost} />
      </div>
    </div>
  );
}
