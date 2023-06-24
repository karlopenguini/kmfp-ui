import WriteupPreview from "@/app/components/writeup/WriteupPreview";
import { getClient } from "@/lib/sanity.client";
import { writeupPostQuery } from "@/lib/sanity.queries";
import { WriteupPostPayload } from "@/types";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

export default async function WriteupPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const client = getClient();
  const data = await client.fetch<WriteupPostPayload | null>(writeupPostQuery, {
    slug,
  });

  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }

  return (
    <>
      <div className="mt-5 z-0">
        <div className="mx-[105px] flex flex-col">
          {data?.writeupCoverImage && (
            <div className="w-full relative h-[201px]">
              <Image
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
                alt="mandelbrot"
                className="w-full"
                src={urlFor(data!.writeupCoverImage).url()}
              />
            </div>
          )}

          <WriteupPreview
            categoryName={data?.writeupCategory.title}
            parentSlug={data?.writeupCategory._id}
            marginTop="5"
            isPreview={false}
            _createdAt={data!._createdAt}
            slug={data!.slug}
            writeupTags={data!.writeupTags}
            title={data!.title}
            writeupPost={data!.writeupPost}
          />
        </div>
      </div>
    </>
  );
}
