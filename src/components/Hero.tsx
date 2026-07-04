import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import portrait from "@/assets/hero.png";
import resumePdf from "@/assets/My_Resume.pdf";
import { Magnetic } from "./Magnetic";

const ROLES = ["Developer", "ENGINEER", "PROGRAMMER","CSE Student"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Raw mouse position (normalised -0.5 → 0.5 relative to section)

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Smooth spring followers
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  // Text block shifts slightly in OPPOSITE direction (feels pushed by cursor)
  const textX = useTransform(sx, (v) => v * -18);
  const textY = useTransform(sy, (v) => v * -18);

  // Image shifts WITH the cursor (follows it)
  const imgX = useTransform(sx, (v) => v * 28);
  const imgY = useTransform(sy, (v) => v * 28);

  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const cur = ROLES[idx];
    let i = 0;
    let deleting = false;
    const tick = () => {
      if (!deleting) {
        i++;
        setText(cur.slice(0, i));
        if (i === cur.length) { deleting = true; setTimeout(tick, 1600); return; }
      } else {
        i--;
        setText(cur.slice(0, i));
        if (i === 0) { setIdx((p) => (p + 1) % ROLES.length); return; }
      }
      setTimeout(tick, deleting ? 50 : 100);
    };
    const t = setTimeout(tick, 200);
    return () => clearTimeout(t);
  }, [idx]);

  // Track cursor relative to the section
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left - r.width / 2) / r.width);
      my.set((e.clientY - r.top - r.height / 2) / r.height);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* ── LEFT: text — moves opposite to cursor ── */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="relative z-10 flex flex-col justify-center pt-32 pb-16 px-6 md:px-12 lg:px-16 md:min-h-screen"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl md:text-3xl text-[color:var(--color-accent)] mb-2"
          >
            Hey
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl mb-4 text-stroke md:-webkit-text-fill-color"
            style={{ WebkitTextFillColor: "var(--color-foreground)" }}
          >
            I'm Ishrak
          </motion.h1>

          {/* "I'm a [ANIMATED ROLE]" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display flex items-baseline gap-3 mb-10"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 1 }}
          >
            <span className="text-muted-foreground whitespace-nowrap">I'm a</span>
            <span
              aria-label={text || "Developer"}
              className="text-[color:var(--color-accent)]"
            >
              {text}
              <span className="inline-block w-[0.06em] h-[0.8em] ml-1 bg-[color:var(--color-accent)] animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-[color:var(--color-accent)] hover:text-foreground"
              >
                View Work <ArrowUpRight size={16} className="transition group-hover:rotate-45" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={resumePdf}
                download="Tahmid_Sadat_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium bg-background/50 backdrop-blur-sm transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
              >
                Download Resume <Download size={16} />
              </a>
            </Magnetic>
          </motion.div>

          </motion.div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-6 left-6 md:left-12 text-foreground/40"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </motion.div>
        </motion.div>

        {/* ── RIGHT: portrait — moves WITH cursor ── */}
        <div className="absolute inset-0 md:relative md:inset-auto opacity-40 min-h-screen md:min-h-0 pointer-events-none md:pointer-events-auto flex items-end justify-center">
          <motion.div style={{ x: imgX, y: imgY }} className="h-[90vh]">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="h-full"
            >
              <motion.img
                src={portrait}
                alt="Tahmid Sadat portrait"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}
                className="h-full w-auto max-w-none grayscale contrast-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
