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
    url: "/why_dq",
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
        url: "/devops",
      },
      {
        name: "SecOps",
        url: "/sec-ops",
      },
      {
        name: "DevSecOps",
        url: "/dev-sec-ops",
      },
      {
        name: "Cloud Solutions",
        url: "/cloud-solutions",
      },
      {
        name: "Machine Learning",
        url: "/machine-learning",
      },
      {
        name: "Data Engineering",
        url: "/data-engineering",
      },
      {
        name: "Data Analysis",
        url: "/data-analysis",
      },
      {
        name: "IT manage Services",
        url: "/IT-manage-services",
      },
      {
        name: "Team Extension",
        url: "/team-extension",
      },
    ],
  },
  {
    title: "End-to-End Development",
    links: [
      {
        name: "Discovery workshops",
        url: "/discovery-workshops",
      },
      {
        name: "System Analysis",
        url: "/system-analysis",
      },
      {
        name: "Mobile Development",
        url: "/mobile-development",
      },
      {
        name: "Web Development",
        url: "/web-development",
      },
      {
        name: "API Development",
        url: "/api-development",
      },
      {
        name: "Quality Assurance and Testing",
        url: "/quality-assurance-and-testing",
      },
    ],
  },
  {
    title: "Training",
    links: [
      {
        name: "Corporate Trainings",
        url: "/corporate-trainings",
      },
      {
        name: "Hands-on training",
        url: "/hands-on-training",
      },
      {
        name: "Coaching or mentoring",
        url: "/coaching-or-mentoring",
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
    url: "/corporate-trainings",
  },
  {
    id: 2,
    icon: image.react,
    title: "Hands-on training",
    url: "/hands-on-training",
  },
  {
    id: 3,
    icon: image.devOps,
    title: "Coaching or mentoring",
    url: "/coaching-or-mentoring",
  },
];

export const end = [
  {
    id: 1,
    icon: image.js,
    title: "Javascript",
    url: "/javascript",
  },
  {
    id: 2,
    icon: image.react,
    title: "Java",
    url: "/java",
  },
  {
    id: 3,
    icon: image.devOps,
    title: "DevOps",
    url: "/devops",
  },
  {
    id: 4,
    icon: image.product,
    title: "SecOps",
    url: "/sec-ops",
  },
  {
    id: 5,
    icon: image.python,
    title: "Python",
    url: "/python",
  },
  {
    id: 6,
    icon: image.devOps,
    title: "DevSecOps",
    url: "/dev-sec-o",
  },
  {
    id: 7,
    icon: image.product,
    title: "Discovery workshops ",
    url: "/discovery-workshops",
  },
  {
    id: 8,
    icon: image.python,
    title: "System Architect ",
    url: "/system-architect",
  },
  {
    id: 9,
    icon: image.python,
    title: "Mobile Development",
    url: "/mobile-development",
  },
  {
    id: 10,
    icon: image.devOps,
    title: "Web Development",
    url: "/web-development",
  },
  {
    id: 11,
    icon: image.product,
    title: "API Development",
    url: "/api-development",
  },
  {
    id: 12,
    icon: image.python,
    title: "Quality Assurance and Testing",
    url: "/quality-assurance-and-testing",
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
    url: "/machine-learning",
  },
  {
    id: 2,
    title: "Cloud Solutions",
    icon: image.products,
    description:
      " A lot of day-to-day development separates your initial vision from the finished product. Using the lessons we’ve learned working on similar projects in your business vertical, we’ll come up with a high-level plan to achieve your goals. ",
    more: " CONTACT US",
    url: "/cloud-solutions",
  },
  {
    id: 3,
    title: "Data Engineering",
    icon: image.fintech,
    description:
      " The financial industry often struggles with challenges such as quantitative problem-solving for pricing or risk and trade management. We’ll look at analytics, compliance, and regulation to come up with the best solutions tailored to your fintech business. ",
    more: " LEARN MORE ",
    url: "/data-engineering",
  },
  {
    id: 4,
    title: "Data Analysis",
    icon: image.machine,
    description:
      " Unlock new possibilities, boost productivity, and automate your business processes. Regardless of what industry you operate in, our machine learning solutions can help you achieve higher levels of efficiency and keep ahead of your competition. ",
    more: "LEARN MORE",
    url: "/data-analysis",
  },
  {
    id: 5,
    title: "IT manage Services",
    icon: image.products,
    description:
      " A lot of day-to-day development separates your initial vision from the finished product. Using the lessons we’ve learned working on similar projects in your business vertical, we’ll come up with a high-level plan to achieve your goals. ",
    more: " CONTACT US",
    url: "/IT-manage-services",
  },
  {
    id: 6,
    title: "Team Extension",
    icon: image.fintech,
    description:
      " The financial industry often struggles with challenges such as quantitative problem-solving for pricing or risk and trade management. We’ll look at analytics, compliance, and regulation to come up with the best solutions tailored to your fintech business. ",
    more: " LEARN MORE ",
    url: "/team-extension",
  },
];

export const webDevStack = [
  {
    id: 1,
    icon: image.snowflake,
    title: "SnowFlake",
  },
  {
    id: 2,
    icon: image.storm,
    title: "Storm",
  },
  {
    id: 3,
    icon: image.powerBI,
    title: "PowerBI",
  },
  {
    id: 4,
    icon: image.oracle,
    title: "oracle",
  },
  {
    id: 5,
    icon: image.mongoDB,
    title: "mongoDB",
  },
  {
    id: 6,
    icon: image.aws,
    title: "aws",
  },
  {
    id: 7,
    icon: image.airflow,
    title: "airflow",
  },
  {
    id: 8,
    icon: image.azure,
    title: "azure",
  },
  {
    id: 9,
    icon: image.bigQuery,
    title: "bigQuery",
  },
  {
    id: 10,
    icon: image.dataBrick,
    title: "dataBrick",
  },
  {
    id: 11,
    icon: image.dataFlow,
    title: "dataFlow",
  },
  {
    id: 12,
    icon: image.flink,
    title: "flink",
  },
  {
    id: 13,
    icon: image.gcp,
    title: "gcp",
  },
  {
    id: 14,
    icon: image.hadoop,
    title: "hadoop",
  },
  {
    id: 15,
    icon: image.hive,
    title: "hive",
  },
  {
    id: 16,
    icon: image.hBase,
    title: "hBase",
  },
  {
    id: 17,
    icon: image.kafka,
    title: "kafka",
  },
  {
    id: 18,
    icon: image.kinesis,
    title: "kinesis",
  },
  {
    id: 19,
    icon: image.mySql,
    title: "mySql",
  },
  {
    id: 20,
    icon: image.postGreSql,
    title: "postGreSql",
  },
  {
    id: 21,
    icon: image.presto,
    title: "presto",
  },
  {
    id: 22,
    icon: image.pySpark,
    title: "pySpark",
  },
  {
    id: 23,
    icon: image.redShift,
    title: "redShift",
  },
];

export const valuesCard = [
  {
    id: 1,
    icon: image.room,
    title: "Continuous Improvement",
    text: "We foster a feedback culture both within the organization and when working with our partners. Using Agile and Scrum, we implement feedback early and often. We also keep adding new offices, new roles, new services, new technologies, and new partnerships to the STX Next roster.",
  },
  {
    id: 2,
    icon: image.framework,
    title: "Team Power",
    text: "The best collaboration happens when one team can work on one project, fully focused. We have made teams the most important unit of the STX Next structure, and we have a dedicated budget for teams to go on workstations and integration events.",
  },
  {
    id: 3,
    icon: image.perfect,
    title: "Win-Win",
    text: "In any situation where we need to establish clear rules and expectations, we expect a win-win deal or no deal at all. We follow this value when negotiating contracts, starting new partnerships, or considering changes at the company.",
  },
  {
    id: 4,
    icon: image.speak,
    title: "Software Craftsmanship",
    text: "The code we deliver should be not only functional, but well-crafted. To ensure this, we set high recruitment standards, we keep refining the ways we work, and we serve as teachers for the community.",
  },
];

export const expert_faqs = [
  {
    id: 1,
    question: "Cloud Solutions",
    answer: " Harness the power of the cloud to scale and innovate.",
  },
  {
    id: 2,
    question: "Machine Learning",
    answer: "Leverage data-driven insights with cutting-edge ML technologies.",
  },
  {
    id: 3,
    question: "Data Engineering",
    answer: "Build robust data pipelines for efficient data processing.",
  },
  {
    id: 4,
    question: " Team Extension",
    answer: "Augment your in-house team with our skilled professionals.",
  },
  {
    id: 5,
    question: "IT Managed Services",
    answer: "Ensure seamless operations with our comprehensive IT support.",
  },
  {
    id: 6,
    question: " Data Analysis",
    answer: "Transform raw data into actionable insights.",
  },
];

export const end_faqs = [
  {
    id: 1,
    question: "Java, JavaScript, Python",
    answer: "Expertise in the most versatile programming languages.",
  },
  {
    id: 2,
    question: "DevOps, SecOps, DevSecOps",
    answer: "Ensuring efficiency, security, and compliance.",
  },
  {
    id: 3,
    question: "Discovery Workshops",
    answer: "Crafting a blueprint for your project's success.",
  },
  {
    id: 4,
    question: " System Architecture",
    answer: " Designing scalable and future-proof systems.",
  },
  {
    id: 5,
    question: "Mobile Development",
    answer: "Creating user-friendly, cross-platform mobile apps.",
  },
  {
    id: 6,
    question: " Quality Assurance and Testing",
    answer: "  Ensuring the highest standards of quality.",
  },
  {
    id: 7,
    question: "API Development",
    answer: "Building robust APIs for seamless integration.",
  },
  {
    id: 8,
    question: " Web Development",
    answer: " Crafting visually appealing and responsive websites.",
  },
];

export const training_faqs = [
  {
    id: 1,
    question: "Corporate Trainings",
    answer: " Customized training programs to upskill your workforce.",
  },
  {
    id: 2,
    question: "Hands-on Training",
    answer: "Practical learning experiences to enhance proficiency.",
  },
  {
    id: 3,
    question: "Coaching and Mentoring",
    answer: "Personalized guidance for professional growth.",
  },
];
