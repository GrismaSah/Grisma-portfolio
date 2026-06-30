"use client";
import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { PROFILE, EMAILJS } from "@/constants";
import { slideLeft, slideRight, viewport } from "@/animations/variants";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";

const INFO = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: MapPin, label: "Location", value: PROFILE.location, href: null },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (d: { name: string; email: string; message: string }) => {
    const e: Record<string, string> = {};
    if (!d.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Enter a valid email.";
    if (d.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const eobj = validate(data);
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
      window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
        "Portfolio contact from " + data.name
      )}&body=${encodeURIComponent(data.message + "\n\n— " + data.email)}`;
      return;
    }
    try {
      setStatus("sending");
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, {
        publicKey: EMAILJS.publicKey,
      });
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const field =
    "w-full rounded-2xl border border-line bg-bg/40 px-4 py-3 font-body text-sm text-ink placeholder:text-muted/70 focus:border-accent/60 focus:outline-none transition-colors";

  return (
    <section id="contact" className="section-pad px-5">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Say hello" title="Let's" highlight="Connect" />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={viewport}
            className="flex flex-col gap-4">
            <p className="font-body text-muted">
              Have an internship, an opportunity, or just want to talk code? My
              inbox is open.
            </p>
            {INFO.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="surface grad-border flex items-center gap-4 p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-accent to-blue text-white">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-muted">{label}</p>
                    <p className="font-body text-sm text-ink/90">{value}</p>
                  </div>
                </div>
              );
              return href ? <a key={label} href={href} className="block">{inner}</a> : <div key={label}>{inner}</div>;
            })}
            <div className="mt-2"><SocialLinks /></div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="surface relative space-y-4 p-6 sm:p-8"
            noValidate
          >
            <div>
              <input name="name" placeholder="Your name" className={field} />
              {errors.name && <p className="mt-1 font-body text-xs text-red-400">{errors.name}</p>}
            </div>
            <div>
              <input name="email" type="email" placeholder="Your email" className={field} />
              {errors.email && <p className="mt-1 font-body text-xs text-red-400">{errors.email}</p>}
            </div>
            <div>
              <textarea name="message" rows={5} placeholder="Your message" className={`${field} resize-none`} />
              {errors.message && <p className="mt-1 font-body text-xs text-red-400">{errors.message}</p>}
            </div>

            <button type="submit" disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-blue px-6 py-3 font-body text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-blue disabled:opacity-60">
              {status === "sending" ? (<><Loader2 size={16} className="animate-spin" /> Sending…</>) : (<><Send size={16} /> Send Message</>)}
            </button>

            {status === "error" && (
              <p className="text-center font-body text-sm text-red-400">
                Something went wrong — please email me directly.
              </p>
            )}

            <AnimatePresence>
              {status === "sent" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[20px] bg-card/95 backdrop-blur">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                    <CheckCircle2 size={56} className="text-accent" />
                  </motion.div>
                  <p className="font-display text-lg font-bold">Message sent!</p>
                  <p className="font-body text-sm text-muted">I&apos;ll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
