"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import React, { Suspense, useEffect, useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import RecentlyListeningCard from "./SpotifyPlayer";
import { ArrowRight, ArrowUpRight, MapPinIcon} from "@phosphor-icons/react"
import Link from "next/link";
import {  buttonVariants } from "@/components/ui/button";
import { Marquee } from "@/components/magicui/marquee";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma, SiFramer, SiMongodb, SiMongoose, SiFigma, SiJupyter, SiJavascript, SiPython, SiNumpy } from "react-icons/si";
import gsap from "gsap";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import { usePathname } from "next/navigation";

const techIcons = [
  { icon: <SiNextdotjs color="#000000" />, name: "Next.js" },
  { icon: <FaReact color="#61dafb" />, name: "React" },
  { icon: <SiTailwindcss color="#38bdf8" />, name: "Tailwind CSS" },
  { icon: <SiFramer color="#0055FF" />, name: "Framer Motion" },
  { icon: <SiTypescript color="#3178c6" />, name: "TypeScript" },
  { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
  { icon: <SiPrisma color="#0c344b" />, name: "Prisma" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiMongoose color="#47A248" />, name: "Mongoose" },
  { icon: <SiFigma color="#F24E1E" />, name: "Figma" },
  { icon: <SiJupyter color="#F37626" />, name: "Jupyter Notebook" },
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiPython color="#3776AB" />, name: "Python" },
  { icon: <SiNumpy color="#013243" />, name: "NumPy" },
];

