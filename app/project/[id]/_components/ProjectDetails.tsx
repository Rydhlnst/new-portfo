"use client";
import { ProjectData, techIconMap } from '@/lib/data';
import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

type ProjectDetailsProps = {
  project: ProjectData;
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ProjectDetailsSuspense>

        <div className="mt-8 flex flex-col items-start space-y-6 w-full px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:flex-row gap-10 w-full pb-10">
            <div className="flex-1 space-y-6">
            <div className="relative aspect-video rounded-xl overflow-hidden border">
                <Link className={buttonVariants({className: "absolute !rounded-full top-4 z-10 left-10 bottom-10 cursor-pointer hover:size-14 hover:bottom-15 hover:-rotate-15 transition-all duration-200 group bg-black size-12 right-10 flex items-center justify-center", size:"icon"})} href={"/"}>
                    <ChevronLeft className='size-5 text-white group-hover:size-8 duration-200'/>
                </Link>
                <Image
                src={
                    Array.isArray(project.images)
                    ? project.images[currentIndex] ?? "/placeholder.jpg"
                    : project.images ?? "/placeholder.jpg"
                }
                alt={project.title ?? "Project preview"}
                fill
                className="object-cover"
                priority
                />
            </div>

            {Array.isArray(project.images) && project.images.length > 1 && (
                <div className="flex gap-3 mt-3 overflow-x-auto">
                {project.images.map((img, idx) => (
                    <div
                    key={idx}
                    className={`relative w-28 h-16 rounded-md overflow-hidden cursor-pointer border-2 
                    ${currentIndex === idx ? "border-primary" : "border-transparent"}`}
                    onClick={() => setCurrentIndex(idx)}
                    >
                    <Image
                        src={img}
                        alt={`Preview ${idx + 1}`}
                        fill
                        className="object-cover"
                    />
                    </div>
                ))}
                </div>
            )}
            </div>

            <div className="grid grid-cols-3 gap-x-10">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                <h1 className="text-lg font-semibold">{project.title}</h1>
                <p className="text-sm text-muted-foreground">{project.purpose}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => {
                    const Icon = techIconMap[tech];
                    return (
                    <Badge
                        key={tech}
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1"
                    >
                        {Icon && <Icon className="w-4 h-4 mr-1" />}
                        {tech}
                    </Badge>
                    );
                })}
                </div>
            </div>
            <div className="grid grid-cols-3 col-span-2 gap-y-10">
                <div className="col-span-3 grid grid-cols-2 gap-10">
                <p className="text-sm font-medium">{project.description}</p>
                <p className="text-justify text-sm font-medium">{project.features}</p>
                </div>
                <div className="grid grid-cols-4 col-span-3 gap-y-10">
                <div className="flex flex-col">
                    <h2 className="font-semibold text-primary/60 text-lg">Title</h2>
                    <p className="text-sm font-medium">{project.title}</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-semibold text-primary/60 text-lg">Role</h2>
                    <p className="text-sm font-medium">{project.role}</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-semibold text-primary/60 text-lg">Timeline</h2>
                    <p className="text-sm font-medium">{project.timeline}</p>
                </div>
                {project.repo ? (
                    <Link
                    href={project.repo}
                    className={buttonVariants({ variant: "outline" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Visit Repo
                    </Link>
                ) : (
                    <p className="text-sm text-muted-foreground italic">
                    Currently not public
                    </p>
                )}
                </div>
            </div>
            </div>
        </div>
        </div>
    </ProjectDetailsSuspense>
  );
};

export default ProjectDetails;

const ProjectDetailsSuspense: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<ProjectDetailsSkeleton/>}>
    {children}
  </Suspense>
)

const ProjectDetailsSkeleton = () => {
  return (
    <div className="mt-8 flex flex-col items-start space-y-6 w-full px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:flex-row gap-10 w-full pb-10">
        
        {/* Left: Image + Thumbnails */}
        <div className="flex-1 space-y-6">
          <div className="relative aspect-video rounded-xl overflow-hidden border">
            <Skeleton className="w-full h-full" />
            <div className="absolute top-4 left-10 w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
          </div>

          <div className="flex gap-3 mt-3 overflow-x-auto">
            {[...Array(4)].map((_, idx) => (
              <Skeleton key={idx} className="w-28 h-16 rounded-md" />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="grid grid-cols-3 gap-x-10 w-full">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-6 w-3/4" /> {/* Title */}
            <Skeleton className="h-4 w-5/6" /> {/* Purpose */}
            <div className="flex flex-wrap gap-3 mt-4">
              {[...Array(4)].map((_, idx) => (
                <Skeleton key={idx} className="w-20 h-6 rounded-full" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 col-span-2 gap-y-10">
            <div className="col-span-3 grid grid-cols-2 gap-10">
              <Skeleton className="h-24 w-full" /> {/* Description */}
              <Skeleton className="h-24 w-full" /> {/* Features */}
            </div>

            <div className="grid grid-cols-4 col-span-3 gap-y-10 gap-x-6">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <Skeleton className="h-5 w-1/2" /> {/* Label */}
                  <Skeleton className="h-4 w-3/4" /> {/* Value */}
                </div>
              ))}
              <Skeleton className="h-10 w-32 col-span-1 rounded-md" /> {/* Repo Button */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
