"use client";

import { motion } from "framer-motion";
import { confession } from "@/content/confession";
import { HeartBurst } from "@/components/effects/HeartBurst";
import { CouplePhotos } from "@/components/CouplePhotos";
import { CoupleSketch } from "@/components/illustrations";
import { ContinueButton, SceneFrame } from "@/components/ui/SceneFrame";

export function CelebrationScene({
  accepted,
  onReplay,
}: {
  accepted: boolean;
  onReplay: () => void;
}) {
  return (
    <SceneFrame
      title={accepted ? confession.celebration.title : "Anh vẫn ở đây"}
    >
      {accepted ? <HeartBurst /> : null}
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.86, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 14 }}
      >
        {accepted ? <CouplePhotos /> : <CoupleSketch className="h-48 w-48" />}
        <p className="font-serif mt-6 max-w-md text-2xl leading-snug text-rose-ink sm:text-3xl">
          {accepted
            ? confession.celebration.accepted
            : confession.celebration.waiting}
        </p>
        <ContinueButton onClick={onReplay} delay={0.4}>
          {confession.celebration.replay}
        </ContinueButton>
      </motion.div>
    </SceneFrame>
  );
}
