# What a Word

**Speak Ukrainian, hear Polish. Instantly.**

A real-time voice interpreter that turns spoken Ukrainian into spoken and written Polish with near-zero latency. Hold the mic, speak, release — and hear yourself in Polish.

---

## Your voice, in Polish, in real time.

What a Word is a low-latency voice interpreter built for one job and built to do it perfectly: translating spoken Ukrainian into Polish, instantly.

Press and hold the mic, say your sentence, and release — your words appear as Ukrainian text on screen while the Polish translation streams back as natural speech and text in the same breath. No menus, no language pickers, no setup friction. Just one button between you and a conversation.

Powered by Google's Gemini Live API and installable straight to your home screen as a Progressive Web App.

---

## Features

- **Real-time voice-to-voice** — Speak Ukrainian, hear fluent Polish back with minimal delay, synchronized speech and text.
- **One-button simplicity** — A single interaction bubble controls everything. Hold to speak, release to translate. Nothing to learn.
- **Installable PWA** — Add it to your home screen and launch it like a native app. Works offline-ready, no app store required.
- **See it as you say it** — Watch your Ukrainian transcribed live on top, and the Polish translation build word-by-word below.
- **Private by design** — Your API key stays on your device. No conversation history, no telemetry, no tracking.
- **Secure sign-in** — Authenticate with Clerk and start translating in seconds.

---

## How it works

1. **Sign in** — One tap with secure Clerk authentication.
2. **Hold & speak** — Press the mic button and say it in Ukrainian.
3. **Release & hear** — Get the Polish translation as natural speech and on-screen text, instantly.

---

## Why it exists

Crossing the language barrier between Ukrainian and Polish shouldn't require a clunky app, a stack of menus, or a noticeable wait. What a Word strips interpretation down to its essence: one button, one purpose, one fluid moment between speaking and being understood. Built as a Progressive Web App on Next.js and powered by Google's Gemini Live streaming model, it captures your voice, transcribes it in real time, and returns natural Polish speech and text almost as fast as you can talk. Whether you're navigating daily life in Poland, helping a newcomer, or bridging a quick conversation, What a Word turns "I don't speak Polish" into a non-issue.

---

## Scope

Direction: **Ukrainian → Polish only.** One direction, no language picker. The product is intentionally narrow so the interaction can stay this simple.

---

## This repository

This repo holds the **marketing static site** for What a Word — the landing page, an `/app` visual preview of the interpreter, and a `/sign-in` preview screen. It's built as a static export so it can be deployed to GitHub Pages, Vercel, or any static host with zero backend.

The runtime interpreter (Gemini Live wiring, Clerk auth, PWA service worker) lives outside this repo.

### Stack

- **Next.js** App Router with `output: 'export'` for fully static HTML/CSS/JS
- **TypeScript** + **Tailwind CSS v4** + **shadcn/ui** (base-nova style on @base-ui/react)
- **Inter** + **Inter Tight** via `next/font/google` (latin, latin-ext, cyrillic subsets)
- **lucide-react** for icons (no emojis)

### Run locally

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

### Build & preview the static bundle

```bash
pnpm build
pnpm dlx serve out
```

The build emits a self-contained `out/` directory.

### Deploy to GitHub Pages

For a project page at `https://<user>.github.io/<repo>/`, set the base path at build time:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo> pnpm build
```

Then publish `out/` to the `gh-pages` branch (e.g. with `peaceiris/actions-gh-pages`). For a user/org root site or a custom domain, omit the env var.

### Project layout

```
app/
  page.tsx          ← landing page
  app/page.tsx      ← interpreter visual preview
  sign-in/page.tsx  ← Clerk sign-in preview
  layout.tsx        ← fonts, metadata, mesh background
  globals.css       ← design tokens + glass utilities + animations
components/
  SiteNav.tsx, SiteFooter.tsx, Logo.tsx
  PhoneMockup.tsx, MicBubble.tsx, Waveform.tsx, LangChip.tsx
  Reveal.tsx        ← scroll-fade wrapper, reduced-motion aware
  ui/               ← shadcn components
design-system/
  what-a-word/MASTER.md   ← persisted design system
```

---

## Design system in one line

Liquid-glass + spatial-UI hybrid over a warm cream base. Bilingual brand palette: Ukrainian blue `#2A5BD7`, wheat gold `#F2C94C`, Polish crimson `#D9534F`, cream `#F4F1EA`. Inter for everything; Inter Tight for the hero. Frosted translucent panels with backdrop-blur 18–24px, layered depth, a slow-drifting gradient mesh background. All motion respects `prefers-reduced-motion`.

---

## License

TBD.
