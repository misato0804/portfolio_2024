import { Project } from "@/components/features/projectCard/type";

export const myProjects : Project[]= [
  {
    title: "my portfolio",
    image: "/portfolio.jpg",
    alt: "portfolio",
    demoLink: "https://misato-tanno-2024.vercel.app/",
    githubLink: "https://github.com/misato0804/portfolio_2024",
    description: "Fully responsive my portofolio which is made with Next.js×Typescript. This is my first creation that I incprporated some animation using GSAP and Three.js shader.",
    stacks: ["Typescript", "Next14", "Tailwind.CSS", "Three.js", "GSAP" ]
  },
  {
    title: "jobseed",
    image: "/jobseed.jpg",
    alt: "job hunt organizer",
    demoLink: "https://jobseed.vercel.app/",
    githubLink: "https://github.com/keento0809/jobseed",
    description: "This is a collaborative project. The application is for all job hunters and allows users to organize and track information about companies. Once you apply to a company, you can store data such as location, schedule, URL, and more.",
    stacks: ["Typescript", "React.js", "PostgreSQL", "Express.js", "Tailwind.CSS"]
  },
  {
    title: "Snap Study",
    image: "/snapstudy.jpg",
    alt: "flash card application",
    demoLink: "https://snap-study.vercel.app/",
    githubLink: "https://github.com/misato0804/flash-card",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  when an unknown printer took a galley of type and scrambled it to make a type",
    stacks: ["Typescript", "Next14", "Tailwind.CSS", "Firebase"]
  },
  {
    title: "tourlist",
    image: "/tourlist.jpg",
    alt: "web application",
    demoLink: "https://tourlist.vercel.app/",
    githubLink: "https://github.com/misato0804/tourlist",
    description: "If you have any plans to visit Japan, specifically Tokyo, Osaka, and Kyoto, this is perfect for you. Also this project helped me understand the differences between SSR and SSG.",
    stacks: ["Typescript", "Next13", "GraphQL", "Hygraph CMS"]
  },
  {
    title: "P plane",
    image: "/pplane.jpg",
    alt: "web application",
    demoLink: "https://vanstage-next-one.vercel.app/",
    githubLink: "https://github.com/keento0809/vanstage-next",
    description: "I was in carge of building top page and abut page as a frontend developer. This application helps newcomers to Vancouver, especially those in the tech field, find a mentor. And you can find a mentor who matches your schedule, categories, and budget.",
    stacks: ["Typescript", "Next13", "GraphQL"]
  },
  {
    title: "weather forecast",
    image: "/weatherapp.jpg",
    alt: "web application",
    demoLink: "https://likuor.github.io/midterm-wheather-app/",
    githubLink: "https://github.com/likuor/midterm-wheather-app?tab=readme-ov-file",
    description: "If you have any plans to visit Japan, specifically Tokyo, Osaka, and Kyoto, this is perfect for you. Also this project helped me understand the differences between SSR and SSG.",
    stacks: ["HTML", "CSS", "Javascript"]
  },
]