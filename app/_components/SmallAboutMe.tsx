"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import RecentlyListeningCard from "./SpotifyPlayer";
import { ArrowRight, ArrowUpRight, MapPinIcon} from "@phosphor-icons/react"
import Link from "next/link";
import {  buttonVariants } from "@/components/ui/button";
import { Marquee } from "@/components/magicui/marquee";

const techStacks = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "TypeScript",
  "Node.js",
  "Prisma",
  "MongoDB",
];

const SmallAboutMe = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 border-t border-primary/10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        
        {/* About Section */}
        <div className="flex flex-col gap-4 h-full">
          <h1 className="text-xs uppercase font-semibold tracking-widest text-primary/60">
            About
          </h1>

          <Card className="bg-muted shadow-none border-none">
            <CardContent className="p-4">
              <p className="text-base text-primary/60 md:text-lg font-medium leading-relaxed">
                Riyan is a Web Developer passionate about building modern,
                scalable, and user-friendly web applications. Skilled in{" "}
                <span className="font-semibold text-primary">Next.js</span>,{" "}
                <span className="font-semibold text-primary">React</span>, and{" "}
                <span className="font-semibold text-primary">Node.js</span>, he combines clean
                design with robust functionality to deliver high-quality digital
                experiences.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 h-full">
             <Card className="flex p-4 items-start justify-between bg-muted/50 hover:bg-muted transition-colors duration-300 border-none shadow-none relative">
                <div className="flex items-start gap-4">
                  <div>
                    <CardTitle className="text-3xl font-semibold text-foreground">
                      <span className="text-lg font-normal">Recent Jobs</span><br/>
                      Frontend Developer
                    </CardTitle>
                    <CardDescription className="text-sm mt-1 text-muted-foreground">
                      HackAttack 2025
                    </CardDescription>
                  </div>
                </div>

                <div className="bg-black rounded-full p-2 absolute right-5 bottom-5 group hover:bottom-10 duration-200 transition-all">
                  <a href="/path-to-your/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                    <ArrowUpRight className="h-16 w-16 text-primary-foreground group-hover:rotate-30 duration-200" />
                  </a>
                </div>
              </Card>

            <Card className="flex p-4 items-start justify-between bg-muted/50 hover:bg-muted transition-colors duration-300 border-none shadow-none relative">
                <div className="flex items-start gap-4">
                  <div>
                    <CardTitle className="text-3xl font-semibold text-foreground">
                      <span className="text-lg font-normal">Recent Location</span><br/>
                      Indonesia
                    </CardTitle>
                    <CardDescription className="text-sm mt-1 text-muted-foreground">
                      West Java
                    </CardDescription>
                  </div>
                </div>

                <div className="bg-sky-400 rounded-full p-2 absolute right-5 bottom-5 group hover:bottom-10 duration-200 transition-all">
                  <a href="/path-to-your/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                    <MapPinIcon weight="fill" className="h-16 w-16 text-primary-foreground group-hover:rotate-30 duration-200" />
                  </a>
                </div>
              </Card>

             <Card className="bg-muted shadow-none border-none h-full col-span-2 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-foreground">
                  Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="relative w-full overflow-hidden flex items-center justify-center">
                    <Marquee pauseOnHover className="[--duration:20s] w-full flex items-center justify-center">
                      {techStacks.map((stack, index) => (
                        <Card key={index} className="p-0 border-none shadow-none">
                          <CardContent className="flex items-center justify-center font-medium h-16 rounded-lg">
                            {stack}
                          </CardContent>
                        </Card>
                      ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-muted"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-muted"></div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Team Section */}
        <div className="flex flex-col gap-4 h-full">
          <h1 className="text-xs uppercase font-semibold tracking-widest text-foreground/60">
            Team
          </h1>

          <Card className="bg-muted border-none shadow-none">
            <CardContent className="p-4">
              <ul className="space-y-4">
                <li>
                  <span className="block font-medium text-foreground">
                    HackAttack 2025
                  </span>
                  <span className="text-sm text-foreground/70">
                    Frontend Developer — Built interactive event platform UI with
                    Next.js & Tailwind.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h1 className="text-xs uppercase font-semibold tracking-widest text-foreground/60">
            Recent Projects
          </h1>

          <Card className="bg-muted border-none shadow-none">
            <CardHeader>
              <CardTitle>
                Title
              </CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, debitis reiciendis eligendi, repudiandae cumque nisi minima velit magnam nobis quaerat, cupiditate obcaecati totam. Fugiat error nemo eaque ratione saepe in!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-3">
              <div className="aspect-video bg-gray-200 rounded-lg relative" >
                <Link href={"/"} className={buttonVariants({className: "absolute bottom-5 right-5 !rounded-full flex items-center justify-center", size: "icon", variant: "outline"})}>
                  <ArrowRight weight="duotone" className="-rotate-45"/>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-4 h-full">
          <h1 className="text-xs uppercase font-semibold tracking-widest text-foreground/60">
            Social Media
          </h1>

          <Card className="bg-muted/60 shadow-none border-none">
            <CardContent className="grid grid-cols-4 gap-3 p-4">
              {[
                { name: "GitHub", color: "#333333", url: "https://github.com/riyadhulnst", desc: "Check out my open-source projects", followers: "2.1k followers", icon: <FaGithub className="size-12" color="#333333" />, iconSmall: <FaGithub className="size-6" color="#333333" />, bg: "bg-gray-100" },
                { name: "LinkedIn", color: "#0A66C2", url: "https://linkedin.com/in/yourusername", desc: "Connect with me professionally", followers: "500+ connections", icon: <FaLinkedin className="size-12" color="#0A66C2" />, iconSmall: <FaLinkedin className="size-6" color="#0A66C2" />, bg: "bg-blue-50" },
                { name: "Instagram", color: "#E1306C", url: "https://instagram.com/yourusername", desc: "Follow my creative journey", followers: "1.4k followers", icon: <FaInstagram className="size-12" color="#E1306C" />, iconSmall: <FaInstagram className="size-6" color="#E1306C" />, bg: "bg-pink-50" },
                { name: "Twitter", color: "#1DA1F2", url: "https://twitter.com/yourusername", desc: "Sharing thoughts & updates", followers: "800 followers", icon: <FaTwitter className="size-12" color="#1DA1F2" />, iconSmall: <FaTwitter className="size-6" color="#1DA1F2" />, bg: "bg-sky-50" },
              ].map((item, i) => (
                <HoverCard key={i}>
                  <HoverCardTrigger asChild>
                    <Card className="shadow-none aspect-square group cursor-pointer transform transition-all duration-150 hover:scale-95 active:scale-90">
                      <CardContent className="flex items-center justify-center w-full h-full">
                        {item.icon}
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className={`text-sm w-64 rounded-xl border-none flex flex-col space-y-3 shadow-none ${item.bg}`}>
                    <div className="flex items-center space-x-3">
                      {item.iconSmall}
                      <p className="font-medium">{item.name}</p>
                    </div>
                    <p className="text-foreground/70">{item.desc}</p>
                    <div>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm block">
                        {item.url.replace("https://", "")}
                      </a>
                      <p className="mt-2 text-xs font-medium text-foreground/80">{item.followers}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-none border-none bg-muted h-full">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-foreground">
                Favorite Tracks
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <RecentlyListeningCard />
            </CardContent>
          </Card>
        </div>

      </div>
    </section>


  );
};

export default SmallAboutMe;
