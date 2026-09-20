"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { confession } from "@/content/confession";
import { CoupleSketch } from "@/components/illustrations";

function Polaroid({
  src,
  label,
  rotate,
  fromLeft,
  onMissing,
}: {
  src: string;
  label: string;
  rotate: number;
  fromLeft: boolean;
  onMissing: () => void;
}) {
  return (
    <motion.figure
      className="paper relative w-[138px] p-2 pb-7 sm:w-[156px]"
      style={{ zIndex: 1 }}
      initial={{ opacity: 0, x: fromLeft ? -36 : 36, rotate: rotate * 1.6 }}
      animate={{ opacity: 1, x: fromLeft ? 10 : -10, rotate }}
      transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.12 }}
    >
      <div className="h-40 overflow-hidden bg-blush-deep sm:h-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover"
          onError={onMissing}
        />
      </div>
      <figcaption className="font-serif mt-2 text-center text-lg text-rose-ink">
        {label}
      </figcaption>
    </motion.figure>
  );
}

export function CouplePhotos() {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return <CoupleSketch className="h-48 w-48" />;
  }

  return (
    <div className="relative flex items-end justify-center px-2">
      <Polaroid
        src={confession.photos.from}
        label={confession.photos.fromLabel}
        rotate={-8}
        fromLeft
        onMissing={() => setMissing(true)}
      />
      <motion.span
        className="relative z-10 mb-16 text-3xl text-rose-hot sm:text-4xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.35 }}
        aria-hidden
      >
        ♥
      </motion.span>
      <Polaroid
        src={confession.photos.to}
        label={confession.photos.toLabel}
        rotate={7}
        fromLeft={false}
        onMissing={() => setMissing(true)}
      />
    </div>
  );
}
