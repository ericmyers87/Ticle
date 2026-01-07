import Link from "next/link";
import PosterCard from "@/components/PosterCard";

interface SectionItem {
  title: string;
  image: string;
}

interface SectionRowProps {
  title: string;
  items: SectionItem[];
  viewAllHref?: string;
}

export default function SectionRow({
  title,
  items,
  viewAllHref = "#"
}: SectionRowProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-ticle-text md:text-lg">
          {title}
        </h3>
        <Link
          href={viewAllHref}
          className="text-xs uppercase tracking-[0.2em] text-ticle-subtext hover:text-ticle-text"
        >
          View all
        </Link>
      </div>
      <div className="relative">
        <div className="scrollbar-hidden scroll-snap flex gap-4 overflow-x-auto pb-2">
          {items.map((item) => (
            <div key={item.title} className="scroll-snap-item">
              <PosterCard title={item.title} image={item.image} />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-12 bg-gradient-to-r from-ticle-black/90 to-transparent md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-12 bg-gradient-to-l from-ticle-black/90 to-transparent md:block" />
        <div className="pointer-events-none absolute inset-y-0 left-2 hidden items-center md:flex">
          <button
            type="button"
            className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-ticle-border/70 bg-ticle-muted/80 text-ticle-text"
            aria-label="Scroll left"
          >
            ‹
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-2 hidden items-center md:flex">
          <button
            type="button"
            className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-ticle-border/70 bg-ticle-muted/80 text-ticle-text"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
