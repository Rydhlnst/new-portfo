/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import Matter from "matter-js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "TypeScript",
  "Node.js",
  "Prisma",
  "Mongoose",
  "Supabase",
  "MongoDB",
  "Auth.js",
  "Zod",
  "Stripe API",
  "Midtrans API",
  "Plaid API",
];

const colors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-orange-500",
  "bg-emerald-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-fuchsia-500",
  "bg-lime-500",
  "bg-rose-500",
  "bg-amber-500",
];

interface Config {
  gravity: { x: number; y: number; scale: number };
  restitution: number;
  friction: number;
  frictionAir: number;
  density: number;
  wallThickness: number;
  mouseStiffness: number;
}

interface BodyItem {
  body: Matter.Body;
  element: HTMLElement;
  width: number;
  height: number;
}

const PhysicsAnimation: React.FC = () => {
  const animateOnScroll: boolean = true;

  const config: Config = {
    gravity: { x: 0, y: 1, scale: 0.001 },
    restitution: 0.5,
    friction: 0.5,
    frictionAir: 0.02,
    density: 0.002,
    wallThickness: 200,
    mouseStiffness: 0.6,
  };

  let engine: Matter.Engine | null = null;
  let runner: Matter.Runner | null = null;
  let mouseConstraint: Matter.MouseConstraint | null = null;
  let bodies: BodyItem[] = [];

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val));

  function initPhysics(container: HTMLElement) {
    if (engine) {
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
    }

    engine = Matter.Engine.create();
    engine.gravity = config.gravity;

    const containerRect = container.getBoundingClientRect();
    const wallThickness = config.wallThickness;

    // Tambahkan semua wall (termasuk topWall langsung)
    const walls = [
      Matter.Bodies.rectangle(
        containerRect.width / 2,
        containerRect.height + wallThickness / 2,
        containerRect.width + wallThickness * 2,
        wallThickness,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        containerRect.height / 2,
        wallThickness,
        containerRect.height + wallThickness * 2,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        containerRect.width + wallThickness / 2,
        containerRect.height / 2,
        wallThickness,
        containerRect.height + wallThickness * 2,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        containerRect.width / 2,
        -wallThickness / 2,
        containerRect.width + wallThickness * 2,
        wallThickness,
        { isStatic: true }
      ),
    ];
    Matter.World.add(engine.world, walls);

    bodies = [];
    const objects = container.querySelectorAll<HTMLElement>(".object");

    objects.forEach((obj) => {
      const objRect = obj.getBoundingClientRect();
      const objWidth = objRect.width || 120;
      const objHeight = objRect.height || 40;

      const startX =
        Math.random() * (containerRect.width - objWidth) + objWidth / 2;
      const startY = Math.random() * (containerRect.height / 2) - 100;
      const startRotation = (Math.random() - 0.5) * Math.PI;

      const body = Matter.Bodies.rectangle(
        startX,
        startY,
        objWidth,
        objHeight,
        {
          restitution: config.restitution,
          friction: config.friction,
          frictionAir: config.frictionAir,
          density: config.density,
        }
      );

      Matter.Body.setAngle(body, startRotation);

      bodies.push({
        body,
        element: obj,
        width: objWidth,
        height: objHeight,
      });

      Matter.World.add(engine!.world, body);
    });

    const mouse = Matter.Mouse.create(container);
    mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: config.mouseStiffness,
        render: { visible: false },
      },
    });

    Matter.World.add(engine.world, mouseConstraint);

    runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    function updatePositions() {
      bodies.forEach(({ body, element, width, height }) => {
        const x = clamp(body.position.x - width / 2, 0, containerRect.width - width);
        const y = clamp(body.position.y - height / 2, -height * 3, containerRect.height - height);

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.transform = `rotate(${body.angle}rad)`;
      });

      requestAnimationFrame(updatePositions);
    }
    updatePositions();
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (animateOnScroll) {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        if (section.querySelector(".object-container")) {
          ScrollTrigger.create({
            trigger: section,
            start: "top bottom",
            once: true,
            onEnter: () => {
              const container = section.querySelector(".object-container");
              if (container && !engine) {
                initPhysics(container as HTMLElement);
              }
            },
          });
        }
      });
    } else {
      const container = document.querySelector(".object-container");
      if (container) {
        initPhysics(container as HTMLElement);
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (engine) {
        Matter.World.clear(engine.world, false);
        Matter.Engine.clear(engine);
      }
      if (runner) {
        Matter.Runner.stop(runner);
      }
    };
  }, []);

  return (
    <section className="footer relative w-screen h-screen p-8 overflow-hidden flex items-center justify-center bg-white text-black">
      <div className="object-container absolute top-0 left-0 w-full h-full">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className={`object absolute py-2 px-5 min-w-[120px] min-h-[40px]
              pointer-events-auto cursor-grab active:cursor-grabbing text-2xl font-medium 
              text-black select-none ${colors[idx % colors.length]} 
              border-4 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] 
              transition-transform duration-150 active:scale-95`}
          >
            <p>{tech}</p>
          </div>
        ))}
      </div>

      <div className="footer-content absolute top-0 left-0 w-full h-full p-8 flex justify-center items-center pointer-events-none z-10">
        <h1 className="text-4xl font-bold">What can I do here</h1>
      </div>
    </section>
  );
};

export default PhysicsAnimation;
