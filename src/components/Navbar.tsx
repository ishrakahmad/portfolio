import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Magnetic } from "./Magnetic";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certs", label: "Certifications" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) { setActive(l.id); break; }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[100] backdrop-blur-md transition-all ${scrolled ? "bg-background/80 border-b border-foreground/10" : "bg-background/50"}`}>
      <nav className="relative mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12 py-5">
        <a href="#home" className="font-display text-2xl md:text-3xl tracking-tight">
          Ishrak<span className="text-[color:var(--color-accent)]">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {LINKS.map((l) => (
            <li key={l.id}>
              <Magnetic strength={0.25}>
                <a
                  href={`#${l.id}`}
                  className="relative block px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-[color:var(--color-accent)]"
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-px bg-[color:var(--color-accent)]"
                    />
                  )}
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-foreground/20"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-[110] bg-foreground text-background pt-24"
          >
            <ul className="flex flex-col px-8">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="border-b border-background/15"
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="font-display block py-5 text-5xl"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Close button inside the menu overlay */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 md:right-12 grid h-11 w-11 place-items-center rounded-full border border-background/20"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
