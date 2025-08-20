"use client";

import React, { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "@phosphor-icons/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Link from "next/link";

const projects = [
  { title: "Landing Page UI", desc: "UI/UX landing page modern", link: "#" },
  { title: "Portfolio Site", desc: "Personal portfolio responsive", link: "#" },
  { title: "E-Commerce App", desc: "Fullstack e-commerce app", link: "#" },
  { title: "Dashboard UI", desc: "Admin dashboard dengan chart interaktif", link: "#" },
  { title: "Blog Platform", desc: "Platform blog multi-user", link: "#" },
  { title: "AI Tool UI", desc: "UI untuk AI tools modern", link: "#" },
];

export default function ProjectList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {hoveredIndex !== null && (
        <div className="fixed inset-0 z-[40] bg-white/60 backdrop-blur-sm transition-all duration-300 pointer-events-none" />
      )}

      <section className="px-4 md:px-8 lg:px-16 py-16 relative z-40">
        <h1
          className={`text-xs uppercase font-semibold tracking-widest text-primary/60 mb-6 transition-all duration-300 ${
            hoveredIndex !== null ? "opacity-50 scale-[0.98]" : "opacity-100"
          }`}
        >
          Projects List
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
          {projects.map((project, i) => {
            const isDimmed =
              hoveredIndex !== null && hoveredIndex !== i;

            return (
              <div
                key={i}
                className={`transition-all duration-300 ${
                  isDimmed
                    ? "opacity-30 blur-[1px] scale-[0.97]"
                    : "opacity-100 blur-0 scale-100"
                }`}
              >
                <div className="aspect-video relative w-full h-full rounded-lg bg-gray-200 overflow-hidden">
                  {/* HoverCard + Trigger di Button */}
                  <HoverCard openDelay={150}>
                    <HoverCardTrigger asChild>
                      <Button
                        size="icon"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="bottom-10 cursor-pointer hover:size-14 hover:bottom-15 hover:-rotate-15 transition-all duration-200 group absolute bg-black size-12 right-10 rounded-full flex items-center justify-center"
                      >
                        <ArrowRight
                          weight="duotone"
                          className="size-6 group-hover:size-8 -rotate-45 text-white"
                        />
                      </Button>
                    </HoverCardTrigger>

                    {/* Detail HoverCard */}
                    <HoverCardContent className="w-64 space-y-2 z-[70]">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                          <h3 className="font-semibold text-lg uppercase ">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {project.desc}
                          </p>
                        </div>
                        <Link

                          href={project.link}
                          target="_blank"
                          className={buttonVariants({variant: "outline", className: "items-center text-start justify-start w-fit"})}
                        >
                          Lihat detail
                          <ArrowRight/>
                        </Link>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>

                <div className="flex flex-col w-full gap-1 mt-2">
                  <p className="font-medium uppercase text-sm">{project.title}</p>
                  <p className="text-sm text-muted-foreground uppercase">
                    Lorem, ipsum dolor.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
