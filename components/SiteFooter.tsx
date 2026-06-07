import { Heart } from "lucide-react";
import { Logo } from "@/components/Logo";

function GithubGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.55v-2.04c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.6.23 2.78.11 3.07.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 sm:mt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-10">
        <div className="glass rounded-2xl px-5 py-6 sm:px-7 sm:py-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Logo />
            <p className="text-sm text-[var(--text-muted)]">
              © {year} What a Word. Speak any language, hear Polish.
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <a
              href="https://buy.stripe.com/28EdR9e8J6GWcsN35G2Ji00"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] hover:bg-white/40 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]"
            >
              <Heart
                className="h-3.5 w-3.5 text-[var(--pl-crimson)] transition-all duration-200 group-hover:fill-[var(--pl-crimson)]"
                aria-hidden="true"
              />
              Support
            </a>
            <a
              href="https://app.what-a-word.stefanovskyi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] hover:bg-white/40 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]"
            >
              Install
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-primary)] hover:bg-white/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]"
            >
              <GithubGlyph />
            </a>
            <span className="ml-2 text-xs font-mono text-[var(--text-muted)]">
              v0.1.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
