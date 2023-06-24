import Link from "next/link";

const CatalogueList = ({ _createdAt, title, writeupTags, slug }: any) => {
  const dayjs = require("dayjs");
  const RANDOM_DATE = dayjs(_createdAt).format("MM/DD/YYYY hh:MM a");
  return (
    <div className="flex flex-col space-y-1 text-[10px] text-main">
      <p className="font-bold hover:underline">
        <Link href={`/writeup/post/${slug.current}`}>{title}</Link>
      </p>
      <div className="flex flex-col text-[9px]">
        <p>{RANDOM_DATE}</p>
        <p className="text-ellipsis whitespace-nowrap overflow-hidden w-full">
          <span className="font-bold italic">Tags:</span>{" "}
          {writeupTags.join(", ")}
        </p>
      </div>
    </div>
  );
};

const Catalogue = ({
  preHeader,
  header,
  writeups,
}: {
  preHeader: string;
  header: string;
  writeups: {
    writeupPost: string;
    _createdAt: Date;
    slug: {
      current: string;
      _type: string;
    };
    writeupTags: string[];
    title: string;
  }[];
}) => {
  const catalogues = writeups.map((writeup) => {
    return (
      <CatalogueList
        _dateCreated={writeup._createdAt}
        title={writeup.title}
        writeupTags={writeup.writeupTags}
        slug={writeup.slug}
      />
    );
  });

  return (
    <div className="max-h-72 flex flex-col space-y-4 px-4 py-2 bg-background border border-secondary border-opacity-50">
      <p className="text-[11px] ">
        {preHeader}
        <span className="font-bold italic"> {header}</span>
      </p>
      <div className="flex flex-col space-y-6  overflow-auto">{catalogues}</div>
    </div>
  );
};

export default Catalogue;
