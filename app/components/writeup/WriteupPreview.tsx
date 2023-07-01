import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import Chevron from "../svg/Chevron";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import { BiTime, BiSolidRightArrow } from "react-icons/bi";
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

  const { content } = await compileMDX<{ title: string }>({
    source: writeupPost,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeRaw, rehypeSanitize, rehypeKatex],
        format: "md",
      },
    },
  });
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

        <h1 className="md:text-5xl  text-3xl w-full hover:underline hover:text-main  text-[#303030] font-serif">
          <Link href={`/writeup/post/${slug.current}`}>{title}</Link>
        </h1>
        <div className="mt-3 flex flex-col md:flex-row space-y-1 md:space-y-0 space-x-0 md:space-x-4 text-[11px] text-main">
          <div className="whitespace-nowrap flex items-center space-x-2 group hover:underline hover:cursor-pointer rounded-sm">
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
            <p className="text-elipsis">{writeupTags.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="prose text-[#000000] text-[12px] text-justify">
        {content}
      </div>
    </div>
  );
}
