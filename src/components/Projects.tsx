import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";

type Project = {
  name: string; n: string; desc: string; tech: string[]; demo?: string; repo?: string; tone: string;
};

const PROJECTS: Project[] = [
  { n: "01", name: "SkyCast", desc: "A responsive weather application that provides real time weather updates, 5 day forecasts and dynamic weather information using the OpenWeather API.", tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"], demo: "https://ishrakahmad.github.io/SkyCast/", tone: "from-amber-200/40 to-stone-300/30" },
  {
    n: "02",
    name: "To-Do App",
    desc: "A responsive task management application with local storage support, task organization and a clean user friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://ishrakahmad.github.io/ToDo-App/",
    repo: "https://github.com/ishrakahmad/ToDo-App",
    tone: "from-stone-200/40 to-amber-200/30",
  },
  {
    n: "03",
    name: "Pharmacy Management System",
    desc: "A desktop pharmacy management system featuring medicine inventory, sales management, customer records and CRUD operations with database integration.",
    tech: ["C#", "Windows Forms", "MySQL"],
    repo: "https://github.com/ishrakahmad/pharmacymanagementsystem",
    tone: "from-stone-200/40 to-amber-200/30",
  },

  {
    n: "04",
    name: "Online Lost & Found Portal",
    desc: "A web-based platform for reporting, searching and managing lost and found items with authentication, CRUD functionality and category filtering.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    repo: "https://github.com/ishrakahmad/Online-Lost-Found-Portal",
    tone: "from-amber-200/40 to-stone-300/30",
  },


   
];

function TiltCard({ p, flip }: { p: Project; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const trx = useTransform(srx, (v) => `${v}deg`);
  const tryy = useTransform(sry, (v) => `${v}deg`);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 12);
    rx.set(-py * 12);
  };
  const reset = () => { rx.set(0); ry.set(0); };

  return (
    <div className={`grid items-center gap-8 md:gap-16 md:grid-cols-12`}>
      <Reveal className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={reset}
          style={{ rotateX: trx, rotateY: tryy, transformPerspective: 1200 }}
          className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-card border border-foreground/10`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${p.tone}`} />
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-[18vw] md:text-[10vw] leading-none text-foreground/15 select-none">
              {p.n}
            </span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <span className="font-display text-xl">{p.name}</span>
            <ArrowUpRight className="text-foreground/60" />
          </div>
        </motion.div>
      </Reveal>

      <Reveal delay={0.1} className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span>{p.n}</span><span className="h-px w-10 bg-foreground/30" />
        </div>
        <h3 className="display-lg mt-3">{p.name}</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full border border-foreground/20 px-3 py-1 text-xs">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background hover:bg-[color:var(--color-accent)] hover:text-foreground transition">
              Live Demo <ArrowUpRight size={14} className="transition group-hover:rotate-45" />
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 text-sm hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition">
              <GithubIcon size={14} /> GitHub
            </a>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Selected Work</p>
            <h2 className="display-xl">Projects.</h2>
          </div>
          <p className="hidden md:block max-w-sm text-muted-foreground text-sm">
          A collection of projects that showcase my skills in frontend development backend development and modern web technologies.
          </p>
        </div>
      </Reveal>

      <div className="space-y-24 md:space-y-36">
        {PROJECTS.map((p, i) => <TiltCard key={p.name} p={p} flip={i % 2 === 1} />)}
      </div>
    </section>
  );
}
