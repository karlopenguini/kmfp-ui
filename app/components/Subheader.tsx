interface SubheaderProps {
  header: string;
  subheader: string;
}

const Subheader = ({ header, subheader }: SubheaderProps) => {
  return (
    <div className="text-xs bg-background px-8 py-4 flex flex-col justify-center">
      <h1 className=" text-2xl italic">{header}</h1>
      <p className="text-main  text-[11px]">{subheader}</p>
    </div>
  );
};

export default Subheader;
