"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { confession } from "@/content/confession";
import { NotesSketch, SmileSketch, StaySketch } from "@/components/illustrations";
import { ContinueButton, SceneFrame } from "@/components/ui/SceneFrame";

const sketches = [SmileSketch, NotesSketch, StaySketch];

export function SparkScene({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const done = opened.length === confession.spark.memories.length;
  const current = active !== null ? confession.spark.memories[active] : null;

  return (
    <SceneFrame
      chapter={confession.spark.chapter}
      title={confession.spark.title}
      subtitle={confession.spark.subtitle}
    >
      <div className="flex flex-wrap justify-center gap-4">
        {confession.spark.memories.map((memory, i) => {
          const Sketch = sketches[i] ?? SmileSketch;
          const isOpen = opened.includes(i);
          return (
            <motion.button
              type="button"
              key={memory.title}
              onClick={() => {
                setActive(i);
                setOpened((prev) => (prev.includes(i) ? prev : [...prev, i]));
              }}
              className="w-[140px] sm:w-[160px]"
              style={{ rotate: i === 1 ? "2deg" : i === 2 ? "-3deg" : "-1deg" }}
              whileHover={{ y: -6, rotate: 0 }}
            >
              <div className="paper overflow-hidden rounded-sm p-2 pb-6">
                <div className="relative h-24 overflow-hidden bg-blush-deep sm:h-28">
                  <Sketch />
                  {!isOpen ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-rose-hot/20 text-sm text-rose-ink">
                      chạm vào
                    </div>
                  ) : null}
                </div>
                <p className="font-serif mt-3 text-lg text-rose-ink">{memory.title}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mx-auto mt-8 min-h-[84px] max-w-md">
        {current ? (
          <motion.p
            key={current.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm leading-6 font-light text-rose-ink/80"
          >
            {current.text}
          </motion.p>
        ) : (
          <p className="text-sm font-light text-rose-ink/40">Chạm từng tấm ảnh giúp anh.</p>
        )}
      </div>

      {done ? (
        <ContinueButton onClick={onNext} delay={0.15}>
          Anh còn muốn kể tiếp
        </ContinueButton>
      ) : null}
    </SceneFrame>
  );
}
