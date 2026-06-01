import Link from "next/link";
import {
  Radio,
  CircleDot,
  Smartphone,
  Captions,
  ShieldCheck,
  Key,
  Lock,
  ArrowRight,
  Download,
  Mic,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Radio,
    title: "Real-time voice-to-voice",
    body: "Speak any language, hear fluent Polish back with minimal delay. Speech and text stay in sync.",
  },
  {
    icon: CircleDot,
    title: "One-button simplicity",
    body: "A single interaction bubble controls everything. Hold to speak, release to translate. Nothing to learn.",
  },
  {
    icon: Smartphone,
    title: "Installable PWA",
    body: "Add it to your home screen and launch it like a native app. No app store, no waiting room.",
  },
  {
    icon: Captions,
    title: "See it as you say it",
    body: "Watch your speech transcribed live on top, and the Polish translation build word-by-word below.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "Your API key stays on your device. No conversation history, no telemetry, no tracking.",
  },
  {
    icon: Key,
    title: "Secure sign-in with Clerk",
    body: "Authenticate in one tap and start translating in seconds. Identity handled by industry-standard Clerk.",
  },
];

const steps = [
  {
    n: "01",
    title: "Sign in",
    body: "One tap with secure Clerk authentication.",
  },
  {
    n: "02",
    title: "Hold & speak",
    body: "Press the mic and say it in any language Gemini Live supports.",
  },
  {
    n: "03",
    title: "Release & hear",
    body: "Get fluent Polish as speech and text — instantly.",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="flex-1 pt-28 sm:pt-32">
        {/* ───── Hero ───── */}
        <section className="px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <p
                className="hero-fade inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/55 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)] backdrop-blur-md"
                style={{ animationDelay: "0ms" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ua-blue)]" />
                Any language → Polish
              </p>

              <h1
                className="hero-fade font-display mt-5 text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[var(--text-primary)]"
                style={{ animationDelay: "80ms" }}
              >
                Speak any language,
                <br />
                hear Polish.{" "}
                <span className="bg-gradient-to-r from-[var(--ua-blue)] via-[var(--ua-wheat)] to-[var(--pl-crimson)] bg-clip-text text-transparent">
                  Instantly.
                </span>
              </h1>

              <p
                className="hero-fade mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl"
                style={{ animationDelay: "160ms" }}
              >
                One button between you and a conversation. Press, speak,
                release — and hear yourself in fluent Polish in the same breath.
              </p>

              <div
                className="hero-fade mt-8 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "240ms" }}
              >
                <Link
                  href="/app"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold",
                    "bg-[var(--ua-blue)] text-white shadow-[0_8px_24px_rgba(42,91,215,0.35)]",
                    "hover:-translate-y-0.5 hover:brightness-110",
                    "transition-all duration-200 ease-out cursor-pointer",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
                  )}
                >
                  <Mic className="h-4 w-4" aria-hidden="true" />
                  Try it free
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/#features"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold",
                    "border border-white/55 bg-white/55 text-[var(--text-primary)] backdrop-blur-md",
                    "hover:bg-white/75 hover:-translate-y-0.5",
                    "transition-all duration-200 ease-out cursor-pointer",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
                  )}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Install PWA
                </Link>
              </div>

              <div
                className="hero-fade mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--text-muted)]"
                style={{ animationDelay: "320ms" }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" /> Private by
                  design
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Radio className="h-3.5 w-3.5" aria-hidden="true" /> Powered
                  by Gemini Live
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />{" "}
                  Installable PWA
                </span>
              </div>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={120}>
                <PhoneMockup />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───── Features (bento) ───── */}
        <section id="features" className="mt-28 sm:mt-36 px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ua-blue)]">
                  Features
                </p>
                <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-4xl">
                  Built for one job. Built to do it perfectly.
                </h2>
                <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
                  No menus, no language pickers, no setup friction. Just one
                  button between you and a conversation.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.title} delay={i * 60}>
                    <article
                      className={cn(
                        "group glass rounded-3xl p-6 sm:p-7 h-full",
                        "transition-all duration-200 ease-out",
                        "hover:bg-white/70 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(11,20,55,0.16)]",
                      )}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--ua-blue)]/10 text-[var(--ua-blue)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-display mt-5 text-lg font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                        {f.body}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───── How it works ───── */}
        <section id="how" className="mt-28 sm:mt-36 px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ua-blue)]">
                  How it works
                </p>
                <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-4xl">
                  Three steps. One breath.
                </h2>
              </div>
            </Reveal>

            <div className="relative mt-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[44px] left-[16%] right-[16%] hidden h-px md:block"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--ua-blue) 20%, var(--ua-wheat) 50%, var(--pl-crimson) 80%, transparent)",
                  opacity: 0.4,
                }}
              />

              <ol className="grid gap-5 md:grid-cols-3">
                {steps.map((s, i) => (
                  <Reveal key={s.n} delay={i * 100}>
                    <li className="glass relative rounded-3xl p-6 sm:p-7 h-full">
                      <div className="flex items-center gap-3">
                        <span className="font-display inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-base font-bold tabular-nums tracking-tight text-[var(--ua-blue)] border border-white/55">
                          {s.n}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                          Step {Number(s.n)}
                        </span>
                      </div>
                      <h3 className="font-display mt-5 text-xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                        {s.body}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ───── Privacy ───── */}
        <section id="privacy" className="mt-28 sm:mt-36 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="glass-strong rounded-3xl p-8 sm:p-12">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--ua-blue)]/10 text-[var(--ua-blue)]">
                    <Lock className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ua-blue)]">
                      Privacy
                    </p>
                    <h2 className="font-display mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-3xl">
                      Your conversations stay yours.
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                      Your API key stays on your device. We keep no
                      conversation history, run no telemetry, and store nothing
                      about what you say. The translation happens, then it&apos;s
                      gone.
                    </p>
                    <ul className="mt-5 grid gap-2 text-sm text-[var(--text-primary)] sm:grid-cols-2 sm:text-base">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--ua-blue)]" />
                        Local-only API key storage
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--ua-blue)]" />
                        No conversation history
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--ua-blue)]" />
                        No analytics, no tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--ua-blue)]" />
                        Open about every dependency
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───── Final CTA ───── */}
        <section className="mt-28 sm:mt-36 px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="glass-strong relative overflow-hidden rounded-[32px] px-6 py-14 sm:px-14 sm:py-20 text-center">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 opacity-90"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse 60% 60% at 30% 20%, rgba(42,91,215,0.22), transparent 65%), radial-gradient(ellipse 50% 50% at 80% 90%, rgba(217,83,79,0.18), transparent 65%)",
                  }}
                />
                <h2 className="font-display mx-auto max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--text-primary)]">
                  Your voice, in Polish, in real time.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base text-[var(--text-muted)] sm:text-lg">
                  Sign in and start translating in seconds.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/sign-in"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold",
                      "bg-[var(--ua-blue)] text-white shadow-[0_10px_28px_rgba(42,91,215,0.4)]",
                      "hover:-translate-y-0.5 hover:brightness-110",
                      "transition-all duration-200 ease-out cursor-pointer",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
                    )}
                  >
                    Get started
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/app"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold",
                      "border border-white/55 bg-white/55 text-[var(--text-primary)] backdrop-blur-md",
                      "hover:bg-white/75 hover:-translate-y-0.5",
                      "transition-all duration-200 ease-out cursor-pointer",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
                    )}
                  >
                    See the demo
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
