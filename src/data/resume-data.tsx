import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Thomas Mitchelmore",
  initials: "TM",
  location: "Southampton, UK",
  locationLink: "https://maps.app.goo.gl/SnxzMQ3YoVHNezgNA",
  about:
    "Co-Founder at Novatura",
  summary:
    "Co-Founder at Novatura, a forward-thinking startup producing innovative web-based solutions for business problems. I hold a BSc Computer Science degree from the University of Southampton (2:1) and have a wealth of experience, both in corporate settings and freelance: full-stack web development (~5 years), web design (~2 years) and CI/CD pipelines (~1 year).",
  avatarUrl: "https://avatars.githubusercontent.com/u/19690833?v=4",
  personalWebsiteUrl: "https://mitchelmore.dev",
  contact: {
    email: "hello@mitchelmore.dev",
    tel: "+447920743552",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tommitchelmore",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tommitchelmore/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Southampton",
      degree: "BSc. Computer Science (2:1)",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Novatura",
      link: "https://novatura.co",
      badges: ["Remote"],
      title: "Co-Founder",
      start: "2023",
      end: "2024",
      description:
        "Launched startup web consultancy focussed on innovative web solutions for business problems. 7 projects delivered in 6 months. My role is predominantly design and front-end development, but I'm also involved in backend development and DevOps.",
    },
    {
      company: "Iceline Hosting",
      link: "https://iceline-hosting.com",
      badges: ["Remote"],
      title: "Technical Project Manager",
      start: "2022",
      end: "2024",
      description:
        "Technical role focussed on managing the development of new products and services. I delivered a new, 300 page, NextJS website, and have since been working on the design and frontend of a new infrastructure solution while overseeing a team of backend developers.",
    },
    {
      company: "University of Southampton",
      link: "https://southampton.ac.uk",
      badges: [],
      title: "Summer Research Associate (Internship)",
      start: "2022",
      end: "2022",
      description:
        "Created a mobile web application to assist a research project at the University of Southampton. Implemented an effective, intuitive and accessible map labelling tool to collect data from participants.",
    },
    {
      company: "Iceline Hosting",
      link: "https://iceline-hosting.com",
      badges: ["Remote"],
      title: "Software Engineer (Web)",
      start: "2021",
      end: "2022",
      description:
        "Worked on various projects, including a new website, an infrastructure control panel and several other internal tools.",
    },
    {
      company: "Freelance",
      link: "https://mitchelmore.dev",
      badges: [],
      title: "Web Developer",
      start: "2018",
      end: "2022",
      description:
        "Various freelance projects for clients, including static websites and WordPress themes."
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.JS",
    "Laravel",
    "SQL",
    "UI/UX Design",
    "DevOps",
  ],
}
