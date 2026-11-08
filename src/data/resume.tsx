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
    "Civil Air Patrol cadet and Turning Point Action Commit 100 volunteer, focused on aviation, technology, and civic engagement.",
  summary:
    "I am a high school sophomore at Saunders Trades and Technical High School with a strong interest in aviation, technology, and civic engagement. Through Civil Air Patrol, I have developed leadership, aviation, and teamwork skills as a Cadet Master Sergeant, and I am an Amateur Extra Class amateur radio operator <a href='https://www.qrz.com/db/KE2IOZ' target='_blank'>(KE2IOZ)</a>. I am President of Yonkers Activism Hub and Vice-Chair of Yonkers Teen Republicans, and I volunteered with Turning Point Action's Commit 100 program to chase ballots and help drive voter turnout. I am always looking for opportunities to learn and contribute.",
  avatarUrl: "/me.jpg",
  skills,
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "jose@josemoranurena.tech",
    social: socialLinks,
  },
  work: [
    {
      company: "Turning Point Action",
      href: "https://tpaction.com/",
      location: "New Hampshire",
      title: "Commit 100 Volunteer",
      logoUrl: "/turning-point-action.png",
      start: "2026",
      end: "2026",
      description:
        "Volunteered with Turning Point Action’s Commit 100 program, chasing ballots in Merrimack and Manchester, and working directly with the community in Hillsborough to help drive high voter turnout.",
    },
    {
      company: "Civil Air Patrol",
      href: "https://cap.gov/",
      location: "Syracuse, NY",
      title: "Cadet",
      logoUrl: "/civil-air-patrol.png",
      start: "September 2024",
      end: "Present",
      description:
        "Serving as a Cadet Master Sergeant in the U.S. Air Force Auxiliary. Completed orientation flights in a Cessna 182 and was recommended for the Cadet Wings flight scholarship program. Also served as a Weather Officer for the 2025 CAP/NASA Aviation Weather Mission, submitting atmospheric observations through the GLOBE Observer application.",
    },
  ],
  education: [
    {
      school: "Saunders Trades and Technical High School",
      href: "https://www.yonkerspublicschools.org/o/saunders",
      degree: "Electronic and Computer Circuitry",
      logoUrl: "/saunders-trades-and-technical-high-school.png",
      start: "2025",
      end: "2029",
    },
    {
      school: "Embry-Riddle Aeronautical University",
      href: "https://erau.edu/",
      degree: "Dual Enrollment",
      logoUrl: "/embry-riddle-aeronautical-university.svg",
      start: "2025",
      end: "Present",
    },
    {
      school: "Frederick Community College",
      href: "https://frederick.edu/",
      degree: "Coursework",
      logoUrl: "/frederick-community-college.jpg",
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
      image: "/sds2344.JPG",
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
      image: "/yonkers-teen-republicans.jpg",
    },
    {
      name: "Yonkers Activism Hub",
      href: "https://clubamerica.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "President of the Club America activism hub for the city of Yonkers, gaining leadership experience by planning and organizing events and engaging students in civic and community-focused discussions.",
      image: "/yonkers-activism-hub.jpg",
    },
  ],
  awards: [
    {
      title: "Leadership Participation Award",
      href: "#",
      date: "June 9, 2026",
      description:
        "Awarded by the Police Athletic League of Yonkers, Mayor Mike Spano, and New York State Senator Andrea Stewart-Cousins as one of ten students recognized in the 2026 Leadership Day essay contest.",
      image: "/pal-logo.jpeg",
    },
    {
      title: "Certificate of Special Congressional Recognition",
      href: "#",
      date: "May 29, 2025",
      description:
        "Awarded by U.S. Representative George Latimer for promoting to Cadet Staff Sergeant in Civil Air Patrol, the U.S. Air Force Auxiliary.",
      image: "/united-states-congress.svg",
    },
    {
      title: "Wright Brothers Award",
      href: "#",
      date: "May 7, 2025",
      description:
        "Awarded by Civil Air Patrol for passing the Wright Brothers milestone and promoting to Cadet Staff Sergeant.",
      image: "/civil-air-patrol.png",
    },
  ],
} as const;
