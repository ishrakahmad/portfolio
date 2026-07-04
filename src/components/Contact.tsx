import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    // Replace with your Web3Forms access key
    formData.append("access_key", "04a4854a-eaed-4ede-8878-50436fd9b76e");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-40">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">— Contact</p>
      </Reveal>

      <Reveal>
        <h2
          className="font-display leading-[0.9] select-none"
          style={{ fontSize: "clamp(4.5rem, 16vw, 15rem)" }}
        >
          LET'S WORK
          <br />
          <span className="italic text-[color:var(--color-accent)]">TOGETHER.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-2 items-start">
        <Reveal>
          <a
            href="mailto:ishrakahmad782@gmail.com"
            className="group inline-flex items-center gap-3 font-display text-xl md:text-2xl lowercase tracking-wide break-all hover:text-[color:var(--color-accent)] transition"
          >
            ishrakahmad782@gmail.com
            <ArrowUpRight className="shrink-0 transition group-hover:rotate-45" size={20} />
          </a>

          <div className="mt-10 flex gap-3">
            <Magnetic>
              <a
                href="https://github.com/ishrakahmad"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 text-sm hover:border-[color:var(--color-accent)] transition"
              >
                <GithubIcon size={16} /> GitHub
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/ishrakahmad/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 text-sm hover:border-[color:var(--color-accent)] transition"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl bg-card p-6 md:p-8 border border-foreground/10"
          >
            <input type="hidden" name="subject" value="New Submission from Portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact Form" />

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                <input
                  name="name"
                  required
                  className="mt-2 w-full bg-transparent border-b border-foreground/30 py-2 outline-none focus:border-[color:var(--color-accent)]"
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full bg-transparent border-b border-foreground/30 py-2 outline-none focus:border-[color:var(--color-accent)]"
                  placeholder=""
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-foreground/30 py-2 outline-none focus:border-[color:var(--color-accent)] resize-none"
              />
            </label>

            <div className="flex items-center gap-4">
              <Magnetic>
                <button
                  disabled={status === "loading" || status === "success"}
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background hover:bg-[color:var(--color-accent)] hover:text-foreground transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Message sent!" : "Send message"}
                  {status !== "loading" && status !== "success" && (
                    <ArrowUpRight size={16} className="transition group-hover:rotate-45" />
                  )}
                </button>
              </Magnetic>

              {status === "error" && (
                <span className="text-red-500 text-sm">Failed to send message. Please try again.</span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
