import Image from "next/image";

interface PosterCardProps {
  title: string;
  image: string;
}

export default function PosterCard({ title, image }: PosterCardProps) {
  return (
    <button
      type="button"
      className="group flex w-28 flex-col gap-2 text-left focus:outline-none md:w-36"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-transparent bg-ticle-muted transition duration-300 group-hover:border-ticle-accent/70 group-focus-visible:border-ticle-accent/70">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 112px, 144px"
        />
      </div>
      <p className="line-clamp-2 text-xs text-ticle-subtext transition group-hover:text-ticle-text">
        {title}
      </p>
    </button>
  );
}
