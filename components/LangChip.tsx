import { cn } from "@/lib/utils";

type LangChipProps = {
  code: "UA" | "PL";
  label: string;
  className?: string;
};

export function LangChip({ code, label, className }: LangChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1",
        "text-[11px] font-semibold uppercase tracking-[0.12em]",
        "border border-white/45 bg-white/40 backdrop-blur-md",
        "text-[var(--text-primary)]",
        "dark:bg-white/10 dark:text-white dark:border-white/15",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          code === "UA" ? "bg-[var(--ua-blue)]" : "bg-[var(--pl-crimson)]",
        )}
      />
      {label}
    </span>
  );
}
