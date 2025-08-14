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
  duration: number;
};

const demoQueue: Track[] = [
  {
    title: "Moonlight Drive",
    artist: "The Doors",
    album: "Strange Days",
    coverUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=900&auto=format&fit=crop",
    url: "https://open.spotify.com/",
    duration: 218,
  },
  {
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    coverUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=900&auto=format&fit=crop",
    url: "https://open.spotify.com/",
    duration: 253,
  },
  {
    title: "Lose Yourself to Dance",
    artist: "Daft Punk",
    album: "Random Access Memories",
    coverUrl:
      "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=900&auto=format&fit=crop",
    url: "https://open.spotify.com/",
    duration: 329,
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

  const current = queue[index];

  React.useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setTime((t) => {
        if (t + 0.5 >= current.duration) {
          handleNext();
          return 0;
        }
        return t + 0.5;
      });
    }, 500);
    return () => clearInterval(id);
  }, [isPlaying, index,]);

  const handlePlayPause = () => setIsPlaying((p) => !p);
  const handlePrev = () => {
    setTime(0);
    setIndex((i) => (i - 1 + queue.length) % queue.length);
  };
  const handleNext = () => {
    setTime(0);
    setIndex((i) => (i + 1) % queue.length);
  };

  const progress = Math.min(100, (time / current.duration) * 100);

  return (
    <Card className="col-span-4 overflow-hidden border-0 bg-foreground/90 shadow-lg rounded-xl">
      <CardContent className="p-4">
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
                value={[progress]}
                onValueChange={([v]) =>
                  setTime(((v ?? 0) / 100) * current.duration)
                }
                className="h-2 bg-white/20"
              >
                <div className="bg-[#1DB954]" />
              </Slider>
              <div className="mt-1 flex justify-between text-[11px] text-white/50">
                <span>{formatTime(time)}</span>
                <span>{formatTime(current.duration)}</span>
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
                  {isPlaying ? <Pause className="size-5" /> : <Play className="size-5" />}
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
                <Button size="icon" variant="ghost" className="hover:bg-white/10" asChild>
                  <a href={current.url ?? "https://open.spotify.com/"} target="_blank" rel="noopener noreferrer">
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
