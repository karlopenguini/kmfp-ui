import Catalogue from "@/app/components/Catalogue";
import Subheader from "@/app/components/Subheader";
import WriteupPreview from "@/app/components/writeup/WriteupPreview";
import { getClient } from "@/lib/sanity.client";
import { writeupsByCategoryQuery } from "@/lib/sanity.queries";
import { WriteupsByCategoryPayload } from "@/types";

export default async function WriteupPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const client = getClient();
  const data = await client.fetch<WriteupsByCategoryPayload | null>(
    writeupsByCategoryQuery,
    {
      slug,
    }
  );

  const writeups = data?.writeups.map((writeup) => {
    return (
      <div key={writeup.slug.current}>
        <WriteupPreview
          _createdAt={writeup._createdAt}
          slug={writeup.slug}
          writeupTags={writeup.writeupTags}
          title={writeup.title}
          writeupPost={writeup.writeupPost}
        />
      </div>
    );
  });

  return (
    <>
      <Subheader
        header={data!.writeupCategory.title}
        subheader={data!.writeupCategory.description}
      />
      <div className="grid md:grid-cols-[1fr,188px] mt-5 gap-5">
        <div className="md:mx-[105px] mx-4 md:mt-10 mt-8 flex flex-col space-y-10">
          {data?.writeups.length == 0 ? "No posts yet." : writeups}
        </div>

        <Catalogue
          preHeader="Writeups under"
          header={data!.writeupCategory.title}
          writeups={data!.writeups}
        />
      </div>
    </>
  );
}
