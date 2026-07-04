import { Reveal } from "./Reveal";

const ITEMS = [
  { period: "2024 — Present", title: "Web Developer", org: "AlgoTech IT", body: "Building production web apps, API integrations, and shipping client work." },
  { period: "2022 — 2026", title: "B.Sc. in Computer Science", org: "American International University–Bangladesh", body: "CSE major. Focus on full-stack engineering, mobile, and applied ML." },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Journey</p>
        <h2 className="display-xl mb-16">Timeline.</h2>
      </Reveal>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-foreground/15" />
        <div className="space-y-16">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "" : ""}`}>
                <span className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-[color:var(--color-accent)] ring-4 ring-background" />
                <div className={`${i % 2 ? "md:order-2 md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">{it.period}</p>
                  <h3 className="font-display text-3xl mt-2">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{it.org}</p>
                </div>
                <div className={`${i % 2 ? "md:order-1 md:text-right md:pr-12" : "md:pl-12"} mt-3 md:mt-0`}>
                  <p className="text-muted-foreground leading-relaxed">{it.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
