import { cn } from "@/lib/utils";

type WaveformProps = {
  bars?: number;
  className?: string;
};

export function Waveform({ bars = 16, className }: WaveformProps) {
  const delays = [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.42, 0.3, 0.18, 0.06];
  return (
    <div
      className={cn("flex items-end h-5", className)}
      aria-hidden="true"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="wave-bar"
          style={{ animationDelay: `${delays[i % delays.length]}s` }}
        />
      ))}
    </div>
  );
}
