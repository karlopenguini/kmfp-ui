"use client";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PhotoPayload } from "@/types";
import { photosQuery } from "@/lib/sanity.queries";

const PhotosPage = async () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
  };
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
          <img
            style={smallItemStyles}
            src={urlFor(photoPayload.photo).maxWidth(400).url()}
            ref={ref as React.MutableRefObject<HTMLImageElement>}
            onClick={open}
          />
        )}
      </Item>
    );
  });
  return (
    <section className="mx-[105px] mt-16  space-y-6">
      <h1 className="text-4xl">Photos</h1>
      <Gallery id="photos">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 171px 171px",
            gridTemplateRows: "114px 114px",
            gridGap: 12,
          }}
        >
          {GalleryItems}
        </div>
      </Gallery>
    </section>
  );
};

export default PhotosPage;
