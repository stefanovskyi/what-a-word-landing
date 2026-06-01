import Link from "next/link";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Sign in",
  description:
    "Sign in to What a Word to start translating any language to Polish in real time.",
};

function GoogleGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#4285F4"
        d="M23 12.27c0-.79-.07-1.54-.2-2.27H12v4.31h6.18c-.27 1.43-1.08 2.64-2.3 3.45v2.87h3.71C21.74 18.6 23 15.7 23 12.27z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.11 0 5.71-1.03 7.61-2.79l-3.71-2.87c-1.03.69-2.34 1.1-3.9 1.1-3 0-5.54-2.02-6.45-4.74H1.7v2.97A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.55 13.7A6.6 6.6 0 0 1 5.2 12c0-.6.1-1.17.27-1.7V7.33H1.7A11 11 0 0 0 1 12c0 1.76.42 3.43 1.16 4.92l3.39-2.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.69 0 3.21.58 4.4 1.72l3.3-3.3C17.7 1.99 15.11 1 12 1A11 11 0 0 0 1.7 7.33L5.55 10c.91-2.72 3.45-4.62 6.45-4.62z"
      />
    </svg>
  );
}

function AppleGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M16.37 12.93c-.03-2.81 2.3-4.16 2.4-4.23-1.31-1.91-3.34-2.17-4.06-2.2-1.73-.18-3.37 1.02-4.25 1.02-.88 0-2.23-.99-3.67-.96-1.89.03-3.63 1.1-4.6 2.78-1.96 3.4-.5 8.43 1.41 11.19.93 1.35 2.04 2.87 3.5 2.82 1.41-.06 1.94-.91 3.65-.91 1.7 0 2.18.91 3.67.88 1.51-.03 2.47-1.38 3.4-2.74 1.07-1.57 1.52-3.1 1.55-3.18-.03-.01-2.96-1.13-2.99-4.47zM13.4 4.78c.79-.95 1.31-2.27 1.17-3.58-1.13.05-2.5.75-3.31 1.7-.73.83-1.36 2.17-1.19 3.46 1.26.1 2.54-.64 3.33-1.58z" />
    </svg>
  );
}

export default function SignInPage() {
  return (
    <main className="relative flex min-h-svh flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6">
      <Link
        href="/"
        aria-label="Back to home"
        className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-xl border border-white/45 bg-white/55 px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] backdrop-blur-md hover:bg-white/75 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)] sm:left-6 sm:top-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Home</span>
      </Link>

      <Reveal>
        <div className="w-full max-w-[420px]">
          <div className="glass-strong rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col items-center text-center">
              <Logo asLink={false} />
              <h1 className="font-display mt-6 text-2xl font-semibold tracking-[-0.02em] text-[var(--text-primary)] sm:text-3xl">
                Welcome
              </h1>
              <p className="mt-2 text-sm text-[var(--text-muted)] sm:text-base">
                Sign in to start translating any language to Polish.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-2.5">
              <button
                type="button"
                className={cn(
                  "inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-xl",
                  "border border-white/55 bg-white/70 text-sm font-semibold text-[var(--text-primary)] backdrop-blur-md",
                  "hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
                )}
              >
                <GoogleGlyph />
                Continue with Google
              </button>
              <button
                type="button"
                className={cn(
                  "inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-xl",
                  "bg-[#0F1729] text-sm font-semibold text-white",
                  "hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200 ease-out cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
                )}
              >
                <AppleGlyph />
                Continue with Apple
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
              <span className="h-px flex-1 bg-[var(--border)]" />
              or
              <span className="h-px flex-1 bg-[var(--border)]" />
            </div>

            <form
              className="mt-6 flex flex-col gap-3"
              action="mailto:hello@what-a-word.app"
              method="post"
              encType="text/plain"
            >
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]"
              >
                Email address
              </label>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]"
                  aria-hidden="true"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={cn(
                    "h-11 w-full rounded-xl border border-white/55 bg-white/70 pl-10 pr-3 text-sm",
                    "text-[var(--text-primary)] placeholder:text-[var(--text-muted)] backdrop-blur-md",
                    "focus:outline-none focus:border-[var(--ua-blue)] focus:ring-2 focus:ring-[var(--ua-blue)]/30",
                    "transition-colors duration-200",
                  )}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "inline-flex h-11 w-full items-center justify-center rounded-xl",
                  "bg-[var(--ua-blue)] text-sm font-semibold text-white shadow-[0_8px_24px_rgba(42,91,215,0.35)]",
                  "hover:-translate-y-0.5 hover:brightness-110 transition-all duration-200 ease-out cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
                )}
              >
                Continue
              </button>
            </form>

            <p className="mt-6 text-center text-[11px] leading-relaxed text-[var(--text-muted)]">
              By signing in you agree to our Terms of Service and Privacy
              Policy. Identity handled by{" "}
              <span className="font-semibold text-[var(--text-primary)]">
                Clerk
              </span>
              .
            </p>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[var(--text-muted)]">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Your API key never leaves your device.</span>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
