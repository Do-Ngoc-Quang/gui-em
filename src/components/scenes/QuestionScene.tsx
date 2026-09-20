"use client";

import { motion } from "framer-motion";
import { confession } from "@/content/confession";
import { SceneFrame } from "@/components/ui/SceneFrame";

export function QuestionScene({
  onAccept,
  onWait,
}: {
  onAccept: () => void;
  onWait: () => void;
}) {
  return (
    <SceneFrame chapter={confession.question.chapter} title={confession.question.title}>
      <motion.p
        className="font-serif mx-auto max-w-lg text-3xl leading-snug text-rose-ink sm:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {confession.question.prompt}
      </motion.p>
      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <motion.button
          type="button"
          onClick={onAccept}
          className="animate-heartbeat rounded-full bg-rose-hot px-10 py-3.5 text-base font-medium text-white shadow-xl shadow-rose-hot/35"
          whileTap={{ scale: 0.97 }}
        >
          {confession.question.yes}
        </motion.button>
        <button
          type="button"
          onClick={onWait}
          className="rounded-full px-6 py-3 text-sm text-rose-ink/55 transition hover:text-rose-ink"
        >
          {confession.question.wait}
        </button>
      </div>
    </SceneFrame>
  );
}
