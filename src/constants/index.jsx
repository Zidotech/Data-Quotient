import image from "./images";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

import { VscAzureDevops } from "react-icons/vsc";

export { image };

export const links = [
  {
    id: 1,
    url: "/services",
    text: "Services",
  },
  {
    id: 2,
    url: "/team",
    text: "Team",
  },
  {
    id: 3,
    url: "/ydq",
    text: "Why DQ",
  },
];

export const links1 = [
  {
    id: 1,
    url: "/careers",
    text: "Careers",
  },
  {
    id: 2,
    url: "/contact",
    text: "Contact",
  },
];

export const serviceCard = [
  {
    id: 1,
    title: "Expert Consulting",
    icon: image.consult,
    description:
      " Solving your problems or improving your product with the help of subject matter experts ",
    more: " LEARN MORE ",
    url: "",
  },
  {
    id: 2,
    title: "End-to-End Development",
    icon: image.end,
    description:
      "   Full development team taking your project all the way from discovery to deployment ",
    more: " LEARN MORE ",
    url: "",
  },
  {
    id: 3,
    title: "Training",
    icon: image.team,
    description:
      " If you’re short on tech specialists, missing deadlines, or going over budget—we’re here for you. ",
    more: " LEARN MORE ",
    url: "",
  },
];

export const numbers = [
  {
    id: 1,
    title: "18 years",
    span: "of market experience",
  },
  {
    id: 2,
    title: "300+",
    span: "clients served",
  },
  {
    id: 3,
    title: "3.5+ years",
    span: "average partnership",
  },
];

export const numbers2 = [
  {
    id: 1,
    title: "500+",
    span: "professionals on board",
  },
  {
    id: 2,
    title: "6.5 years",
    span: "average experience of our Python developers",
  },
  {
    id: 3,
    title: "350+",
    span: "developers",
  },
];

export const client = [
  {
    id: 1,
    icon: image.tech,
  },
  {
    id: 2,
    icon: image.forbes,
  },
];

export const client1 = [
  {
    id: 1,
    icon: image.telegraph,
  },
  {
    id: 2,
    icon: image.fortune,
  },
];

export const client2 = [
  {
    id: 5,
    icon: image.sunday,
  },
];

export const hiring = [
  {
    id: 1,
    icon: image.room,
    title:
      "Onboard an exclusive team for your project: one team, one room, one client—full focus",
    text: "We believe teams work best when they’re single-tasking. And you can always visit our offices and meet your team in person.",
  },
  {
    id: 2,
    icon: image.framework,
    title: "Get the tech stack you need, not the tech stack we like",
    text: "We’ll use the exact tools and frameworks your project requires without forcing our favorites.",
  },
  {
    id: 3,
    icon: image.perfect,
    title: "Scale up and down easily with a tech partner that cares",
    text: "We’re large enough to support ambitious projects, yet small enough to still care about personal relationships.",
  },
  {
    id: 4,
    icon: image.speak,
    title: "Ridiculously easy cooperation",
    text: "We’ll help you clarify and prioritize features, we report on progress constantly, and we speak flawless English.",
  },
];

export const footers = [
  {
    title: "Expert Consulting",
    links: [
      {
        name: "DevOps",
        url: "",
      },
      {
        name: "SecOps",
        url: "",
      },
      {
        name: "DevSecOps",
        url: "",
      },
      {
        name: "Cloud Solutions",
        url: "",
      },
      {
        name: "Machine Learning",
        url: "",
      },
      {
        name: "Data Engineering",
        url: "",
      },
      {
        name: "Data Analysis",
        url: "",
      },
      {
        name: "IT manage Services",
        url: "",
      },
      {
        name: "Team Extension",
        url: "",
      },
    ],
  },
  {
    title: "End-to-End Development",
    links: [
      {
        name: "Discovery workshops",
        url: "",
      },
      {
        name: "System Analysis",
        url: "",
      },
      {
        name: "Mobile Development",
        url: "",
      },
      {
        name: "Web Development",
        url: "",
      },
      {
        name: "API Development",
        url: "",
      },
      {
        name: "Quality Assurance and Testing",
        url: "",
      },
    ],
  },
  {
    title: "Training",
    links: [
      {
        name: "Corporate Trainings",
        url: "",
      },
      {
        name: "Hands-on training",
        url: "",
      },
      {
        name: "Coaching or mentoring",
        url: "",
      },
    ],
  },
];

