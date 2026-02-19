/**
 * ==========================================
 *  PORTFOLIO DATA CONFIGURATION
 * ==========================================
 *
 *  Edit this file to update your portfolio.
 *  No need to touch HTML or CSS!
 *
 *  After editing, just refresh the browser
 *  (or redeploy to Firebase).
 * ==========================================
 */

const PORTFOLIO_DATA = {
  // ── Personal Info ──────────────────────────
  personal: {
    firstName: "Rohit",
    lastName: "Sahu",
    title: "Frontend Developer",
    resumeUrl:
      "https://1drv.ms/b/c/a9cba01e5b8747cc/EV_qiqhmD_hDtievj-VX3jYBtygLQXGeo6-znp0op496oA?e=b21uQH",
    portraitImage: "img/rohit.webp",
    email: "irohitsahu97@gmail.com",
    phone: "+919399652548",
    phoneDisplay: "+91-9399652548",
  },

  // ── Welcome Section Typing Messages ────────
  // These appear one by one with a typewriter effect
  welcomeMessages: [
    "Hey there!👋",
    "I'm Rohit Sahu",
    "A Full-Stack Developer crafting complete digital experiences from intuitive frontends to powerful backends.",
    "Welcome to my portfolio! 🚀✨",
  ],

  // ── Social Links ───────────────────────────
  // Used in the hero section, contact section, etc.
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/irohitsahu/",
      icon: "icon/linkedin-outline.svg",
    },
    {
      name: "GitHub",
      url: "https://github.com/irohitsahu/",
      icon: "icon/github-outline.svg",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+919399652548",
      icon: "icon/whatsapp-outline.svg",
    },
    {
      name: "Email",
      url: "mailto:irohitsahu97@gmail.com",
      icon: "icon/email-outline.svg",
    },
  ],

  // ── Tech Skills Marquee ────────────────────
  // These scroll across the bottom of the hero section
  skills: [
    { name: "ReactJS", icon: "icon/react.svg" },
    { name: "NextJS", icon: "icon/nextjs.svg" },
    { name: "JavaScript", icon: "icon/javascript.svg" },
    { name: "TypeScript", icon: "icon/typescript.svg" },
    { name: "HTML", icon: "icon/html_5.svg" },
    { name: "CSS", icon: "icon/css_3.svg" },
    { name: "SCSS/SASS/LESS", icon: "icon/sass.svg" },
    { name: "Context API", icon: "icon/react.svg" },
    { name: "Redux", icon: "icon/redux.svg" },
    { name: "React Router DOM", icon: "icon/react-router.svg" },
    { name: "Next.JS Router", icon: "icon/nextjs.svg" },
    { name: "Vite", icon: "icon/vite.svg" },
    { name: "Git", icon: "icon/git.svg" },
    { name: "Github", icon: "icon/github.svg" },
    { name: "Bit Bucket", icon: "icon/bitbucket.svg" },
    { name: "Jira", icon: "icon/jira.svg" },
    { name: "Tailwind", icon: "icon/tailwind.svg" },
    { name: "Styled Components", icon: "icon/styled.svg" },
    { name: "ShadeCN", icon: "icon/shadecn.svg" },
    { name: "Material UI", icon: "icon/material_ui.svg" },
    { name: "AntDesign", icon: "icon/ant-design.svg" },
    { name: "Bootstrap", icon: "icon/bootstrap.svg" },
  ],

  // ── Projects ───────────────────────────────
  projects: [
    {
      title: "Portfolio Website",
      date: "Jan 2022",
      techStack: "HTML, CSS, JavaScript",
      description:
        "Developed portfolio website to showcase my skills and projects.",
      github: "https://github.com/irohitsahu/portfolio-website",
      live: "https://rohit-sahu-portfolio.web.app/",
    },
    {
      title: "TabEz - Newtab Browser Extension",
      date: "November 2024",
      techStack:
        "WXT Framework, Vite, ReactJS, Styled Components, Tailwind, Typescript",
      description:
        "Developed a browser extension that enhances the new tab with utilities like a to-do list, calculator, speed checker and more.",
      github: "https://github.com/irohitsahu/TabEz",
      live: "https://chromewebstore.google.com/detail/ezfy-tabez/jakbilhbogpgecanaofgfkicbfkedmkd",
    },
    {
      title: "ZeMart",
      date: "June 2024",
      techStack: "NextJS, Shadecn, Redux, NodeJS, ExpressJs",
      description:
        "Building a Web3 platform where users can buy or sell NFTs, digital products, and cryptothemed clothing.",
      github: "https://github.com/irohitsahu/ze-mart",
      live: null,
    },
    {
      title: "Hire Path",
      date: "June 2023",
      techStack: "Vite, ReactJS, MaterialUI, React-Router-Dom, Redux",
      description:
        "Working on a hiring platform with 10+ features for job postings, applications, and candidate tracking, streamlining the hiring process.",
      github: "https://github.com/irohitsahu/hire-path",
      live: null,
    },
    {
      title: "Sell In Seconds",
      date: "Aug 2024",
      techStack: "Vite, Next, Redux, Tailwind, ShadeCN",
      description:
        "Building a platform where users can list items for sale or post demand, with the ability to bid on listed items, making it easy to view and respond to offers.",
      github: "https://github.com/irohitsahu/SellInSeconds",
      live: null,
    },
    {
      title: "OpenAI Image Generator",
      date: "June 2024",
      techStack:
        "Vite, ReactJS, TypeScript, Tailwind, RapidAPI - OpenAI-DALL-E3",
      description:
        "Created an image generator leveraging OpenAI's API to produce custom images based on user inputs.",
      github: "https://github.com/irohitsahu/openai-text-to-image",
      live: null,
    },
  ],

  // ── About Me Bio ───────────────────────────
  aboutBio:
    "As a skilled software developer with expertise in JavaScript and web technologies. I am deeply committed to web performance, accessibility, and enhancing user experiences. I follow a digital minimalism mindset, using technology to improve people's lives and provide value for businesses. In my free time, I build side projects and like exploring new technologies. You can see some of my work in the projects section. I'm open to collaboration opportunities where I can contribute, learn and grow. Don't hesitate to reach out if you think my skills and experience are a good fit for your next project.",

  // ── Career Tagline (shown below "My Career") ──
  careerTagline:
    "With a year of experience, I've honed my skills in crafting delightful interfaces and writing clean, efficient code.",

  // ── Professional Experience ────────────────
  experience: [
    {
      role: "Frontend Developer",
      duration: "Jan 2023 - Sept 2024",
      company: "Globussoft Technologies, Bhilai",
    },
    {
      role: "Sr Frontend Developer",
      duration: "Sept 2024 - March 2025",
      company: "Phoneo.in, Bhilai",
    },
    {
      role: "Software Developer",
      duration: "March 2025 - Present",
      company: "Riverhouse Technologies, Bhilai",
    },
  ],

  // ── Technical Skills (About Section) ───────
  technicalSkills: [
    {
      category: "Libraries and Frameworks",
      items: "ReactJS | NextJS",
    },
    {
      category: "Languages",
      items: "JavaScript | TypeScript | HTML | CSS | SCSS/SASS/LESS",
    },
    {
      category: "State Management",
      items: "Context API | Redux",
    },
    {
      category: "Routing",
      items: "React Router Dom | Next.js Router",
    },
    {
      category: "Build Tools",
      items: "Vite",
    },
    {
      category: "Version Control",
      items: "Git | Bit Bucket",
    },
    {
      category: "Task Management",
      items: "Jira",
    },
    {
      category: "Styling Frameworks",
      items:
        "Tailwind | Styled Components | ShadeCN | MaterialUI | AntDesign | Bootstrap",
    },
  ],

  // ── Education ──────────────────────────────
  education: [
    {
      period: "AUGUST 2022 – MARCH 2023",
      detail:
        "Post Graduation Diploma in Advance Computing | Centre for Development of Advanced Computing | Electronic City, Bangalore | 72%",
    },
    {
      period: "AUGUST 2015 – MAY 2019",
      detail:
        "B.Tech in Mechanical Engineering | Bhilai Institute of Technology | Durg, Chhattisgarh | 66%",
    },
  ],

  // ── Contact Form (Web3Forms) ───────────────
  contactForm: {
    accessKey: "4b94d08b-901f-4837-bf4b-2b8496cabc74",
  },
};
