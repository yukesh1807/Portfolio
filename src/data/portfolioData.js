// ============================================================
// portfolioData.js — YUKESHWARAN A
// All text and links for the portfolio are controlled here.
// ============================================================

export const personalInfo = {
  name: "YUKESHWARAN A",
  firstName: "YUKESHWARAN A",
  brandName: "YUKESHWARAN A",
  title: "Java Full Stack Developer",
  location: "Trichy, India",
  phone: "+91 9025118511",
  emails: {
    primary: "yukeshwaran316@gmail.com",
    secondary: "",
  },
  summary:
    "Computer Science graduate and Java Full Stack Developer with hands-on experience in Java, SQL, web technologies, and building user-friendly web applications.",
  resumeUrl: "/yukeshwaran_a.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/yukesh1807",
  linkedin: "https://www.linkedin.com/in/yukeshwaranA",
  instagram: "https://www.instagram.com/_yukesh_18",
};

export const heroContent = {
  greeting: "Hi, I'm YUKESHWARAN A",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Building scalable, user-friendly web applications with Java, React, and modern web technologies.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:yukeshwaran316@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/yukeshwaran_a.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (rendered via dangerouslySetInnerHTML).
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">YUKESHWARAN A</span>, a passionate Java Full Stack Developer based in Trichy, India. I have a strong foundation in Core Java, SQL, HTML, CSS, JavaScript, and React.js, and I enjoy developing practical web applications and solving programming problems. My goal is to become a skilled software developer and contribute to building scalable, real-world applications — sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["Java", "React.js", "MySQL", "JavaScript"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A clear, structured approach to every software project — from idea to deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I analyse the problem, understand user needs, and study relevant technologies before writing a single line of code.",
    },
    {
      number: "02",
      title: "Design",
      text: "I plan the architecture, design the database schema, and wireframe the UI to ensure a solid foundation.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I build the application iteratively — writing clean, well-commented code for both front-end and back-end.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I test thoroughly, fix issues, and deploy the finished product, then monitor performance and gather feedback.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [{ name: "Java" }, { name: "JavaScript" }, { name: "SQL" }],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "React.js" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Core Java" },
        { name: "JDBC" },
        { name: "Java Servlets" },
      ],
    },
    {
      title: "Database",
      skills: [{ name: "MySQL" }, { name: "Oracle SQL" }],
    },
    {
      title: "Tools & IDEs",
      skills: [{ name: "GitHub" }, { name: "Eclipse" }, { name: "VS Code" }],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "OOP" },
        { name: "Database Management" },
        { name: "REST APIs" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Digital Media Committee",
    description:
      "Assisted in creating digital content and supporting social media activities for college events and campaigns.",
    role: "Committee Member",
    badge: "Media",
  },
  {
    title: "NSS (National Service Scheme)",
    description:
      "Actively participated in community service and social awareness programmes from 2023 to 2025.",
    role: "Volunteer Member",
    badge: "NSS",
  },
  {
    title: "Sports & Extracurricular",
    description:
      "Participated in Kabaddi and Silambam, developing teamwork, discipline, and competitive spirit.",
    role: "Participant",
    badge: "Sports",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Java Full Stack Development Intern",
    duration: "Ongoing",
    skills: [
      "Core Java & OOP",
      "SQL & Database Management",
      "Frontend development (HTML, CSS, JS)",
      "React.js",
      "Problem-solving",
    ],
    tech: ["Java", "MySQL", "HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    organization: "Apex Planet Software Pvt Ltd",
    role: "Web Developer Intern",
    duration: "Jun 2025 – Aug 2025",
    skills: [
      "Responsive front-end development",
      "Real-time data display",
      "Interactive UI design",
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "I break down complex challenges into manageable steps and find practical, efficient solutions.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "I examine data and situations carefully to identify patterns and make informed decisions.",
  },
  {
    name: "Adaptability",
    icon: "🔄",
    desc: "I quickly learn and apply new technologies or processes as project requirements evolve.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "I prioritise tasks effectively to meet deadlines without compromising on quality.",
  },
];

export const projects = [
  {
    id: "mindsentry",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "MindSentry – Real-Time Stress Detection",
    description:
      "An AI-powered system that detects stress levels in real time by analysing facial expressions and behavioural patterns using CNN-GRU architecture and OpenCV.",
    techTags: ["Python", "CNN-GRU", "OpenCV", "FER2013", "RAVDESS"],
    links: {
      github: "https://github.com/yukesh1807",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "job-portal",
    number: "02",
    badge: null,
    title: "Online Job Portal Application",
    description:
      "A web-based job portal that connects job seekers with employers, featuring user registration, job search, application tracking, and vacancy management.",
    techTags: ["Core Java", "MySQL", "HTML5", "CSS3", "JavaScript", "React.js"],
    links: {
      github: "https://github.com/yukesh1807",
      demo: "",
    },
    isFlagship: false,
  },
];

// Optional certificates section
export const certificates = {
  featured: [
    { name: "Java Full Stack Development", issuer: "TAP Academy", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/yukeshwaranA",
};

export const education = {
  degree: "BE. Computer Science and Engineering",
  institution: "Government College of Engineering, Bargur",
  cgpa: "2022 – 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · React · MySQL · JavaScript",
    "Available for internships & full-time roles",
  ],
  credential: "BE. Computer Science & Engineering",
  copyright: `© ${new Date().getFullYear()} YUKESHWARAN A | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

