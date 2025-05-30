import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  rotta,
  motorelement,
  pauseandplay,
  casiomusic,
  spinbet,
  maltaguns,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "WordPress Developer",
    icon: web,
  },
  {
    title: "Shopify Developer",
    icon: mobile,
  },
  {
    title: "Project Manager",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Rotta",
    description:
      "Powered by WordPress and Gutenberg, the platform features various functionalities: WooCommerce for e-commerce, a bustling marketplace, a comprehensive directory using the Formidable Views plugin, and dynamic blog and events pages. Their mission extends beyond mere preservation, seeking to ignite passion for automotive culture among a broader audience.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "acfpro",
        color: "pink-text-gradient",
      },
      {
        name: "formidable",
        color: "orange-text-gradient",
      },
    ],
    image: rotta,
    website_link: "https://rotta.mt/",
  },
  {
    name: "Motor Element",
    description:
      "Motor Element Ltd is an online shop where customers can order custom apparel and prints and other merchandise for car enthusiasts. I own and manage it, with a main focus on customers in the US, Canada, and Australia. I created the store using Shopify, starting with a free theme and then tweaking the layout and design to fit my vision using Shopify's tools.",
    tags: [
      {
        name: "shopify",
        color: "blue-text-gradient",
      },
      {
        name: "liquid",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: motorelement,
    website_link: "https://www.motorelement.com/",
  },
  {
    name: "Pause & Play Festival",
    description:
      "Pause & Play Festival is a three-day festival celebrating creativity and play. Designed with React 18 + TypeScript using Vite, and styled with Tailwind CSS, it's deployed on Vercel. Features include event listings, team profiles, contact forms via EmailJS, festival info, FAQ, and partner showcases. It uses React Router for smooth navigation and a modern, responsive, component-based design that captures the festival's vibrant spirit and fosters connections between artists and audiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "emailjs",
        color: "orange-text-gradient",
      },
    ],
    image: pauseandplay,
    website_link: "https://www.pauseandplay.mt/",
    github_link: "https://github.com/mikegauci/pauseandplaymt",
  },
  {
    name: "Casio Music",
    description:
      "This site was built with WordPress, using the Astra theme, ACF Pro, and WooCommerce. The design was provided by the client via Figma, who owns Casio Music Middle East and Africa. I was referred to this client by another client I had previously worked with. The client wanted to revamp the site to showcase products, feature video tutorials, and help customers find nearby stores to purchase from.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "acfpro",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "orange-text-gradient",
      },
    ],
    image: casiomusic,
    website_link: "https://casiomusic-mea.com/",
  },
  {
    name: "Spinbet",
    description:
      "I was contracted for three years as a Senior Frontend Developer for SpinBet, an online casino and sports betting platform for the New Zealand and Canadian markets. SpinBet was built with Next.js 14, TypeScript, React 18, Chakra UI/Material-UI, Recoil, i18next, and PWA features. It uses Sentry for monitoring, Pusher for real-time updates, and Jest for testing. My work focused on improving features, ensuring performance and scalability, mentoring colleagues, conducting code reviews, and fostering a collaborative, technically excellent environment.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
      {
        name: "recoil",
        color: "orange-text-gradient",
      },
    ],
    image: spinbet,
    website_link: "https://www.spinbet.com/",
  },
  {
    name: "Malta Guns",
    description:
      "A personal project I'm continuously working on with a friend in our spare time, MaltaGuns is built with Next.js 13 and TypeScript. It uses Supabase for database and authentication, Tailwind CSS + shadcn/ui for styling, and Stripe for payments. Features include user authentication, an admin panel, a blog system, events management, a marketplace, an establishments directory, and rich text editing with TipTap. It leverages modern React architecture and robust form validation.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
    ],
    image: maltaguns,
    website_link: "https://maltaguns-app.vercel.app/",
    github_link: "https://github.com/mikegauci/maltaguns-app",
  },
];

export { services, technologies, experiences, testimonials, projects };