import { LangChip } from "@/components/LangChip";
import { MicBubble } from "@/components/MicBubble";
import { Waveform } from "@/components/Waveform";

const PL_WORDS = ["Cześć,", "jak", "się", "masz?"];

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]">
      {/* Soft halo */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_50%_50%,rgba(42,91,215,0.25),transparent_70%)] blur-2xl"
      />

      {/* Phone frame */}
      <div
        className="glass-strong rounded-[42px] p-3 shadow-[0_24px_80px_rgba(11,20,55,0.25)]"
        style={{ transform: "rotate(-2deg)" }}
      >
        {/* Screen */}
        <div className="relative aspect-[9/19] overflow-hidden rounded-[32px] bg-gradient-to-b from-[#F4F1EA] via-[#EFE9DC] to-[#F4F1EA]">
          {/* Inner mesh tint */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 70% 50% at 20% 15%, rgba(42,91,215,0.22), transparent 65%), radial-gradient(ellipse 60% 50% at 80% 85%, rgba(242,201,76,0.25), transparent 65%)",
            }}
          />

          {/* Status bar */}
          <div className="relative flex items-center justify-between px-5 pt-4 text-[10px] font-medium text-[var(--text-primary)]/70">
            <span>9:41</span>
            <span className="font-mono">●●●●</span>
          </div>

          {/* App top bar */}
          <div className="relative flex items-center justify-between px-4 pt-3">
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/55 bg-white/55 px-2 py-1 backdrop-blur-md">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3 w-3"
                aria-hidden="true"
              >
                <path
                  d="M4 7l3 8 3-8 3 8 3-8"
                  stroke="#2A5BD7"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[10px] font-semibold tracking-tight">
                What a Word
              </span>
            </div>
            <div className="h-7 w-7 rounded-full border border-white/55 bg-white/55 backdrop-blur-md" />
          </div>

          {/* Source transcript */}
          <div className="relative mt-5 px-4">
            <LangChip code="UA" label="Source · auto-detect" />
            <div className="mt-2 rounded-2xl border border-white/45 bg-white/55 px-4 py-3 backdrop-blur-md shadow-sm">
              <p
                lang="uk"
                className="text-[18px] font-medium leading-snug text-[var(--text-primary)]"
              >
                Привіт, як справи?
              </p>
              <div className="mt-2">
                <Waveform bars={14} />
              </div>
            </div>
          </div>

          {/* PL transcript */}
          <div className="relative mt-4 px-4">
            <LangChip code="PL" label="Polish" />
            <div className="mt-2 rounded-2xl border border-white/55 bg-white/70 px-4 py-3 backdrop-blur-md shadow-sm">
              <p
                lang="pl"
                className="text-[18px] font-semibold leading-snug text-[var(--text-primary)]"
              >
                {PL_WORDS.map((w, i) => (
                  <span
                    key={i}
                    className="stream-word mr-1"
                    style={{ animationDelay: `${600 + i * 90}ms` }}
                  >
                    {w}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Mic at bottom */}
          <div className="absolute inset-x-0 bottom-6 flex flex-col items-center">
            <MicBubble size="md" label="Hold to speak" />
          </div>
        </div>
      </div>
    </div>
  );
}