const SmallAboutMe = () => {
   const sectionRef = useRef<HTMLDivElement>(null);
   const pathname = usePathname()

    useEffect(() => {
    if (!sectionRef.current) return;

    const cols = Array.from(sectionRef.current.querySelector(".grid")?.children || []);

    gsap.set(cols, { opacity: 0, y: 50 });

    gsap.to(cols, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, [pathname]);
  return (
    <section ref={sectionRef} className="px-4 md:px-8 lg:px-16 border-primary/10 relative" suppressHydrationWarning>
      <div className="size-64 absolute -z-10 rounded-full rounded-tr-none bg-sky-400 top-0 right-0"/>
      <div className="size-64 absolute -z-10 rounded-full rounded-bl-none bg-red-400 bottom-0 left-0"/>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t pt-8 gap-6 items-start">
        
        {/* About Section */}
        <CardSuspenseAbout>
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
                  <span className="font-semibold text-primary">Node.js</span>, i combine clean
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

                  <div className="bg-black rounded-full p-2 absolute right-2 bottom-2 md:right-5 md:bottom-5 group hover:bottom-10 duration-200 transition-all">
                    <a href="/path-to-your/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                      <ArrowUpRight className="h-4 w-4 md:h-8 md:w-8 lg:h-16 lg:w-16 text-primary-foreground group-hover:rotate-30 duration-200" />
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

                  <div className="bg-sky-400 rounded-full p-2 absolute right-2 bottom-2 md:right-5 md:bottom-5 group hover:bottom-10 duration-200 transition-all">
                    <a href="/path-to-your/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                      <MapPinIcon weight="fill" className="h-4 w-4 md:h-8 md:w-8 lg:h-16 lg:w-16 text-primary-foreground group-hover:rotate-30 duration-200" />
                    </a>
                  </div>
                </Card>

              <Card className="bg-muted/60 shadow-none border-none h-full col-span-2 overflow-hidden">
                <CardHeader className="pb-0">
                  <CardTitle className="text-3xl font-semibold text-foreground pb-0">
                    Tech Stack
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-2 bg-muted px-4 mx-4 rounded-md py-4">
                  <TooltipProvider>
                    <div className="relative w-full overflow-hidden flex items-center justify-center">
                      <Marquee pauseOnHover className="[--duration:20s] w-full flex items-center justify-center">
                        {techIcons.map((tech, index) => (
                          <Tooltip key={index}>
                            <TooltipTrigger asChild>
                              <Card className="p-0 border-none shadow-none aspect-square cursor-pointer hover:scale-105 transition-transform duration-200">
                                <CardContent className="flex items-center justify-center font-medium size-24 rounded-lg">
                                  {tech.icon}
                                </CardContent>
                              </Card>
                            </TooltipTrigger>
                            <TooltipContent className="text-sm">
                              {tech.name}
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </Marquee>

                      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-muted"></div>
                      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-muted"></div>
                    </div>
                  </TooltipProvider>
                </CardContent>
              </Card>
            </div>

          </div>
        </CardSuspenseAbout>

        {/* Team Section */}
        <CardSuspenseTeam>
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
                <CardTitle className="text-3xl font-semibold text-foreground">
                  Hack Attack 2025
                </CardTitle>
                <CardDescription>
                  HackAttack 2025 is a hackathon project developed for the annual competition organized by HIMA IF Telkom University. The event challenges participants to create innovative digital solutions within a limited timeframe. In this project, I took the role of Frontend Developer, focusing on building an intuitive and responsive user interface that ensures seamless user experience and supports the overall functionality of the product.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col space-y-3">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/projects/recents/recent.png"
                    alt=""
                    width={800}  
                    height={600}  
                    className="object-contain rounded-lg"
                  />
                  <Link
                    href="/"
                    className={buttonVariants({
                      className:
                        "absolute bottom-5 right-5 !rounded-full flex items-center justify-center",
                      size: "icon",
                      variant: "outline",
                    })}
                  >
                    <ArrowRight weight="duotone" className="-rotate-45" />
                  </Link>
                </div>
              </CardContent>

            </Card>
          </div>
        </CardSuspenseTeam>

        {/* Social Media */}
        <CardSuspenseMedia>
          <div className="flex flex-col gap-4 h-full md:col-span-2 lg:col-span-1">

            <h1 className="text-xs uppercase font-semibold tracking-widest text-foreground/60">
              Social Media
            </h1>

            <Card className="bg-muted/60 shadow-none border-none">
              <CardContent className="">
                <Card className="border-none shadow-none">
                  <CardContent className="grid grid-cols-4 gap-3">
                      {[
                        { name: "GitHub", color: "#333333", url: "https://github.com/riyadhulnst", desc: "Check out my open-source projects", followers: "1+ followers", icon: <FaGithub className="size-12" color="#333333" />, iconSmall: <FaGithub className="size-6" color="#333333" />, bg: "bg-gray-100" },
                        { name: "LinkedIn", color: "#0A66C2", url: "https://linkedin.com/in/404ryan", desc: "Connect with me professionally", followers: "500+ connections", icon: <FaLinkedin className="size-12" color="#0A66C2" />, iconSmall: <FaLinkedin className="size-6" color="#0A66C2" />, bg: "bg-blue-50" },
                        { name: "Instagram", color: "#E1306C", url: "https://instagram.com/riyadhulnst", desc: "Follow my creative journey", followers: "500+ followers", icon: <FaInstagram className="size-12" color="#E1306C" />, iconSmall: <FaInstagram className="size-6" color="#E1306C" />, bg: "bg-pink-50" },
                        { name: "Twitter", color: "#1DA1F2", url: "https://x.com/riyadhulnst", desc: "Sharing thoughts & updates", followers: "30+ followers", icon: <FaTwitter className="size-12" color="#1DA1F2" />, iconSmall: <FaTwitter className="size-6" color="#1DA1F2" />, bg: "bg-sky-50" },
                      ].map((item, i) => (
                        <HoverCard key={i}>
                          <HoverCardTrigger asChild>
                            <Card className="shadow-sm bg-muted/40 hover:bg-white aspect-square group cursor-pointer transform group hover:-translate-y-5 duration-200 transition-all hover:scale-95 active:scale-90">
                              <CardContent className="flex items-center justify-center w-full h-full group-hover:rotate-15 duration-200 transition-all">
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
        </CardSuspenseMedia>

      </div>
    </section>


  );
};

export default SmallAboutMe;

const CardSuspenseAbout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<CardAboutSkeleton/>}>
    {children}
  </Suspense>
)

const CardAboutSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* About heading */}
      <Skeleton className="w-24 h-4" />

      {/* About Card */}
      <Card className="bg-muted shadow-none border-none">
        <CardContent className="p-4">
          <Skeleton className="w-full h-20 md:h-24" />
        </CardContent>
      </Card>

      {/* Grid for Recent Jobs, Location, Tech Stack */}
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Recent Jobs */}
        <Card className="flex p-4 items-start justify-between bg-muted/50 border-none shadow-none relative">
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-20 h-3" />
          </div>
          <div className="bg-black rounded-full p-2 absolute right-5 bottom-5">
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
        </Card>

        {/* Recent Location */}
        <Card className="flex p-4 items-start justify-between bg-muted/50 border-none shadow-none relative">
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-20 h-3" />
          </div>
          <div className="bg-sky-400 rounded-full p-2 absolute right-5 bottom-5">
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
        </Card>

        {/* Tech Stack */}
        <Card className="bg-muted shadow-none border-none h-full col-span-2 overflow-hidden">
          <CardHeader>
            <Skeleton className="w-32 h-6" />
          </CardHeader>
          <CardContent className="pb-2">
            <div className="relative w-full overflow-hidden flex items-center justify-center">
              <Marquee pauseOnHover className="[--duration:20s] w-full flex items-center justify-center">
                {techIcons.map((_, index) => (
                  <Card key={index} className="p-0 border-none shadow-none">
                    <CardContent className="flex items-center justify-center font-medium h-16 rounded-lg">
                      <Skeleton className="w-20 h-8" />
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
  );
};

const CardSuspenseTeam: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Suspense fallback={<TeamAndProjectsSkeleton/>}>
      {children}
    </Suspense>
)

const TeamAndProjectsSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Team heading */}
      <Skeleton className="w-20 h-4" />

      {/* Team Card */}
      <Card className="bg-muted border-none shadow-none">
        <CardContent className="p-4">
          <ul className="space-y-4">
            {[...Array(2)].map((_, i) => (
              <li key={i} className="flex flex-col gap-1">
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-full h-3" />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Recent Projects heading */}
      <Skeleton className="w-32 h-4" />

      {/* Recent Projects Card */}
      <Card className="bg-muted border-none shadow-none">
        <CardHeader>
          <Skeleton className="w-24 h-6 mb-2" /> {/* Title */}
          <Skeleton className="w-full h-12" /> {/* Description */}
        </CardHeader>
        <CardContent className="flex flex-col space-y-3">
          <div className="aspect-video bg-muted/20 rounded-lg relative flex items-center justify-center">
            <Skeleton className="w-10 h-10 rounded-full absolute bottom-5 right-5" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const CardSuspenseMedia: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Suspense fallback={<SocialMediaSkeleton/>}>
      {children}
    </Suspense>
)

const SocialMediaSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Social Media heading */}
      <Skeleton className="w-24 h-4" />

      {/* Social Media Card */}
      <Card className="bg-muted/60 shadow-none border-none">
        <CardContent className="grid grid-cols-4 gap-3 p-4">
          {[...Array(4)].map((_, i) => (
            <Card
              key={i}
              className="shadow-none aspect-square bg-muted/20 rounded-lg flex items-center justify-center"
            >
              <Skeleton className="w-10 h-10 rounded-full" />
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* Favorite Tracks heading */}
      <Skeleton className="w-36 h-4" />

      {/* Favorite Tracks Card */}
      <Card className="shadow-none border-none bg-muted h-full">
        <CardHeader>
          <Skeleton className="w-32 h-6 mb-2" /> {/* Title */}
        </CardHeader>
        <CardContent>
          <div className="w-full aspect-video bg-muted/20 rounded-lg animate-pulse" />
        </CardContent>
      </Card>
    </div>
  );
};