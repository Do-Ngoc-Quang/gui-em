"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { confession } from "@/content/confession";
import { ContinueButton, SceneFrame } from "@/components/ui/SceneFrame";

export function GameScene({ onNext }: { onNext: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dodges, setDodges] = useState(0);

  const dodge = () => {
    setDodges((n) => n + 1);
    setPos({
      x: (Math.random() - 0.5) * 220,
      y: (Math.random() - 0.5) * 120,
    });
  };

  return (
    <SceneFrame
      chapter={confession.game.chapter}
      title={confession.game.title}
      subtitle={confession.game.prompt}
    >
      <div className="relative mx-auto flex h-40 w-full max-w-lg items-center justify-center gap-4">
        <ContinueButton onClick={onNext} className="relative z-10">
          {confession.game.yes}
        </ContinueButton>
        <motion.button
          type="button"
          onMouseEnter={dodge}
          onPointerDown={(event) => {
            event.preventDefault();
            dodge();
          }}
          animate={{ x: pos.x, y: pos.y }}
          transition={{ type: "spring", stiffness: 420, damping: 18 }}
          className="relative z-20 rounded-full border border-rose-hot/30 bg-white/80 px-6 py-3 text-sm text-rose-ink/70 backdrop-blur"
        >
          {dodges >= 4 ? confession.game.noTease : confession.game.no}
        </motion.button>
      </div>
      <p className="mt-4 text-xs font-light tracking-wide text-rose-ink/45">
        Nút kia hơi nhát. Em bấm nút hồng giúp anh nhé.
      </p>
    </SceneFrame>
  );
}
