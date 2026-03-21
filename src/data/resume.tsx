import { Icons } from "@/components/icons";
import { MongoDBIcon } from "@/components/ui/svgs/mongodb";
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
  { name: "MongoDB", icon: MongoDBIcon },
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
  X: {
    name: "X",
    url: "https://x.com/JoseMoranUrena",
    icon: Icons.x,
    navbar: true,
  },
  Capipedia: {
    name: "Capipedia",
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
  location: "Yonkers, NY",
  locationLink: "https://www.google.com/maps/place/Yonkers",
  description:
    "Student developer and founder focused on building practical software solutions and learning aviation.",
  summary:
    "I am a high school student at Saunders Trades & Technical High School with dual enrollment at Embry-Riddle Aeronautical University, focused on software development and aviation. I founded JMU Solutions LLC, where I lead development of web applications and automation tools for online communities. I have experience building full-stack applications using Next.js, Node.js, and MongoDB, and I am actively seeking opportunities to learn, contribute, and grow in both aviation and technology environments.",
  avatarUrl: "/me.jpg",
  skills,
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "jose@josemoranurena.tech",
    tel: "9142337373",
    social: socialLinks,
  },
  work: [
    {
      company: "JMU Solutions LLC",
      href: "https://jmusolutionsllc.com/",
      location: "Yonkers, NY",
      title: "Founder",
      logoUrl: "https://jmusolutionsllc.com/favicon.ico",
      start: "July 2025",
      end: "Present",
      description:
        "Founded and lead a small team of developers, managing projects, client communication, and delivery. Built and deployed Northca, a Next.js-based MDT and management platform used by roleplay communities. Developed backend systems using Node.js and MongoDB, including a customizable bot portal for Discord integrations and automation tools that streamline workflows.",
    },
    {
      company: "Civil Air Patrol",
      href: "#",
      location: "Scarsdale, NY",
      title: "Cadet",
      logoUrl:
        "https://pbs.twimg.com/profile_images/1542585699177795586/cQupXA--_400x400.png",
      start: "September 2024",
      end: "December 2025",
      description:
        "Served as a Cadet Master Sergeant in the U.S. Air Force Auxiliary. Participated in aviation training including orientation flights in a Cessna 182 and a cadet airlift mission aboard a U.S. Air Force C-17. Recommended for the Cadet Wings flight scholarship program, demonstrating leadership and commitment to aviation.",
    },
  ],
  education: [
    {
      school: "Saunders Trades & Technical High School",
      href: "https://www.yonkerspublicschools.org/o/saunders",
      degree: "High School Student",
      logoUrl:
        "https://pbs.twimg.com/profile_images/1059496856856727552/jyD6Z5BA_400x400.jpg",
      start: "2025",
      end: "2029",
    },
    {
      school: "Embry-Riddle Aeronautical University",
      href: "https://erau.edu/",
      degree: "Dual Enrollment",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/be/Embry-Riddle_Aeronautical_University_seal.svg",
      start: "2025",
      end: "Present",
    },
    {
      school: "Frederick Community College",
      href: "https://frederick.edu/",
      degree: "Coursework",
      logoUrl:
        "https://yt3.googleusercontent.com/hj11erBroF0Trz7s5zLv8iGwXjgxZjMvM8Gxsn7_Tdbs1ybVdHymW6fiXQ7fkUYZa2TBKs0FIQ=s900-c-k-c0x00ffffff-no-rj",
      start: "May 2025",
      end: "August 2025",
    },
  ],
  projects: [
    {
      title: "Ducky",
      href: "https://duckybot.xyz",
      dates: "2026 - Present",
      active: true,
      description:
        "The website for Ducky, a multipurpose bot focused on seamlessly integrating Discord and ERLC server automation for effortless management.",
      technologies: ["Next.js", "REST APIs"],
      image:
        "https://mintcdn.com/duckybot/fesTS0cjog06BpCU/icons/Ducky.svg?fit=max&auto=format&n=fesTS0cjog06BpCU&q=85&s=9a1f4a4585b5f3d4e0e178d19dda560e",
    },
    {
      title: "Northca Systems",
      href: "https://northca.dev/",
      dates: "2025 - Present",
      active: true,
      description:
        "A web-based CAD and management system built with Next.js for roleplay communities, supporting real-time operations and user management.",
      technologies: ["Next.js", "Supabase"],
      image:
        "https://media.discordapp.net/attachments/1427773423286878279/1484989732252553546/Screenshot_2026-03-21_at_14.58.57.png?ex=69c03bf5&is=69beea75&hm=ff9651951ed3fbfd9fd1f9844b321482afca894fbb0c2e942dfef3d7bca32d19&=&format=webp&quality=lossless&width=1688&height=1570",
    },
  ],
} as const;
