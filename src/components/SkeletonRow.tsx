interface SkeletonRowProps {
  title: string;
  items?: number;
}

export default function SkeletonRow({ title, items = 6 }: SkeletonRowProps) {
  return (
    <section className="space-y-3">
      <div className="h-4 w-32 rounded-full bg-ticle-muted" />
      <div className="flex gap-3 overflow-hidden">
        {Array.from({ length: items }).map((_, index) => (
          <div
            key={`${title}-${index}`}
            className="skeleton h-40 w-24 flex-none rounded-2xl md:h-44 md:w-28"
          />
        ))}
      </div>
    </section>
  );
}
