import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Marquee } from "@/components/Marquee";
import { Cursor } from "@/components/Cursor";

export const Route = createFileRoute("/")({
  component: Index,
});

const SKILLS = ["React", "NestJS", "TypeScript", "JavaScript", "PostgreSQL", "Tailwind CSS", "REST APIs","Git & GitHub","Machine Learing","Data Science"];

function Index() {
  return (
    <div className="grain relative min-h-screen bg-background text-foreground">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee items={SKILLS} />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Timeline />
        <Contact />
      </main>
      <footer className="border-t border-foreground/10 py-8 px-6 md:px-12">
        <div className="mx-auto max-w-[1600px] flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Ahmad</span>
        </div>
      </footer>
    </div>
  );
}
