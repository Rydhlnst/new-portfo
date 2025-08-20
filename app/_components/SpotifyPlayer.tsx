/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Shuffle,
  Repeat,
  ExternalLink,
} from "lucide-react";

type Track = {
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  url?: string;
  file: string;
  duration?: number;
};

const demoQueue: Track[] = [
  {
    title: "Crying Lightning",
    artist: "Arctic Monkeys",
    album: "Humbug",
    coverUrl: "/CoverHumbug.png",
    file: "/CryingLightning.mp3",
    url: "https://open.spotify.com/",
  },
  {
    title: "After Hours",
    artist: "The Weeknd",
    album: "After Hours",
    coverUrl: "/CoverAH.jpg",
    file: "/AfterHours.mp3",
    url: "https://open.spotify.com/",
  },
];

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function SpotifyCard() {
  const [queue] = React.useState<Track[]>(demoQueue);
  const [index, setIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const current = queue[index];

  // Load lagu baru setiap index berubah
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = current.file;
      audioRef.current.load();
      setTime(0);
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [index]);

  // Update waktu setiap "timeupdate"
  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setTime(audio.currentTime);
    const setMeta = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);
    audio.addEventListener("ended", handleNext);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
      audio.removeEventListener("ended", handleNext);
    };
  }, []);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    setIndex((i) => (i - 1 + queue.length) % queue.length);
  };

  const handleNext = () => {
    setIndex((i) => (i + 1) % queue.length);
  };

  const handleSeek = (value: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = value;
    setTime(value);
  };


  return (
    <Card className="col-span-4 overflow-hidden border-0 bg-foreground/90 shadow-lg rounded-xl">
      <CardContent className="p-4">
        {/* Audio player hidden */}
        <audio ref={audioRef} preload="metadata" />

        <div className="grid grid-cols-1 sm:grid-cols-[92px_1fr] gap-4">
          {/* Cover */}
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={current.coverUrl}
              alt={`${current.title} cover`}
              fill
              className="object-cover"
              sizes="92px"
              priority
            />
            {/* Equalizer */}
            <div
              className={`absolute bottom-2 left-2 flex items-end gap-1 ${
                isPlaying ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}
            >
              {[6, 10, 7, 12].map((h, i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-sm bg-[#1DB954]"
                  style={{
                    height: `${h}px`,
                    animation: `bar 0.8s ${i * 0.15}s infinite ease-in-out`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Info + Controls */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-lg font-semibold text-white">
                {current.title}
              </div>
              <div className="text-sm text-white/70">
                {current.artist} · {current.album}
              </div>
            </div>

            {/* Progress */}
            <div className="my-2">
              <Slider
                value={[time]}
                max={duration || 0}
                step={0.1}
                onValueChange={([v]) => handleSeek(v ?? 0)}
                className="h-2 bg-white/20"
              />
              <div className="mt-1 flex justify-between text-[11px] text-white/50">
                <span>{formatTime(time)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:bg-white/10"
                  onClick={handlePrev}
                  aria-label="Previous"
                >
                  <SkipBack className="size-5 text-white" />
                </Button>
                <Button
                  size="icon"
                  className="rounded-full bg-[#1DB954] text-black hover:bg-[#1ed760]/90"
                  onClick={handlePlayPause}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="size-5" />
                  ) : (
                    <Play className="size-5" />
                  )}
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full hover:bg-white/10"
                  onClick={handleNext}
                  aria-label="Next"
                >
                  <SkipForward className="size-5 text-white" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" className="hover:bg-white/10">
                  <Shuffle className="size-5 text-white" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-white/10">
                  <Repeat className="size-5 text-white" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-white/10"
                  asChild
                >
                  <a
                    href={current.url ?? "https://open.spotify.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="size-5 text-white" />
                  </a>
                </Button>
                <div className="hidden sm:flex items-center gap-2 ml-1 text-xs text-white/50">
                  <Volume2 className="size-4" />
                  <div className="h-1.5 w-16 rounded bg-white/10">
                    <div className="h-1.5 w-10 rounded bg-[#1DB954]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Queue */}
            <div className="mt-3 text-xs text-white/50">
              Up next: {queue[(index + 1) % queue.length].title} —{" "}
              {queue[(index + 1) % queue.length].artist}
            </div>
          </div>
        </div>
      </CardContent>

      <style jsx>{`
        @keyframes bar {
          0%,
          100% {
            transform: scaleY(0.6);
          }
          50% {
            transform: scaleY(1.4);
          }
        }
      `}</style>
    </Card>
  );
}
