import Link from "next/link";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ticle-border/60 bg-ticle-black/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.35em] text-ticle-text"
        >
          TICLE
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ticle-border/70 bg-ticle-muted/70 text-ticle-text transition hover:border-ticle-accent/60 hover:text-white"
            aria-label="Search"
          >
            <span className="text-lg">⌕</span>
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ticle-border/70 bg-ticle-muted/70 text-ticle-text transition hover:border-ticle-accent/60 hover:text-white"
            aria-label="Profile"
          >
            <span className="text-lg">⧉</span>
          </button>
        </div>
      </div>
    </header>
  );
}
