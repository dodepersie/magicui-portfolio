import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mahadi Saputra",
  nickname: "Dode Mahadi",
  initials: "MS",
  url: "https://mahadisaputra.my.id",
  location: "Tabanan, Bali",
  locationLink: "https://www.google.com/maps/place/tabanan",
  description:
    "Web Development | Social Media | Content Creation | SEO | IT Support",
  summary:
    "I'm a curious and adaptable professional based in Bali, Indonesia, with experience in web development, photo and video editing, social media management, and IT support. I enjoy learning new things, taking responsibility, and continuously developing my skills.",
  avatarUrl: "/mahadi_saputra.webp",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Laravel",
    "Angular",
    "Vue",
    "PHP",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Photo Editing",
    "Video Editing",
    "Social Media Management",
    "Content Creation",
    "IT Support",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "dodepersie@gmail.com",
    tel: "+6287862191120",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dodepersie",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mahadisaputra/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dodepersie@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT. MAHA KARYA MARMER",
      href: "https://mahakaryamarmer.com",
      badges: [],
      location: "Bali, Indonesia",
      title: "IT & Digital Media (Hybrid)",
      logoUrl: "/mkm.webp",
      start: "Sep 2025",
      end: "Present",
      description:
        "Handle the company's digital and technical operations, including photo and video editing, social media management, content creation, web development, and day-to-day IT support. Manage digital content for marketing activities, maintain and improve the company's website, and provide technical solutions to support daily business operations.",
    },
    {
      company: "Pytixs",
      href: "https://pytixs.com",
      badges: [],
      location: "Remote",
      title: "Front End Web Developer (Freelance)",
      logoUrl: "/pytixs.webp",
      start: "Oct 2023",
      end: "Feb 2023",
      description:
        "Implemented Figma designs into interactive, mobile-friendly websites. Developed new features to increase user engagement. Integrated RESTful APIs to display real-time data.",
    },
    {
      company: "PT. Serasi Logistics Indonesia",
      badges: [],
      href: "/",
      location: "On-Site",
      title: "Full Stack Developer (Internship)",
      logoUrl: "/selog.webp",
      start: "Jun 2023",
      end: "Sep 2023",
      description:
        "Built a Laravel & MySQL-based leave management system. Speeded up the leave approval process by up to 40%. Developed a responsive website with Tailwind.",
    },
  ],
  education: [
    {
      school: "HELP University",
      href: "https://help.edu.my",
      degree: "Bachelor of Information Technology (Hons) - GPA: 2.83",
      logoUrl: "/help.webp",
      start: "2019",
      end: "2025",
    },
    {
      school: "ITB STIKOM BALI",
      href: "https://stikom-bali.ac.id",
      degree: "Sarjana Komputer - GPA: 3.44",
      logoUrl: "/stikom.webp",
      start: "2019",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Maha Karya Marmer's Website",
      href: "https://mahakaryamarmer.com",
      dates: "November 2025 - Present",
      active: true,
      description:
        "A company website featuring a marble and natural stone catalog, product collections, and a blog, with a focus on responsive design, performance, and SEO.",
      technologies: ["Laravel", "Vue", "Inertia", "Tailwind CSS", "MySQL"],
      links: [
        {
          type: "Website",
          href: "https://mahakaryamarmer.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/5.webp",
      video: "",
    },
    {
      title: "TicTic Ticket Reservation",
      href: "/",
      dates: "April 2024 - January 2025",
      active: false,
      description:
        "My final year project where I created a web-based ticket reservation system for local events. Integrated with the Midtrans payment gateway and email notifications.",
      technologies: ["Laravel", "Tailwind", "MySQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dodepersie/tictic-fp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/3.webp",
      video: "",
    },
    {
      title: "Promo Tourism System (PTS)",
      href: "/",
      dates: "October 2023 - January 2024",
      active: true,
      description:
        "A web-based tourism booking system developed as a school assignment. Integrated with the PayPal payment gateway to handle online transactions.",
      technologies: ["MongoDB", "ExpressJS", "Angular", "NodeJS", "Tailwind"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dodepersie/promo-tourism-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/4.webp",
      video: "",
    },
    {
      title: "Simple Blog with SEO Optimization",
      href: "/",
      dates: "May 2023 - September 2023",
      active: true,
      description:
        "A simple blog platform built to share knowledge and personal experiences, with a focus on SEO optimization and a clean, responsive user interface.",
      technologies: ["Laravel", "Tailwind", "MySQL"],
      links: [
        {
          type: "Website",
          href: "/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dodepersie/laravel-blog",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/2.webp",
      video: "",
    },
    {
      title: "MoofliXXI",
      href: "https://mooflixxi.mahadisaputra.my.id",
      dates: "November 2022 - August 2023",
      active: false,
      description:
        "A movie discovery website for browsing popular movies, currently playing movies in cinemas, and searching for movies using data from the TMDB API.",
      technologies: ["React", "HeroUI"],
      links: [
        {
          type: "Website",
          href: "https://mooflixxi.mahadisaputra.my.id",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dodepersie/movie-api-by-tmdb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/1.webp",
      video: "",
    },
  ],
} as const;
