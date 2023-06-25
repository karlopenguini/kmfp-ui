export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="mx-[105px] mt-16  space-y-6">
      <h1 className="text-4xl">Photos</h1>
      <div className="grid-cols-[repeat(3,1fr)] grid auto-rows-auto gap-0.5">
        <div className="relative w-full after:content-[''] after:block after:pb-[100%] bg-secondary animate-pulse" />
        <div className="relative w-full after:content-[''] after:block after:pb-[100%] bg-secondary animate-pulse" />
        <div className="relative w-full after:content-[''] after:block after:pb-[100%] bg-secondary animate-pulse" />
        <div className="relative w-full after:content-[''] after:block after:pb-[100%] bg-secondary animate-pulse" />
        <div className="relative w-full after:content-[''] after:block after:pb-[100%] bg-secondary animate-pulse" />
        <div className="relative w-full after:content-[''] after:block after:pb-[100%] bg-secondary animate-pulse" />
      </div>
    </section>
  );
}
