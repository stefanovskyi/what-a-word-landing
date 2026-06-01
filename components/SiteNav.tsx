"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#privacy", label: "Privacy" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 sm:top-5 sm:left-6 sm:right-6">
      <nav
        aria-label="Primary"
        className={cn(
          "glass-strong mx-auto flex max-w-6xl items-center justify-between",
          "rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3",
        )}
      >
        <Logo />

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-medium",
                  "text-[var(--text-primary)] hover:text-[var(--ua-blue)]",
                  "transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/sign-in"
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm font-medium",
              "text-[var(--text-primary)] hover:bg-white/40",
              "transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
            )}
          >
            Sign in
          </Link>
          <Link
            href="/app"
            className={cn(
              "rounded-lg px-3.5 py-1.5 text-sm font-semibold",
              "bg-[var(--ua-blue)] text-white shadow-sm",
              "hover:-translate-y-0.5 hover:brightness-110",
              "transition-all duration-200 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
            )}
          >
            Install
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden rounded-lg p-2 cursor-pointer",
            "text-[var(--text-primary)] hover:bg-white/40",
            "transition-colors duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ua-blue)]",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div
          className={cn(
            "md:hidden mt-2 mx-auto max-w-6xl",
            "glass-strong rounded-2xl p-3",
          )}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium",
                    "text-[var(--text-primary)] hover:bg-white/40",
                    "transition-colors duration-200",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-1 flex gap-2 px-1">
              <Link
                href="/sign-in"
                onClick={() => setOpen(false)}
                className={cn(
                  "flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium",
                  "border border-white/45 bg-white/40 text-[var(--text-primary)]",
                  "hover:bg-white/60 transition-colors duration-200",
                )}
              >
                Sign in
              </Link>
              <Link
                href="/app"
                onClick={() => setOpen(false)}
                className={cn(
                  "flex-1 rounded-lg px-3 py-2 text-center text-sm font-semibold",
                  "bg-[var(--ua-blue)] text-white",
                  "hover:brightness-110 transition-all duration-200",
                )}
              >
                Install
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
