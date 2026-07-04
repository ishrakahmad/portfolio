import { Reveal } from "./Reveal";

const ITEMS = [
  {
    period: "2022 — Present",
    title: "B.Sc. in Computer Science & Engineering",
    org: "American International University-Bangladesh (AIUB)",
    body: "Started my Computer Science journey building a strong foundation in programming software engineering and problem solving.",
  },

  {
    period: "2022",
    title: "Projects & Certifications",
    org: "Portfolio Development",
    body: "Developed multiple real-world projects, earned the Cisco IT Essentials certification and received the AIUB Science Poster Contest Certificate of Appreciation.",
  },
  
  {
    period: "2026",
    title: "Full-Stack Development",
    org: "React • Next.js • NestJS • PostgreSQL",
    body: "Built full-stack applications using React, Next.js, NestJS, REST APIs and PostgreSQL while improving backend development skills.",
  },
 
  {
    period: "2026 — Present",
    title: "Open to Software Engineering Internship",
    org: "Aspiring Software Engineer",
    body: "Actively seeking internship opportunities to apply my skills in React, Next.js, NestJS, PostgreSQL and modern web development while continuously learning Machine Learning and Data Science.",
  },
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
