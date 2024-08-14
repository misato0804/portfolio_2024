import { Project } from "@/components/features/projectCard/type";

export const myProjects : Project[]= [
  {
    title: "my portfolio",
    image: "/sample.jpeg",
    alt: "portfolio",
    demoLink: "https://misato-tanno-2024.vercel.app/",
    githubLink: "https://github.com/misato0804/portfolio_2024",
    description: "Fully responsive my portofolio which is made with Next.js×Typescript. This is my first creation that I incprporated some animation using GSAP and Three.js shader.",
    stacks: ["Typescript", "Next.js", "Tailwind.CSS", "Three.js", "GSAP" ]
  },
  {
    title: "jobseed",
    image: "/sample.jpeg",
    alt: "job hunt organizer",
    demoLink: "https://jobseed.vercel.app/",
    githubLink: "https://github.com/keento0809/jobseed",
    description: "This is a collaborative project. The application is for all job hunters and allows users to organize and track information about companies. Once you apply to a company, you can store data such as location, schedule, URL, and more.",
    stacks: ["Typescript", "React.js", "PostgreSQL", "Express.js", "Tailwind.CSS"]
  },
  {
    title: "Snap Study",
    image: "/sample.jpeg",
    alt: "flash card application",
    demoLink: "https://snap-study.vercel.app/",
    githubLink: "https://github.com/misato0804/flash-card",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  when an unknown printer took a galley of type and scrambled it to make a type",
    stacks: ["Typescript", "Next.js", "Tailwind.CSS", "Firebase"]
  },
  {
    title: "Snap Study",
    image: "/sample.jpeg",
    alt: "web application",
    demoLink: "/",
    githubLink: "/",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  when an unknown printer took a galley of type and scrambled it to make a type",
    stacks: ["Typescript", "HTML", "Next", "CSS"]
  },
]