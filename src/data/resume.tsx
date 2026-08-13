import { Icons } from "@/components/icons";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { HomeIcon } from "lucide-react";

const skills = [
  { name: "React", icon: ReactLight },
  { name: "Next.js", icon: NextjsIconDark },
  { name: "TypeScript", icon: Typescript },
  { name: "Node.js", icon: Nodejs },
] as const;

const socialLinks = {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/JoseMoranUrena523",
    icon: Icons.github,
    navbar: true,
  },
  LinkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jose-moran-urena",
    icon: Icons.linkedin,
    navbar: true,
  },
  Instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/j_moranurena/",
    icon: Icons.instagram,
    navbar: true,
  },
  X: {
    name: "X",
    url: "https://x.com/JoseMoranUrena",
    icon: Icons.x,
    navbar: true,
  },
  CAPipedia: {
    name: "CAPipedia",
    url: "https://capipedia.cap.gov/wiki/User:JMoranUrena19",
    icon: Icons.capipedia,
    navbar: true,
  },
  email: {
    name: "Send Email",
    url: "mailto:jose@josemoranurena.tech",
    icon: Icons.email,
    navbar: false,
  },
} as const;

export const DATA = {
  name: "Jose Moran Urena",
  initials: "JMU",
  url: "https://josemoranurena.tech",
  description:
    "Former Civil Air Patrol cadet and founder of JMU Solutions LLC, focused on software development and aviation.",
  summary:
    "I am a high school student at Saunders Trades & Technical High School with dual enrollment at Embry-Riddle Aeronautical University, focused on software development and aviation. I founded JMU Solutions LLC, where I lead development of web applications and automation tools for online communities. I have experience building full-stack applications using Next.js, Node.js, and PostgreSQL, and I am actively seeking opportunities to learn, contribute, and grow in aviation, technology, and public service.",
  avatarUrl: "/me.jpg",
  skills,
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "jose@josemoranurena.tech",
    social: socialLinks,
  },
  work: [
    {
      company: "JMU Solutions LLC",
      href: "https://jmusolutionsllc.com/",
      location: "Yonkers, NY",
      title: "Founder",
      logoUrl: "/jmu-solutions-llc.png",
      start: "July 2025",
      end: "May 2026",
      description:
        "Founded and led a small team of developers, managing projects, client communication, and delivery. Built and deployed Northca, a Next.js-based MDT and management platform for roleplay communities. Developed backend systems using Node.js and MongoDB, including a customizable Discord bot portal and automation tools to streamline workflows.",
    },
    {
      company: "Civil Air Patrol",
      href: "https://cap.gov/",
      location: "Scarsdale, NY",
      title: "Cadet",
      logoUrl:
        "/civil-air-patrol.png",
      start: "2024",
      end: "2026, 2026 - Present",
      description:
        "Served as a Cadet Master Sergeant in the U.S. Air Force Auxiliary. Participated in military drill and aviation training including orientation flights in a Cessna 182. Recommended for the Cadet Wings flight scholarship program, demonstrating leadership and commitment to aviation.",
    },
  ],
  education: [
    {
      school: "Saunders Trades and Technical High School",
      href: "https://www.yonkerspublicschools.org/o/saunders",
      degree: "High School Student",
      logoUrl:
        "/saunders-trades-and-technical-high-school.png",
      start: "2025",
      end: "2029",
    },
    {
      school: "Embry-Riddle Aeronautical University",
      href: "https://erau.edu/",
      degree: "Dual Enrollment",
      logoUrl:
        "/embry-riddle-aeronautical-university.svg",
      start: "2025",
      end: "Present",
    },
    {
      school: "Frederick Community College",
      href: "https://frederick.edu/",
      degree: "Coursework",
      logoUrl:
        "/frederick-community-college.jpg",
      start: "May 2025",
      end: "August 2025",
    },
  ],
  projects: [
    {
      title: "The Saunders Droid Factory",
      href: "https://www.instagram.com/saundersdroidfactory",
      dates: "2026 Season",
      active: false,
      description:
        "Conducted match scouting and data analysis during Week 6 in FIRST NYC, supporting alliance selection and real-time strategy decisions for Team 2344.",
      technologies: ["Data Analysis", "Strategic Thinking"],
      image:
        "/sds2344.JPG",
    },
    {
      title: "Northca Systems",
      href: "https://northca.dev/",
      dates: "July 2025 - April 2026",
      active: false,
      description:
        "A web-based CAD and management system built with Next.js for roleplay communities, supporting real-time operations and user management.",
      technologies: ["Next.js", "Supabase"],
      image:
        "/northca-systems.png",
    },
  ],
  organizations: [
    {
      name: "Yonkers Teen Republicans",
      href: "https://instagram.com/yonkersteengop/",
      dates: "2026 - 2027",
      active: true,
      description:
        "Vice-Chair of the Yonkers Teen Republicans, assisting Chairman Al Torres in leading the youth charter of the Yonkers Republican Party and building relationships with Republican candidates in the greater Yonkers area.",
      image:
        "/yonkers-teen-republicans.jpg",
    },
    {
      name: "Club America at Saunders Trades and Technical High School",
      href: "https://clubamerica.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "Founder and President of the Club America chapter at Saunders, gaining leadership experience by planning and organizing events and engaging students in civic and community-focused discussions.",
      image:
        "/club-america-at-saunders.jpg",
    }
  ],
  awards: [
    {
      title: "Leadership Participation Award",
      href: "#",
      date: "June 9, 2026",
      description:
        "Awarded by the Police Athletic League of Yonkers, Mayor Mike Spano, and New York State Senator Andrea Stewart-Cousins as one of ten students recognized in the 2026 Leadership Day essay contest.",
      image:
        "/pal-logo.jpeg",
    },
    {
      title: "Certificate of Special Congressional Recognition",
      href: "#",
      date: "May 29, 2025",
      description:
        "Awarded by U.S. Representative George Latimer for promoting to Cadet Staff Sergeant in Civil Air Patrol, the U.S. Air Force Auxiliary.",
      image:
        "/united-states-congress.svg",
    },
    {
      title: "Wright Brothers Award",
      href: "#",
      date: "May 7, 2025",
      description:
        "Awarded by Civil Air Patrol for passing the Wright Brothers milestone and promoting to Cadet Staff Sergeant.",
      image:
        "/civil-air-patrol.png",
    }
  ]
} as const;
