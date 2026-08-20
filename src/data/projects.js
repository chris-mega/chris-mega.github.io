// Hand-authored portfolio data.
//
// Screenshots live in /public/shots and are regenerated with `npm run shots`
// (see scripts/capture-shots.mjs). Projects without a `shot` render a
// generated gradient tile instead — no GitHub OpenGraph cards anywhere.

export const CATEGORIES = ["All", "Web", "App", "Robotics"];

export const projects = [
  {
    slug: "quienpostula",
    title: "QuienPostula",
    domain: "quienpostula.net",
    category: "Web",
    year: "2026",
    role: "Built & shipped solo",
    blurb:
      "Independent explorer for Peru's 2026 general elections: presidential tickets, 60 senators and 130 deputies, filterable by party and department, cross-checked against JNE records, televised debates and national press.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://www.quienpostula.net/",
    shot: "/shots/quienpostula.png",
    accent: "from-rose-500 to-indigo-600",
    featured: true,
  },
  {
    slug: "three-branch-supply",
    title: "Three Branch Supply",
    domain: "threebranchsupply.com",
    category: "Web",
    year: "2025",
    role: "Design, build & SEO",
    blurb:
      "Storefront for a marine and industrial supplies company: product categories, cart, and contact flow, built on a hosted site platform and tuned for local search.",
    tech: ["Web build", "E-commerce", "SEO"],
    live: "https://www.threebranchsupply.com/",
    shot: "/shots/threebranchsupply.png",
    accent: "from-sky-500 to-blue-800",
    featured: true,
  },
  {
    slug: "raven",
    title: "Raven Support Network",
    domain: "elijahsraven.ca",
    category: "Web",
    year: "2023",
    role: "Co-founder & developer",
    blurb:
      "Community platform for international students and newcomers to Canada, sharing resources and lived-experience stories.",
    tech: ["React", "Chakra UI"],
    live: "https://www.elijahsraven.ca/",
    shot: "/shots/elijahsraven.png",
    accent: "from-violet-500 to-purple-800",
    featured: true,
  },
  {
    slug: "bumpbites",
    title: "BumpBites",
    category: "App",
    year: "2024",
    role: "Mobile app",
    blurb:
      "Cross-platform mobile app for tracking nutrition through pregnancy, with a shared design system across iOS and Android.",
    tech: ["React Native", "Tamagui", "Expo"],
    repo: "https://github.com/chris-mega/BumpBites",
    accent: "from-pink-500 to-rose-700",
  },
  {
    slug: "bumpbites-ai",
    title: "BumpBites AI",
    category: "App",
    year: "2024",
    role: "Backend & inference",
    blurb:
      "The service behind BumpBites: a containerized Python API on Azure that turns meal photos and free-text logs into structured nutrition data.",
    tech: ["Python", "Azure", "Docker", "OpenAI"],
    repo: "https://github.com/chris-mega/BumpBitesAI",
    accent: "from-amber-500 to-orange-700",
  },
  {
    slug: "spotitool",
    title: "SpotiTool",
    category: "Web",
    year: "2022",
    role: "Side project",
    blurb:
      "Web app that sorts a messy pile of liked Spotify songs into playlists, driven entirely by the Spotify Web API.",
    tech: ["Angular", "TypeScript", "Spotify API"],
    repo: "https://github.com/chris-mega/SpotiTool",
    accent: "from-emerald-500 to-green-700",
  },
  {
    slug: "syncstream",
    title: "SyncStream",
    category: "Web",
    year: "2021",
    role: "Team project",
    blurb:
      "Map-driven listening app that syncs what people nearby are playing, mashing up Google Maps and Spotify.",
    tech: ["React", "Bootstrap", "Google Maps API", "Spotify API"],
    repo: "https://github.com/Jonathan204/SyncStream",
    accent: "from-cyan-500 to-teal-700",
  },
  {
    slug: "portfolio",
    title: "This site",
    category: "Web",
    year: "2025",
    role: "Personal site",
    blurb:
      "The site you're on. App Router, Tailwind v4, screenshots captured at build time, deployed on Vercel.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    repo: "https://github.com/chris-mega/chris-mega.github.io",
    accent: "from-slate-500 to-slate-800",
  },
  {
    slug: "object-detector",
    title: "Object Detector",
    category: "Robotics",
    year: "2019",
    role: "Computer vision",
    blurb:
      "Ball and arrow detectors used by our humanoid robots to find targets on the field in real time.",
    tech: ["Python", "OpenCV"],
    repo: "https://github.com/chris-mega/objectDetector",
    accent: "from-lime-500 to-emerald-700",
  },
  {
    slug: "obstacle-slam",
    title: "Obstacle SLAM",
    category: "Robotics",
    year: "2019",
    role: "Navigation",
    blurb:
      "Mapping and obstacle-avoidance pipeline on ROS, letting a robot chart a route through a course it hasn't seen before.",
    tech: ["Python", "OpenCV", "ROS", "NumPy"],
    repo: "https://github.com/chris-mega/ObstacleSlam",
    accent: "from-indigo-500 to-blue-800",
  },
  {
    slug: "piano-player",
    title: "Piano Player",
    category: "Robotics",
    year: "2019",
    role: "Vision & motion",
    blurb:
      "Program that had a Robotis-OP3 humanoid read and play a piano keyboard — the robot pianist from our IROS 2019 robot band.",
    tech: ["Python", "OpenCV", "ROS", "NumPy"],
    repo: "https://github.com/chris-mega/PianoPlayer",
    accent: "from-fuchsia-500 to-violet-800",
  },
];