export const socials = [
  {
    id: 1,
    icon: <BiLogoLinkedin />,
    url: "https://linkedin.com/company/data-quotient-hq",
  },
  {
    id: 2,
    icon: <BiLogoTwitter />,
    url: "https://twitter.com/_dataquotient",
  },
  {
    id: 3,
    icon: <BiLogoFacebook />,
    url: "https://facebook.com/dataquotient",
  },
  {
    id: 4,
    icon: <BiLogoYoutube />,
    url: "https://www.youtube.com/channel/UCgJ9NVI6Y92gzuE6YW7EubQ ",
  },
];

export const training = [
  {
    id: 1,
    icon: image.js,
    title: "Corporate Trainings",
    url: "",
  },
  {
    id: 2,
    icon: image.react,
    title: "Hands-on training",
    url: "",
  },
  {
    id: 3,
    icon: image.devOps,
    title: "Coaching or mentoring",
    url: "",
  },
];

export const end = [
  {
    id: 1,
    icon: image.js,
    title: "Javascript",
    url: "",
  },
  {
    id: 2,
    icon: image.react,
    title: "Java",
    url: "",
  },
  {
    id: 3,
    icon: image.devOps,
    title: "DevOps",
    url: "",
  },
  {
    id: 4,
    icon: image.product,
    title: "SecOps",
    url: "",
  },
  {
    id: 5,
    icon: image.python,
    title: "Python",
    url: "",
  },
  {
    id: 6,
    icon: image.devOps,
    title: "DevSecOps",
    url: "",
  },
  {
    id: 7,
    icon: image.product,
    title: "Discovery workshops ",
    url: "",
  },
  {
    id: 8,
    icon: image.python,
    title: "System Architect ",
    url: "",
  },
  {
    id: 9,
    icon: image.python,
    title: "Mobile Development",
    url: "",
  },
  {
    id: 10,
    icon: image.devOps,
    title: "Web Development",
    url: "",
  },
  {
    id: 11,
    icon: image.product,
    title: "API Development",
    url: "",
  },
  {
    id: 12,
    icon: image.python,
    title: "Quality Assurance and Testing",
    url: "",
  },
];

export const expertConsultCard = [
  {
    id: 1,
    title: "Machine Learning",
    icon: image.machine,
    description:
      " Unlock new possibilities, boost productivity, and automate your business processes. Regardless of what industry you operate in, our machine learning solutions can help you achieve higher levels of efficiency and keep ahead of your competition. ",
    more: "LEARN MORE",
    url: "",
  },
  {
    id: 2,
    title: "Cloud Solutions",
    icon: image.products,
    description:
      " A lot of day-to-day development separates your initial vision from the finished product. Using the lessons we’ve learned working on similar projects in your business vertical, we’ll come up with a high-level plan to achieve your goals. ",
    more: " CONTACT US",
    url: "",
  },
  {
    id: 3,
    title: "Data Engineering",
    icon: image.fintech,
    description:
      " The financial industry often struggles with challenges such as quantitative problem-solving for pricing or risk and trade management. We’ll look at analytics, compliance, and regulation to come up with the best solutions tailored to your fintech business. ",
    more: " LEARN MORE ",
    url: "",
  },
  {
    id: 4,
    title: "Data Analysis",
    icon: image.machine,
    description:
      " Unlock new possibilities, boost productivity, and automate your business processes. Regardless of what industry you operate in, our machine learning solutions can help you achieve higher levels of efficiency and keep ahead of your competition. ",
    more: "LEARN MORE",
    url: "",
  },
  {
    id: 5,
    title: "IT manage Services",
    icon: image.products,
    description:
      " A lot of day-to-day development separates your initial vision from the finished product. Using the lessons we’ve learned working on similar projects in your business vertical, we’ll come up with a high-level plan to achieve your goals. ",
    more: " CONTACT US",
    url: "",
  },
  {
    id: 6,
    title: "Team Extension",
    icon: image.fintech,
    description:
      " The financial industry often struggles with challenges such as quantitative problem-solving for pricing or risk and trade management. We’ll look at analytics, compliance, and regulation to come up with the best solutions tailored to your fintech business. ",
    more: " LEARN MORE ",
    url: "",
  },
];
