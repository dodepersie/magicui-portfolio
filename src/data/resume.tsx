import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mahadi Saputra",
  initials: "MS",
  url: "https://mahadisaputra.my.id",
  location: "Tabanan, Bali",
  locationLink: "https://www.google.com/maps/place/tabanan",
  description:
    "A Junior Web Developer with a passion for building a interactive and user-friendly web applications.",
  summary:
    "Currently, stay in Bali, Indonesia. I'm a curious person. I can learn new things and I can be a good listener. And I'm a person who is responsible for anything that already give to me.",
  avatarUrl: "/Mahadi_Saputra.webp",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Tailwind CSS",
    "Laravel",
    "Angular",
    "MongoDB",
    "Postgres",
    "mySQL",
    "Vue",
    "PHP",
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
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
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
      company: "Pytixs",
      href: "https://pytixs.com",
      badges: [],
      location: "Remote",
      title: "Front End Web Developer",
      logoUrl: "/pytixs.png",
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
      title: "Full Stack Developer",
      logoUrl: "/selog.jpg",
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
      logoUrl: "/help.png",
      start: "2019",
      end: "2025",
    },
    {
      school: "ITB STIKOM BALI",
      href: "https://stikom-bali.ac.id",
      degree: "Sarja Komputer - GPA: 3.44",
      logoUrl: "/stikom.png",
      start: "2019",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "MoofliXXI",
      href: "https://mooflixxi.mahadisaputra.my.id",
      dates: "",
      active: false,
      description:
        "A website to see popular movies, see playing movies on cinema and search for movies. Powered by API from TMDB.",
      technologies: ["React", "HeroUI"],
      links: [
        {
          type: "Website",
          href: "https://mooflixxi.mahadisaputra.my.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/1.png",
      video: "",
    },
    {
      title: "Simple Blog with SEO Optimization",
      href: "/",
      dates: "",
      active: true,
      description:
        "A simple blog that I use to share my knowledge and experience.",
      technologies: ["Laravel", "Tailwind", "mySQL"],
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
      image: "/2.png",
      video: "",
    },
    {
      title: "TicTic - Your One-Stop Shop for Ticket Reservation",
      href: "/",
      dates: "April 2024 - January 2025",
      active: false,
      description:
        "My final year project where I create a web-based ticket reservation system for a local event. Integrated with Midtranspayment gateway and email notification.",
      technologies: ["Laravel", "Tailwind", "mySQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dodepersie/tictic-fp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/3.png",
      video: "",
    },
    {
      title: "Promo Tourism",
      href: "https://automatic.chat",
      dates: "October 2023 - January 2024",
      active: true,
      description:
        "My school assignment to create a web-based booking system for tourism. Integrate with PayPal payment gateway.",
      technologies: ["MongoDB", "ExpressJS", "Angular", "NodeJS", "Tailwind"],
      links: [
        {
          type: "Source",
          href: "https://github.com/dodepersie/promo-tourism-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/4.png",
      video: "",
    },
  ],
} as const;
