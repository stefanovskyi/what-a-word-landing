import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  asLink?: boolean;
};

function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex h-8 w-8 items-center justify-center rounded-xl",
        "border border-white/55 bg-white/55 backdrop-blur-md shadow-sm",
        "dark:bg-white/10 dark:border-white/15",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wgrad" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#2A5BD7" />
            <stop offset="55%" stopColor="#F2C94C" />
            <stop offset="100%" stopColor="#D9534F" />
          </linearGradient>
        </defs>
        <path
          d="M3 6.5C3 5.67 3.67 5 4.5 5h0c.65 0 1.22.42 1.43 1.04L8 12l2.06-6.18A1.5 1.5 0 0 1 11.5 5h1c.65 0 1.22.42 1.43 1.04L16 12l2.06-6.18A1.51 1.51 0 0 1 19.5 5h0c.83 0 1.5.67 1.5 1.5 0 .17-.03.34-.08.5l-3.5 11A1.5 1.5 0 0 1 16 19h0a1.5 1.5 0 0 1-1.42-1.01L12.5 12 10.42 17.99A1.5 1.5 0 0 1 9 19h0a1.5 1.5 0 0 1-1.42-1.01L4.08 8a1.6 1.6 0 0 1-.08-.5z"
          stroke="url(#wgrad)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

export function Logo({ className, asLink = true }: LogoProps) {
  const content = (
    <>
      <LogoMark />
      <span
        className={cn(
          "font-display text-base font-semibold tracking-[-0.02em]",
          "text-[var(--text-primary)]",
        )}
      >
        What a Word
      </span>
    </>
  );

  if (!asLink) {
    return (
      <span className={cn("inline-flex items-center gap-2.5", className)}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-lg",
        "transition-opacity duration-200 hover:opacity-80",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
        className,
      )}
    >
      {content}
    </Link>
  );
}
