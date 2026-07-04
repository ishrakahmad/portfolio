import { Code2, Server, Smartphone, Database, Brain, Wrench, Layers, Terminal, BracketsIcon, AppWindowIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const SKILLS = [
  { icon: Terminal, title: "Languages", items: [ "JavaScript", "TypeScript","Python","C#", "C++"] },
  { icon: Code2, title: "Frontend", items: ["React", "Next.js", "HTML5","CSS3", "Tailwind CSS"] },
  { icon: BracketsIcon, title: " Backend", items: ["NestJS","Node.js"] },
  { icon: Database, title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { icon: Wrench, title: "Tools & Platforms", items: ["Git", "GitHub", "Linux", "VS Code", "Postman","Vite","REST APIs"] },
 
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Toolkit</p>
        <h2 className="display-xl mb-16">Skills.</h2>
      </Reveal>
      <div className="grid gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden md:grid-cols-3 lg:grid-cols-5">
        {SKILLS.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="group h-full bg-background p-8 transition-colors hover:bg-card">
                <Icon className="text-[color:var(--color-accent)] transition group-hover:scale-110" />
                <h3 className="font-display text-2xl mt-6">{s.title}</h3>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  {s.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
