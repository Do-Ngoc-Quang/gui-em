"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MusicToggle, useAmbientMusic } from "@/components/effects/AmbientMusic";
import { Petals } from "@/components/effects/Petals";
import { CelebrationScene } from "@/components/scenes/CelebrationScene";
import { ConstellationScene } from "@/components/scenes/ConstellationScene";
import { EnvelopeScene } from "@/components/scenes/EnvelopeScene";
import { GameScene } from "@/components/scenes/GameScene";
import { LetterScene } from "@/components/scenes/LetterScene";
import { QuestionScene } from "@/components/scenes/QuestionScene";
import { SparkScene } from "@/components/scenes/SparkScene";
import { scenes, type SceneId } from "@/content/confession";

export function LoveJourney() {
  const [scene, setScene] = useState<SceneId>("envelope");
  const [accepted, setAccepted] = useState(true);
  const music = useAmbientMusic();

  const go = (id: SceneId) => setScene(id);
  const index = scenes.indexOf(scene);

  return (
    <main className="relative h-dvh overflow-hidden bg-gradient-to-b from-blush via-cream to-blush-deep">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,63,94,0.16),transparent_42%)]" />
      <Petals />
      <div className="grain" />

      <div className="absolute top-5 right-0 left-0 z-30 flex justify-center gap-1.5">
        {scenes.map((id, i) => (
          <span
            key={id}
            className={`text-[10px] transition ${
              i <= index ? "text-rose-hot" : "text-petal/40"
            }`}
            aria-hidden
          >
            ♥
          </span>
        ))}
      </div>

      <MusicToggle
        on={music.on}
        onToggle={music.toggle}
        title={music.title}
        artist={music.artist}
      />

      <div className="relative z-10 h-full pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene}
            className="h-full"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {scene === "envelope" ? (
              <EnvelopeScene
                onOpen={() => {
                  if (!music.on) music.toggle();
                  go("spark");
                }}
              />
            ) : null}
            {scene === "spark" ? (
              <SparkScene onNext={() => go("stars")} />
            ) : null}
            {scene === "stars" ? (
              <ConstellationScene onNext={() => go("game")} />
            ) : null}
            {scene === "game" ? (
              <GameScene onNext={() => go("letter")} />
            ) : null}
            {scene === "letter" ? (
              <LetterScene onNext={() => go("question")} />
            ) : null}
            {scene === "question" ? (
              <QuestionScene
                onAccept={() => {
                  setAccepted(true);
                  go("celebration");
                }}
                onWait={() => {
                  setAccepted(false);
                  go("celebration");
                }}
              />
            ) : null}
            {scene === "celebration" ? (
              <CelebrationScene
                accepted={accepted}
                onReplay={() => {
                  setAccepted(true);
                  go("envelope");
                }}
              />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
