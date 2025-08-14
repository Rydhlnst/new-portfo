"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";

const projects = [
  { title: "Landing Page UI", img: "https://source.unsplash.com/random/400x500?web", link: "#" },
  { title: "Portfolio Site", img: "https://source.unsplash.com/random/400x300?portfolio", link: "#" },
  { title: "E-Commerce App", img: "https://source.unsplash.com/random/400x600?shop", link: "#" },
  { title: "Dashboard UI", img: "https://source.unsplash.com/random/400x450?dashboard", link: "#" },
  { title: "Blog Platform", img: "https://source.unsplash.com/random/400x350?blog", link: "#" },
  { title: "AI Tool UI", img: "https://source.unsplash.com/random/400x550?ai", link: "#" },
];

const ProjectList = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8">
      <h1 className="text-xl font-semibold mb-6">Projects List</h1>
      <div className="columns-1 sm:columns-2 gap-4 space-y-4">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="block break-inside-avoid overflow-hidden bg-muted shadow-none border-none transition-shadow duration-200 rounded-4xl"
          >
            <CardHeader>
                <CardTitle className="text-4xl font-semibold ">
                    {project.title}
                </CardTitle>
                <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident vel expedita dicta vitae. Ullam tenetur molestias dolorum nostrum asperiores, quo ex deserunt omnis porro excepturi sed illum, magni earum!
                </CardDescription>
            </CardHeader>
            <CardContent className="mt-3">
                <Skeleton className="aspect-video relative w-full h-full rounded-4xl">
                    <div className="bottom-10 absolute bg-black size-12 right-10 rounded-full flex items-center justify-center">
                        <ArrowRight weight="duotone" className="text-xl -rotate-45 text-white"/>
                    </div>
                </Skeleton>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
