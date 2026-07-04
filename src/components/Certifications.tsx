import { Award, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

import ciscoCert from "../assets/certificates/cisco-it-essentials.pdf";
import sciencePosterCert from "../assets/certificates/aiub-science-poster.pdf";

const CERTS = [
  {
    title: "IT Essentials: PC Hardware and Software",
    issuer: "Cisco Networking Academy",
    year: "2022",
    pdf: ciscoCert,
  },
  {
    title: "AIUB Science Poster Contest – Certificate of Appreciation",
    issuer: "AIUB Science Poster Contest",
    year: "2022",
    pdf: sciencePosterCert,
  },
];

export function Certifications() {
  return (
    <section
      id="certs"
      className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40"
    >
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          — Professional Certifications
        </p>

        <h2 className="display-xl mb-16">
          Certifications.
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {CERTS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <div className="group h-full rounded-2xl bg-card p-8 border border-foreground/10 transition hover:-translate-y-1 hover:border-[color:var(--color-accent)]/60">

              <div className="flex items-start justify-between">
                <Award className="text-[color:var(--color-accent)]" />

                <span className="font-display text-xl">
                  {c.year}
                </span>
              </div>

              <h3 className="font-display text-2xl mt-8">
                {c.title}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                {c.issuer}
              </p>

              <a
                href={c.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition hover:bg-[color:var(--color-accent)] hover:text-foreground"
              >
                View Certificate
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:rotate-45"
                />
              </a>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}