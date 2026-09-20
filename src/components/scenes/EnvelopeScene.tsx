"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { confession } from "@/content/confession";

export function EnvelopeScene({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const open = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1100);
  };

  return (
    <section className="relative flex min-h-full flex-col items-center justify-center px-5 text-center">
      <p className="mb-4 text-[11px] font-medium tracking-[0.32em] text-rose-hot uppercase">
        {confession.envelope.eyebrow}
      </p>
      <h1 className="font-serif max-w-xl text-4xl leading-tight font-medium text-rose-ink sm:text-6xl">
        {confession.envelope.title}
      </h1>

      <motion.button
        type="button"
        onClick={open}
        className={`relative mt-14 w-[280px] cursor-pointer sm:w-[340px] ${opening ? "" : "animate-floaty"}`}
        animate={opening ? { y: -8, scale: 1.04 } : { y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={opening ? undefined : { scale: 1.03 }}
        aria-label={confession.envelope.hint}
      >
        <svg viewBox="0 0 340 230" className="w-full drop-shadow-2xl">
          <path d="M18 70h304v132c0 14-12 26-26 26H44c-14 0-26-12-26-26V70z" fill="#fb7185" />
          <path
            d="M18 70l152 96 152-96v132c0 14-12 26-26 26H44c-14 0-26-12-26-26V70z"
            fill="#f43f5e"
          />
          <motion.path
            d="M18 70l152 96L322 70 170 18 18 70z"
            fill="#fda4af"
            style={{ originX: "50%", originY: "70px" }}
            animate={opening ? { rotateX: 180, opacity: 0.35 } : { rotateX: 0 }}
            transition={{ duration: 0.8 }}
          />
          <path d="M18 70l152 96 152-96" fill="none" stroke="#fff1f5" strokeWidth="3" />
          <motion.g
            animate={opening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            style={{ originX: "170px", originY: "128px" }}
            transition={{ duration: 0.35 }}
          >
            <circle cx="170" cy="128" r="28" fill="#9f1239" />
            <circle cx="170" cy="128" r="22" fill="#be123c" />
            <path
              d="M170 140s-10-6.5-13.6-11.6c-3.6-4.6-1.8-11.6 4.4-12.4 3.3-.5 6.1 1.4 9.2 4.6 3.1-3.2 5.9-5.1 9.2-4.6 6.2.8 8 7.8 4.4 12.4C180 133.5 170 140 170 140z"
              fill="#fff1f5"
            />
          </motion.g>
        </svg>
      </motion.button>

      <p className="mt-8 text-sm font-light tracking-wide text-rose-ink/65">
        {opening ? "Phong bì đang mở…" : confession.envelope.hint}
      </p>
    </section>
  );
}
