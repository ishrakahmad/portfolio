import { Award } from "lucide-react";
import { Reveal } from "./Reveal";

const CERTS = [
  { title: "Python", issuer: "Kaggle", year: "2026" },
  { title: "AI Fundamentals", issuer: "Simplilearn", year: "2026" },
  { title: "Machine Learning", issuer: "Simplilearn", year: "2026" },
];

export function Certifications() {
  return (
    <section id="certs" className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Credentials</p>
        <h2 className="display-xl mb-16">Certifications.</h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {CERTS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <div className="group relative h-full rounded-2xl bg-card p-8 border border-foreground/10 transition hover:-translate-y-1 hover:border-[color:var(--color-accent)]/60">
              <div className="flex items-start justify-between">
                <Award className="text-[color:var(--color-accent)]" />
                <span className="font-display text-xl">{c.year}</span>
              </div>
              <h3 className="font-display text-3xl mt-10">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">{c.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
