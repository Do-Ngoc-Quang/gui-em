"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SceneFrame({
  chapter,
  title,
  subtitle,
  children,
}: {
  chapter?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="scene-scroll relative mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center px-5 py-12 text-center sm:py-16">
      {chapter ? (
        <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-rose-hot/80 uppercase">
          {chapter}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-tight font-medium text-rose-ink sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-md text-sm leading-7 font-light text-rose-ink/70 sm:text-base">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-8 flex w-full flex-col items-center">{children}</div>
    </section>
  );
}

export function ContinueButton({
  children,
  onClick,
  delay = 0,
  className = "mt-6",
}: {
  children: ReactNode;
  onClick: () => void;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
      className={`inline-flex items-center gap-2 rounded-full bg-rose-hot px-7 py-3 text-sm font-medium text-white shadow-lg shadow-rose-hot/30 transition hover:scale-[1.03] hover:bg-rose-ink ${className}`}
    >
      {children}
      <span aria-hidden>♡</span>
    </motion.button>
  );
}
