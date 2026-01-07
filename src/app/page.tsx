import HeroSpotlight from "@/components/HeroSpotlight";
import SectionRow from "@/components/SectionRow";
import TopNav from "@/components/TopNav";
import { hero, rows } from "@/lib/mockCatalog";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1a1a25,transparent_55%),radial-gradient(circle_at_bottom,#09090f,transparent_40%)]">
      <TopNav />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-8 md:px-10 md:pt-12">
        <HeroSpotlight
          title={hero.title}
          subtitle={hero.subtitle}
          backgroundImage={hero.backgroundImage}
        />
        <div className="space-y-10">
          {rows.map((row) => (
            <SectionRow key={row.title} title={row.title} items={row.items} />
          ))}
        </div>
      </main>
      <footer className="border-t border-ticle-border/60 px-6 py-10 text-xs text-ticle-subtext md:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2">
          <span className="tracking-[0.4em]">TICLE</span>
          <span>Premium micro-drama streaming. Curated stories, zero clutter.</span>
        </div>
      </footer>
    </div>
  );
}
