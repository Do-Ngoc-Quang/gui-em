"use client";

import { useEffect, useState } from "react";
import { confession } from "@/content/confession";
import { ContinueButton, SceneFrame } from "@/components/ui/SceneFrame";

export function LetterScene({ onNext }: { onNext: () => void }) {
  const full = confession.letter.body;
  const [shown, setShown] = useState("");
  const done = shown.length >= full.length;

  useEffect(() => {
    if (done) return;
    const id = window.setTimeout(() => {
      setShown(full.slice(0, shown.length + 1));
    }, shown.endsWith("\n") ? 220 : 28);
    return () => window.clearTimeout(id);
  }, [shown, full, done]);

  return (
    <SceneFrame chapter={confession.letter.chapter} title={confession.letter.title}>
      <button
        type="button"
        onClick={() => setShown(full)}
        className="paper mx-auto block w-full max-w-lg rounded-2xl px-6 py-8 text-left sm:px-10 sm:py-10"
      >
        <p className="mb-4 text-center text-[11px] tracking-[0.28em] text-rose-hot/70 uppercase">
          {confession.from} gửi {confession.to}
        </p>
        <p className="font-serif text-[17px] leading-8 whitespace-pre-wrap text-rose-ink sm:text-xl sm:leading-9">
          {shown}
          {!done ? <span className="animate-pulse text-rose-hot">|</span> : null}
        </p>
        {!done ? (
          <p className="mt-6 text-center text-[11px] tracking-wide text-rose-ink/40">
            {confession.letter.skip}
          </p>
        ) : null}
      </button>
      {done ? (
        <ContinueButton onClick={onNext} delay={0.2}>
          Anh còn một câu hỏi
        </ContinueButton>
      ) : null}
    </SceneFrame>
  );
}
