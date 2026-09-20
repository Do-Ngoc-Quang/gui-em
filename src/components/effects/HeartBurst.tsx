"use client";

import { motion } from "framer-motion";

export function HeartBurst({ count = 28 }: { count?: number }) {
  const hearts = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const dist = 90 + (i % 5) * 46;
    return {
      id: i,
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
      delay: (i % 7) * 0.04,
      size: 14 + (i % 4) * 8,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute left-1/2 top-1/2 text-rose-hot"
          style={{ fontSize: h.size }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
          animate={{
            x: h.x,
            y: h.y,
            opacity: [0, 1, 0],
            scale: [0.4, 1.15, 0.8],
          }}
          transition={{ duration: 1.8, delay: h.delay, ease: "easeOut" }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}
