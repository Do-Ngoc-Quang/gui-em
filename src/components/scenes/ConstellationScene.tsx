"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { confession } from "@/content/confession";
import { ContinueButton, SceneFrame } from "@/components/ui/SceneFrame";

function heartPoint(t: number) {
  const x = 16 * Math.sin(t) ** 3;
  const y = -(
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t)
  );
  return { x, y };
}

export function ConstellationScene({ onNext }: { onNext: () => void }) {
  const stars = useMemo(() => {
    const ts = [0.15, 0.85, 1.7, 3.14, 4.55, 5.45];
    return ts.map((t, i) => {
      const p = heartPoint(t);
      return {
        id: i,
        left: 50 + p.x * 2.15,
        top: 48 + p.y * 2.15,
        reason: confession.stars.reasons[i],
      };
    });
  }, []);

  const [lit, setLit] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const done = lit.length === stars.length;

  const path = stars
    .map((s, i) => `${i === 0 ? "M" : "L"} ${s.left} ${s.top}`)
    .join(" ");

  return (
    <SceneFrame
      chapter={confession.stars.chapter}
      title={confession.stars.title}
      subtitle={confession.stars.subtitle}
    >
      <div className="relative mx-auto h-[260px] w-full max-w-md sm:h-[300px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {done ? (
            <motion.path
              d={path}
              fill="none"
              stroke="#f43f5e"
              strokeWidth="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.4 }}
            />
          ) : null}
        </svg>
        {stars.map((star) => {
          const isLit = lit.includes(star.id);
          return (
            <button
              key={star.id}
              type="button"
              onClick={() => {
                setActive(star.id);
                setLit((prev) => (prev.includes(star.id) ? prev : [...prev, star.id]));
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${star.left}%`, top: `${star.top}%` }}
              aria-label={`Ngôi sao ${star.id + 1}`}
            >
              <motion.span
                className={`block text-2xl ${isLit ? "text-rose-hot" : "text-petal/80"}`}
                animate={
                  isLit
                    ? { scale: [1, 1.25, 1], opacity: 1 }
                    : { scale: [1, 1.08, 1], opacity: 0.7 }
                }
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                ✦
              </motion.span>
            </button>
          );
        })}
      </div>

      <div className="mx-auto min-h-[72px] max-w-md">
        {active !== null ? (
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-xl italic text-rose-ink"
          >
            {stars[active]?.reason}
          </motion.p>
        ) : (
          <p className="text-sm font-light text-rose-ink/50">Những vì sao đang chờ em.</p>
        )}
      </div>

      {done ? (
        <ContinueButton onClick={onNext} delay={0.2}>
          Đọc bức thư
        </ContinueButton>
      ) : null}
    </SceneFrame>
  );
}
