import { Marquee } from '@/components/magicui/marquee'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import Image from 'next/image';
import React from 'react'

const certificates = [
  {
    name: "Getting Started with Programming Basics to Become a Software Developer",
    provider: "Dicoding",
    issued: "July 2025",
    url: "/certificate/DasarPemograman.jpg",
    tech: ["Javascript"]
  },
  {
    name: "Learn Git Basics with Github",
    provider: "Dicoding",
    issued: "July 2025",
    url: "/certificate/Git.jpg",
    tech: ["Github"]
  },
  {
    name: "Introduction to programming logic",
    provider: "Dicoding",
    issued: "July 2025",
    url: "/certificate/LogicProgramming.jpg",
    tech: ["Javascript"]
  },
  {
    name: "Probability",
    provider: "Pacmann",
    issued: "June 2025",
    url: "/certificate/Probability.jpg",
    tech: ["Python", "Numpy"]
  },
  {
    name: "Data Visualiation & Wrangling",
    provider: "Pacmann",
    issued: "June 2025",
    url: "/certificate/DataWrangling.jpg",
    tech: ["Python", "Numpy"]
  },
];


const CertificateSection = () => {
  return (
    <div className='h-full w-full px-4 md:px-8 lg:px-16 md:py-8 py-16'>
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-xs uppercase font-semibold tracking-widest text-primary/60'>
            Certificate
        </h1>
        <Card className="bg-muted shadow-none border-none h-full col-span-2 overflow-hidden">
                <CardContent className="pb-2">
                    <div className="relative w-full overflow-hidden flex items-center justify-center">
                      <Marquee pauseOnHover className="[--duration:20s] w-full flex items-center justify-center">
                        {certificates.map((cert, index) => (
                            <HoverCard key={index}>
                                <HoverCardTrigger >
                                    <Card className="py-8 border-none shadow-none min-w-sm h-full cursor-pointer hover:scale-105 transition-transform duration-200">
                                        <CardHeader className='h-full'>
                                            <CardTitle className="text-lg font-semibold">{cert.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex items-center justify-center font-medium rounded-lg">
                                            <div className='flex flex-col w-full text-sm'>
                                                <p>Provider: <span className='font-semibold'>{cert.provider}</span></p>
                                                <p>Issued: {cert.issued}</p>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            
                                        </CardFooter>
                                    </Card>
                                </HoverCardTrigger>
                                    <HoverCardContent className="text-sm shadow-lg flex-col flex gap-y-3 border border-muted rounded-xl p-4 w-[340px]">
                                        <div className="relative aspect-video w-full rounded-xl overflow-hidden">
                                            <Image
                                            src={cert.url ?? '/placeholder.jpg'}
                                            alt={cert.name}
                                            fill
                                            className="object-cover"
                                            />
                                        </div>
                                        <div className='flex flex-col gap-y-1'>
                                            <p className='text-sm font-semibold'>{cert.name}</p>
                                            <div>
                                                {cert.tech?.map((tech) => (
                                                    <div key={tech} className='flex flex-col gap-x-1'>
                                                        <Badge variant={"outline"} className='rounded-sm hover:bg-foreground/10 duration-100 hover:scale-105'>{tech}</Badge>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className='text-sm text-foreground/80'>{cert.issued}</p>
                                        </div>
                                    </HoverCardContent>
                            </HoverCard>
                        ))}
                      </Marquee>

                      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-muted"></div>
                      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-muted"></div>
                    </div>
                </CardContent>
              </Card>
      </div>
    </div>
  )
}

export default CertificateSection
