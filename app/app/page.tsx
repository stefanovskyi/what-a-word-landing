import Link from "next/link";
import { Settings, Info, ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LangChip } from "@/components/LangChip";
import { MicBubble } from "@/components/MicBubble";
import { Waveform } from "@/components/Waveform";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Demo preview",
  description:
    "Visual preview of the What a Word interpreter — any language to Polish.",
};

const PL_WORDS = ["Cześć,", "jak", "się", "masz?"];

export default function AppPreviewPage() {
  return (
    <main className="flex min-h-svh flex-1 flex-col px-4 pb-10 pt-6 sm:px-6">
      {/* Top bar */}
      <header className="glass-strong mx-auto flex w-full max-w-md items-center justify-between rounded-2xl px-3 py-2.5 sm:max-w-lg">
        <Link
          href="/"
          aria-label="Back to home"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-[var(--text-primary)] hover:bg-white/40 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <Logo asLink={false} />
        <button
          type="button"
          aria-label="Settings"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-[var(--text-primary)] hover:bg-white/40 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]"
        >
          <Settings className="h-4 w-4" />
        </button>
      </header>

      {/* Demo banner */}
      <Reveal>
        <div className="mx-auto mt-4 flex w-full max-w-md items-start gap-3 rounded-2xl border border-[var(--ua-wheat)]/40 bg-[var(--ua-wheat)]/15 px-4 py-3 backdrop-blur-md sm:max-w-lg">
          <Info
            className="h-4 w-4 shrink-0 text-[var(--text-primary)]"
            aria-hidden="true"
          />
          <p className="text-sm text-[var(--text-primary)]">
            Demo preview — the full app requires sign-in and Gemini Live.{" "}
            <Link
              href="/sign-in"
              className="font-semibold underline decoration-[var(--ua-blue)] underline-offset-2 hover:text-[var(--ua-blue)]"
            >
              Sign in
            </Link>
          </p>
        </div>
      </Reveal>

      {/* Transcript stack */}
      <div className="mx-auto mt-6 flex w-full max-w-md flex-1 flex-col gap-4 sm:max-w-lg">
        <Reveal delay={80}>
          <section aria-label="Source transcript">
            <LangChip code="UA" label="Source · auto-detect" />
            <div className="glass mt-2 rounded-3xl px-5 py-4">
              <p
                lang="uk"
                className="text-[22px] font-medium leading-snug text-[var(--text-primary)] sm:text-[26px]"
              >
                Привіт, як справи?
              </p>
              <div className="mt-3 flex items-center gap-3">
                <Waveform bars={18} />
                <span className="text-xs font-medium text-[var(--text-muted)]">
                  Listening…
                </span>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delay={160}>
          <section aria-label="Polish target transcript" aria-live="polite">
            <LangChip code="PL" label="Polish" />
            <div className="glass-strong mt-2 rounded-3xl px-5 py-4">
              <p
                lang="pl"
                className="text-[22px] font-semibold leading-snug text-[var(--text-primary)] sm:text-[26px]"
              >
                {PL_WORDS.map((w, i) => (
                  <span
                    key={i}
                    className="stream-word mr-1"
                    style={{ animationDelay: `${500 + i * 90}ms` }}
                  >
                    {w}
                  </span>
                ))}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--pl-crimson)]" />
                Streaming translation…
              </div>
            </div>
          </section>
        </Reveal>

        {/* Mic */}
        <div className="mt-auto flex flex-col items-center pt-10 pb-4">
          <MicBubble size="lg" label="Hold to speak" />
        </div>
      </div>
    </main>
  );
}
