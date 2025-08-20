export type ProjectData = {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  features: string;
  learned: string;
  live?: string;
  repo?: string;
  role: string;
  timeline: string;
  purpose: string;
};

export const projectsData: Record<string, ProjectData & {
  isFullstack: boolean;
  timeline: string;
  isSolo: boolean;
  purpose: string;
}> = {
  "devflow": {
    title: "Devflow",
    description: "Devflow is a developer-friendly platform to manage code snippets.",
    tech: [
      "Next.js", "Tailwind", "MongoDB", "TypeScript", "Mongoose",
      "Auth.js", "React", "ShadCN UI", "Pino", "Zod", "MDX"
    ],
    images: [
      "/projects/devflow/1.jpg",
      "/projects/devflow/2.png",
      "/projects/devflow/3.png",
      "/projects/devflow/4.png",
      "/projects/devflow/5.png",
      "/projects/devflow/6.png",
      "/projects/devflow/7.png",
      "/projects/devflow/8.png",
      "/projects/devflow/9.png",
    ],
    features: "Ask and answer developer questions. Authentication with Google & GitHub. Tagging system for tech stack. Syntax highlighted code editor. Answer Form and Ask Question Form. Responsive light/dark UI inspired by StackOverflow. AI Answer Generation. AI Language Selector. Profile Edit.",
    live: "https://devflow.vercel.app",
    repo: "https://github.com/Rydhlnst/v2devflow",
    learned: "Through this project, I learned to structure a full-stack app with Next.js and handle dynamic routing, image optimization, and server-side rendering. I also learned how to implementation AI API and authentication with Auth.js. I also learned how to use Pino for logging and monitoring the application. I also learned how to use ShadCN UI for building a responsive UI.",
    role: "Fullstack Developer",
    timeline: "24 March – 11 April",
    purpose: "To create an interactive and AI-enhanced platform for developers to share, manage, and get answers to code-related problems efficiently.",
    isFullstack: true,
    isSolo: true
  },
  "travello": {
    title: "Travello",
    description: "Travello is a modern travel agency website that showcases curated tour packages, destinations, and seamless booking with a delightful, mobile-first UX.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
      "Zod",
      "React Hook Form",
      "TanStack Query",
      "Strapi CMS",
      "Stripe",
      "Mapbox GL JS",
      "Lucide React"
    ],
    images: [
      "/projects/travello/1.png",
      "/projects/travello/2.png",
      "/projects/travello/3.png",
      "/projects/travello/4.png",
      "/projects/travello/5.png",
      "/projects/travello/6.png"
    ],
    features: "Catalog of travel packages with filters (price, duration, destination). Destination detail pages with interactive maps and photo galleries. Itinerary preview with day-by-day highlights. Booking flow with date picker, traveler count, and dynamic price breakdown. Secure checkout via Stripe. Content-managed blog and packages via Strapi CMS. Testimonials and ratings. WhatsApp/Email CTAs and contact form with validation. Responsive design, SEO metadata, and fast image optimization.",
    live: "https://travello.vercel.app",
    repo: "https://github.com/Rydhlnst/travello",
    learned: "Leveraging ISR/SSG in Next.js for fast package pages. Implemented robust forms with React Hook Form and Zod, and animated UI transitions with Framer Motion. ",
    timeline: "August 2025",
    role: "Frontend Developer",
    purpose: "To provide a high-converting, content-driven travel agency website that makes discovering destinations, comparing packages, and booking trips simple and delightful.",
    isFullstack: false,
    isSolo: true
  },
  "sea-catering": {
    title: "SeaCatering",
    description: "A web application for subscribing to customized catering meal plans with flexible options and easy management.",
    tech: ["Next.js", "Prisma", "Supabase", "ShadCN UI"],
    images: [
      "/projects/seacatering/1.png",
      "/projects/seacatering/2.png",
      "/projects/seacatering/3.png",
      "/projects/seacatering/4.png",
      "/projects/seacatering/5.png",
      "/projects/seacatering/6.png",
      "/projects/seacatering/7.png",
      "/projects/seacatering/8.png"
    ],
    features: "Subscription form with plan selection (Diet, Protein, Royal). Flexible meal type options (Breakfast, Lunch, Dinner). Customizable delivery days. User-friendly dashboard for managing subscriptions and order history. Secure authentication and optimized performance.",
    learned: "I learned how to design a multi-model database for subscriptions, integrate Supabase with Prisma in a Next.js environment, and implement a smooth onboarding flow for catering service users.",
    timeline: "26 June – 30 June",
    role: "Fullstack Developer",
    purpose: "To build a functional catering subscription platform where users can easily choose meal plans, customize their orders, and manage deliveries.",
    isFullstack: true,
    isSolo: true
  },

  "hackattack-landing": {
    title: "HackAttack 2025 Landing Page",
    description: "A modern and engaging landing page built for HackAttack 2025, a hackathon organized by HIMA IF Telkom University. The page provides essential event details and a 'Coming Soon' teaser for participants.",
    tech: ["Next.js", "Tailwind", "TypeScript", "Framer Motion", "ShadCN UI"],
    images: [
      "/projects/hackattack/1.png",
      "/projects/hackattack/2.png",
      "/projects/hackattack/3.png"
    ],
    features: "Responsive landing page with modern animations. Countdown timer for event launch. 'Coming Soon' teaser section. Event introduction with dynamic typography. SEO-optimized and mobile-friendly layout.",
    learned: "I learned how to build an attractive and responsive landing page with animated components using Framer Motion, while keeping performance and SEO in mind for event promotion.",
    timeline: "20 August – 22 August",
    role: "Frontend Developer",
    purpose: "To promote HackAttack 2025 with a professional and visually engaging landing page that attracts participants and builds anticipation for the event.",
    isFullstack: false,
    isSolo: true
  },
  "landing-designeer": {
    title: "Landing Designeer",
    description:
      "A digital agency specializing in crafting high-performing websites and stunning UI/UX designs. We help brands elevate their online presence with clean, modern, and user-centered digital experiences.",
    tech: ["Next.js", "React", "TailwindCSS", "Figma", "Framer Motion"],
    live: "https://landing-designeer.vercel.app",
    images: [
      "/projects/designeer/1.png",
      "/projects/designeer/2.png",
      "/projects/designeer/3.png",
      "/projects/designeer/4.png",
      "/projects/designeer/5.png",
      "/projects/designeer/6.png",
      "/projects/designeer/7.png",
    ],
    features:
      "Agency portfolio site with service showcase, client testimonials, and interactive UI/UX design previews.",
    role: "Frontend Developer",
    timeline: "August 2025",
    isFullstack: false,
    isSolo: true,
    purpose:
      "The purpose of this project was to design and develop a modern digital agency website that effectively communicates the brand's services in web development and UI/UX design. The goal was to create a clean and professional portfolio site that highlights capabilities, builds trust with clients, and demonstrates strong design execution.",
    learned:
      "Through this project, I learned how to structure a professional agency website with a clear information hierarchy, create engaging micro-interactions using Framer Motion, and integrate responsive layouts tailored for service-based businesses. I also gained more practice in translating Figma design prototypes into a pixel-perfect and accessible web experience."
  },
  "munu": {
    title: "MUNU.Finance",
    description: "MUNU.Finance is a personal finance management platform that helps users track income, expenses, budgets, and net worth with a clean, modern dashboard.",
    tech: [
      "Next.js", "Tailwind", "TypeScript", "Prisma", "Supabase",
      "MongoDB", "Mongoose", "Auth.js", "Zod", "Framer Motion",
      "ShadCN UI", "TanStack Query", "Plaid API"
    ],
    images: [
      "/projects/munu/1.png",
      "/projects/munu/2.png",
      "/projects/munu/3.png",
      "/projects/munu/4.png",
      "/projects/munu/5.png",
      "/projects/munu/6.png",
      "/projects/munu/7.png",
      "/projects/munu/8.png",
    ],
    features: "Manual expense and income tracking. Net Worth Overview dashboard. Dynamic Spending Overview with categories and accounts. Budgeting system per category. Favorites section for quick financial insights. Quick summary cards (Upcoming Transactions, Alerts & Reminders, Recent Activity). Authentication with Google & GitHub using Auth.js. Integration with Plaid API for financial accounts. Dynamic dropdowns linked to database (categories & accounts). Responsive UI with dark/light theme.",
    live: "https://munu.finance",
    repo: "https://github.com/Rydhlnst/munu-finance",
    learned: "Through this project, I learned to build a robust financial dashboard with complex state management using TanStack Query, type safety with Zod, and relational data handling with Prisma & Supabase. I also learned how to implement authentication with Auth.js, integrate third-party APIs like Plaid, and design a responsive, modern UI with ShadCN UI and Framer Motion. Additionally, I explored how to connect Prisma with both SQL (Supabase) and NoSQL (MongoDB) for hybrid data modeling.",
    role: "Fullstack Developer",
    timeline: "May 2025",
    purpose: "To create a modern, AI-ready personal finance platform where users can easily manage, track, and analyze their financial activities, while providing scalability for future enhancements like automation and smart budgeting.",
    isFullstack: true,
    isSolo: true
  },
}


import { IconType } from "react-icons";
import { SiAuth0, SiJavascript, SiJson, SiMdx, SiMongodb, SiMongoose, SiNextdotjs, SiNodedotjs, SiOpenai, SiPino, SiPostcss, SiReact, SiTailwindcss, SiTypescript, SiZod } from "react-icons/si";

export const techIconMap: Record<string, IconType> = {
  // Core
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Node.js": SiNodedotjs,
  TypeScript: SiTypescript,

  // Styling
  Tailwind: SiTailwindcss,
  PostCSS: SiPostcss,

  // Auth & API
  "next-auth": SiAuth0,
  "OpenAI API": SiOpenai,

  // Database
  MongoDB: SiMongodb,
  Mongoose: SiMongoose,

  // Form & Validation
  Zod: SiZod,

  // Utils / Infra
  Pino: SiPino,

  // Markdown / Editor
  MDX: SiMdx,
  "next-mdx-remote": SiMdx,

  // Misc
  "react-hook-form": SiReact,
  "query-string": SiJson,
  "lucide-react": SiReact,
  clsx: SiJavascript,
  "class-variance-authority": SiJavascript,
  "tailwind-merge": SiTailwindcss,
};