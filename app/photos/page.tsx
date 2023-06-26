"use client";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PhotoPayload } from "@/types";
import { photosQuery } from "@/lib/sanity.queries";

const PhotosPage = async () => {
  const client = getClient();
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }

  const photos = await client.fetch<PhotoPayload[]>(photosQuery);
  const GalleryItems = photos.map((photoPayload) => {
    const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;
    const [_, __, resolution] = pattern.exec(photoPayload.photo.asset._ref) || [
      0, 0,
    ];

    const [width, height] = resolution.toString().split("x");
    return (
      <Item
        original={urlFor(photoPayload.photo).url()}
        thumbnail={urlFor(photoPayload.photo)
          .maxWidth(400)
          .minHeight(400)
          .url()}
        width={width}
        height={height}
        alt={photoPayload.title}
        key={photoPayload.title}
        id={photoPayload._id}
        caption={"CC by " + photoPayload.attribution}
      >
        {({ ref, open }) => (
          <div className="hover:cursor-pointer relative w-full after:content-[''] after:block after:pb-[100%]">
            <img
              className="absolute w-full h-full object-cover hover:opacity-75"
              src={urlFor(photoPayload.photo).maxWidth(400).url()}
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          </div>
        )}
      </Item>
    );
  });
  return (
    <section className="md:mx-[105px] mx-4 md:mt-4 mt-8  space-y-6">
      <h1 className="text-4xl">Photos</h1>
      <Gallery id="photos">
        <div className="grid-cols-[repeat(3,1fr)] grid auto-rows-auto gap-0.5">
          {GalleryItems}
        </div>
      </Gallery>
    </section>
  );
};

export default PhotosPage;
