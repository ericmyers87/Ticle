import Image from "next/image";

interface HeroSpotlightProps {
  title: string;
  backgroundImage: string;
  subtitle?: string;
}

export default function HeroSpotlight({
  title,
  backgroundImage,
  subtitle
}: HeroSpotlightProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-ticle-border/60 shadow-soft">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ticle-black via-ticle-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ticle-black/90 via-ticle-black/20 to-transparent" />
      <div className="relative z-10 flex min-h-[320px] flex-col justify-end gap-4 p-6 md:min-h-[420px] md:p-10">
        <div className="max-w-lg space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-ticle-subtext">
            Spotlight
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="text-sm text-ticle-subtext md:text-base">{subtitle}</p>
          ) : null}
        </div>
        <button className="w-fit rounded-full bg-ticle-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff1f2a]">
          ▶ Play trailer
        </button>
      </div>
    </section>
  );
}
