import { Mic } from "lucide-react";
import { cn } from "@/lib/utils";

type MicBubbleProps = {
  size?: "md" | "lg";
  label?: string;
  className?: string;
};

export function MicBubble({
  size = "lg",
  label = "Hold to speak",
  className,
}: MicBubbleProps) {
  const dim = size === "lg" ? "h-40 w-40 sm:h-48 sm:w-48" : "h-24 w-24";
  const iconSize = size === "lg" ? "h-12 w-12 sm:h-14 sm:w-14" : "h-8 w-8";

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div className={cn("relative", dim)}>
        {/* Iridescent rotating ring */}
        <div
          aria-hidden="true"
          className="mic-ring absolute -inset-1 rounded-full opacity-80 blur-[2px]"
        />
        {/* Inner glass orb */}
        <div
          role="button"
          aria-label="Hold to speak Ukrainian"
          tabIndex={0}
          className={cn(
            "mic-breath relative h-full w-full rounded-full",
            "flex items-center justify-center cursor-pointer select-none",
            "bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(255,255,255,0.4)_55%,rgba(255,255,255,0.15)_100%)]",
            "border border-white/60 shadow-[0_12px_40px_rgba(42,91,215,0.35)]",
            "backdrop-blur-xl",
            "transition-transform duration-200 ease-out",
            "active:scale-95",
            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--ua-blue)]/40",
            "dark:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.02)_100%)]",
            "dark:border-white/20",
          )}
        >
          <Mic
            className={cn(iconSize, "text-[var(--ua-blue)] drop-shadow-sm")}
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </div>
      </div>
      {label ? (
        <p className="text-sm font-medium text-[var(--text-muted)] tracking-wide">
          {label}
        </p>
      ) : null}
    </div>
  );
}
