export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden border-y border-foreground/15 bg-foreground text-background py-6">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-4xl md:text-6xl tracking-wide flex items-center gap-12">
            {t}
            <span className="inline-block h-3 w-3 rounded-full bg-[color:var(--color-accent)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
