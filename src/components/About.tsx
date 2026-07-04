import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">— About</p>
      </Reveal>
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <h2 className="display-lg text-balance">
          Building modern<span className="italic text-[color:var(--color-accent)]">web solutions</span> with clean  <span className="italic">code</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-5 md:pt-3">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          I'm Ishrak Ahmad — a Frontend Developer and CSE student at AIUB with experience in building modern web applications using React, NestJS and PostgreSQL. I also have a growing interest in Machine Learning and Data Science while continuously exploring new technologies.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-foreground/15 pt-8">
            <div className="col-span-2">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Education</dt>
              <dd className="mt-1 font-display text-xl md:text-2xl">B.Sc in CSE at American International University-Bangladesh</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Graduating</dt>
              <dd className="mt-1 font-display text-2xl">2026</dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Based in</dt>
              <dd className="mt-1 font-display text-2xl">Dhaka, BD</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
