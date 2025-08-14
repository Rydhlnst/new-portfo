"use client";

import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const HoverRecentCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icon = iconRef.current;
    const card = cardRef.current;

    if (!icon || !card) return;

    const onEnter = () => {
      gsap.to(card, {
        backgroundColor: "#000000", // warna div icon
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        backgroundColor: "rgba(107, 114, 128, 0.5)", // bg-muted/50
        duration: 0.5,
        ease: "power2.out",
      });
    };

    icon.addEventListener("mouseenter", onEnter);
    icon.addEventListener("mouseleave", onLeave);

    return () => {
      icon.removeEventListener("mouseenter", onEnter);
      icon.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className="flex p-4 items-center justify-between bg-muted/50 transition-colors duration-300 border-none shadow-none relative"
    >
      {/* Bagian Kiri: Ikon dan Teks */}
      <div className="flex items-center gap-4">
        <div>
          <CardTitle className="text-3xl font-medium text-foreground">
            Frontend Developer
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            HackAttack 2025
          </CardDescription>
        </div>
      </div>

      {/* ArrowUpRight */}
      <div
        ref={iconRef}
        className="bg-black rounded-full p-2 absolute right-5 bottom-5 cursor-pointer"
      >
        <a
          href="/path-to-your/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV"
        >
          <ArrowUpRight className="h-16 w-16 text-primary-foreground" />
        </a>
      </div>
    </Card>
  );
};

export default HoverRecentCard;
