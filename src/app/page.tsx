import SkeletonRow from "@/components/SkeletonRow";

const rows = [
  "Continue Watching",
  "Trending Now",
  "New Drops",
  "Editors' Picks"
];

export default function Home() {
  return (
    <div className="space-y-12 px-6 pb-16 pt-10 md:px-12">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-ticle-subtext">
          <span className="h-[1px] w-6 bg-ticle-border" />
          Premium Micro-drama
        </div>
        <h1 className="text-3xl font-semibold leading-tight text-ticle-text md:text-4xl">
          TICLE previews
          <span className="block text-ticle-subtext">Cinematic stories in vertical motion.</span>
        </h1>
        <p className="max-w-xl text-sm text-ticle-subtext md:text-base">
          Curated, binge-ready episodes built for the smallest moments. Your home feed will
          populate here once the catalog goes live.
        </p>
      </header>

      <div className="space-y-10">
        {rows.map((title) => (
          <SkeletonRow key={title} title={title} />
        ))}
      </div>
    </div>
  );
}
