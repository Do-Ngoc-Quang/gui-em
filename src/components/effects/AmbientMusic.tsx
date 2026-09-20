"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { confession } from "@/content/confession";

type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  setVolume: (volume: number) => void;
};

type YTNamespace = {
  Player: new (
    elementId: string,
    options: {
      videoId: string;
      width: number;
      height: number;
      playerVars: Record<string, string | number>;
      events: {
        onReady: (event: { target: YTPlayer }) => void;
        onError: () => void;
      };
    },
  ) => YTPlayer;
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const PLAYER_ID = "gui-em-yt-player";

function whenYouTubeReady(callback: () => void) {
  if (window.YT?.Player) {
    callback();
    return;
  }
  const previous = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => {
    previous?.();
    callback();
  };
}

export function useAmbientMusic() {
  const [on, setOn] = useState(false);
  const onRef = useRef(false);
  const playerRef = useRef<YTPlayer | null>(null);

  onRef.current = on;

  useEffect(() => {
    let cancelled = false;
    whenYouTubeReady(() => {
      if (cancelled || playerRef.current || !window.YT) return;
      new window.YT.Player(PLAYER_ID, {
        videoId: confession.music.youtubeId,
        width: 200,
        height: 112,
        playerVars: {
          autoplay: 0,
          controls: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          loop: 1,
          playlist: confession.music.youtubeId,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(confession.music.volume);
            playerRef.current = event.target;
            if (onRef.current) event.target.playVideo();
          },
          onError: () => {
            playerRef.current = null;
          },
        },
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    if (on) player.playVideo();
    else player.pauseVideo();
  }, [on]);

  return {
    on,
    title: confession.music.title,
    artist: confession.music.artist,
    toggle: () => {
      const next = !onRef.current;
      onRef.current = next;
      setOn(next);
      const player = playerRef.current;
      if (player) {
        if (next) player.playVideo();
        else player.pauseVideo();
      }
    },
  };
}

export function MusicToggle({
  on,
  onToggle,
  title,
  artist,
}: {
  on: boolean;
  onToggle: () => void;
  title: string;
  artist: string;
}) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!on) setShowVideo(false);
  }, [on]);

  const videoOnScreen = on && showVideo;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />

      <div
        className={
          videoOnScreen
            ? "pointer-events-auto absolute right-4 bottom-20 overflow-hidden rounded-xl bg-black shadow-lg shadow-rose-hot/20"
            : "pointer-events-none absolute top-0 -left-[9999px]"
        }
      >
        <div id={PLAYER_ID} className="h-[112px] w-[200px]" />
        {videoOnScreen ? (
          <button
            type="button"
            onClick={() => setShowVideo(false)}
            className="absolute top-1.5 right-1.5 rounded-full bg-black/55 px-2 py-0.5 text-[10px] text-white"
          >
            Ẩn hình
          </button>
        ) : null}
      </div>

      <div className="pointer-events-auto absolute bottom-4 left-4 flex items-center gap-2">
        <button
          type="button"
          onClick={onToggle}
          className="flex max-w-[200px] items-center gap-2 rounded-full bg-white/90 px-3 py-2.5 text-rose-ink shadow-lg shadow-rose-hot/15 backdrop-blur"
          aria-label={on ? "Tắt nhạc" : "Bật nhạc"}
        >
          <span className="flex h-6 w-6 items-center justify-center text-base">
            {on ? "♪" : "♩"}
          </span>
          <span className="pr-1 text-left text-[11px] leading-tight">
            <span className="block font-medium">{title}</span>
            <span className="block font-light text-rose-ink/55">
              {on ? artist : "Phát online"}
            </span>
          </span>
        </button>
        {on ? (
          <button
            type="button"
            onClick={() => setShowVideo((value) => !value)}
            className="rounded-full bg-white/90 px-3 py-2.5 text-[11px] text-rose-ink shadow-lg shadow-rose-hot/15 backdrop-blur"
          >
            {showVideo ? "Ẩn hình" : "Hiện MV"}
          </button>
        ) : null}
      </div>
    </div>
  );
}
