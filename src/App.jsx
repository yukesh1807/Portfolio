import { useState } from 'react';
import {
  personalInfo,
  socialLinks,
  heroContent,
  aboutContent,
  technicalSkills,
  projects,
  internshipsList,
  leadershipList,
  softSkillsList,
  certificates,
  education,
  footerContent,
} from './data/portfolioData';
import profileImage from './assets/about/profile.png';

const navigation = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'],
  ['Projects', 'projects'], ['Experience', 'experience'],
  ['Education', 'education'], ['Contact', 'contact'],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-wrap container" aria-label="Main navigation">
        <a className="brand" href="#home">{personalInfo.name}<span>.</span></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href={`mailto:${personalInfo.emails.primary}?subject=Hiring%20Inquiry`}>Hire Me</a>
        </div>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="availability"><i></i> Open to opportunities</span>
          <p className="hero-greeting">Hello, I'm</p>
          <h1>{personalInfo.name}<span>.</span></h1>
          <h2>{personalInfo.title}</h2>
          <p className="hero-description">{heroContent.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span>↗</span></a>
            <a className="button button-outline" href="/resume.pdf" download>Download resume <span>↓</span></a>
          </div>
          <div className="hero-socials"><a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><span>{personalInfo.location}</span></div>
        </div>
        <div className="hero-visual"><div className="portrait-ring"><img src={profileImage} alt={`${personalInfo.name} portrait`} /></div><div className="floating-card"><strong>Java · React · MySQL</strong><span>Building useful digital experiences</span></div><div className="orbit orbit-a"></div><div className="orbit orbit-b"></div></div>
      </div>
      <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
    </section>
  );
}

function About() {
  return <section className="section section-light" id="about"><div className="container about-grid"><div><SectionHeading eyebrow="A LITTLE ABOUT ME" title="Turning ideas into practical solutions." /><p className="about-copy">{personalInfo.summary}</p><p className="about-copy">I enjoy understanding problems, designing clear solutions, and developing web applications with a focus on usability, maintainability, and continuous learning.</p><a className="text-link" href={`mailto:${personalInfo.emails.primary}`}>Let's connect <span>↗</span></a></div><div className="about-panel"><div className="panel-mark">{personalInfo.name.split(' ').map(x => x[0]).join('')}</div><h3>My approach</h3><p>Learn continuously. Build thoughtfully. Improve every day.</p><div className="stack-tags">{aboutContent.techStack.map(item => <span key={item}>{item}</span>)}</div></div></div></section>;
}

function Skills() {
  return <section className="section section-tinted" id="skills"><div className="container"><SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies" description="The tools and concepts I use to build full-stack applications."/><div className="skill-grid">{technicalSkills.categories.map(group => <article className="skill-card" key={group.title}><h3>{group.title}</h3><div className="skill-tags">{group.skills.map(skill => <span key={skill.name}>{skill.name}</span>)}</div></article>)}</div><div className="soft-skills"><h3>Professional strengths</h3><div className="soft-grid">{softSkillsList.map(skill => <div className="soft-item" key={skill.name}><span>{skill.icon}</span><div><strong>{skill.name}</strong><p>{skill.desc}</p></div></div>)}</div></div></div></section>;
}

function Projects() {
  return <section className="section section-light" id="projects"><div className="container"><SectionHeading eyebrow="SELECTED WORK" title="Projects that put skills into practice" description="A selection of applications and technical work."/><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.id}><div className="project-topline"><span>PROJECT / 0{index + 1}</span><span>{project.isFlagship ? 'FEATURED' : 'DEVELOPMENT'}</span></div><div className="project-icon">{index === 0 ? '✳' : '⌘'}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.techTags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={project.links.github} target="_blank" rel="noreferrer">View GitHub <span>↗</span></a></article>)}</div></div></section>;
}

function Experience() {
  return <section className="section section-tinted" id="experience"><div className="container"><SectionHeading eyebrow="EXPERIENCE" title="Learning through real work" description="Internship and practical experience."/><div className="timeline">{internshipsList.map((item, index) => <article className="timeline-item" key={`${item.organization}-${index}`}><div className="timeline-dot"></div><div className="timeline-meta"><span>{item.duration}</span><span>{item.organization}</span></div><h3>{item.role}</h3><ul>{item.skills.map(skill => <li key={skill}>{skill}</li>)}</ul><div className="project-tags">{item.tech.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div><div className="leadership-block"><h3>Activities & involvement</h3><div className="leadership-grid">{leadershipList.map(item => <article key={item.title}><span>{item.badge}</span><h4>{item.title}</h4><p>{item.description}</p></article>)}</div></div></div></section>;
}

function Education() {
  return <section className="section section-light" id="education"><div className="container education-wrap"><SectionHeading eyebrow="EDUCATION" title="Academic foundation"/><article className="education-card"><div className="education-icon">✦</div><div><span className="eyebrow">{education.graduation || education.cgpa}</span><h3>{education.degree}</h3><p>{education.institution}</p></div><span className="education-year">{education.cgpa}</span></article><div className="certification"><h3>Certification & learning</h3>{certificates.featured.map(certificate => <div className="certificate-row" key={certificate.name}><span>{certificate.icon}</span><div><strong>{certificate.name}</strong><p>{certificate.issuer}</p></div><a href={certificates.viewAllUrl} target="_blank" rel="noreferrer">View ↗</a></div>)}</div></div></section>;
}

function Contact() {
  return <section className="section contact-section" id="contact"><div className="container contact-grid"><div><SectionHeading eyebrow="GET IN TOUCH" title="Have an opportunity in mind?" description="I'm interested in Java Full Stack Developer opportunities, internships, and meaningful projects."/><a className="contact-email" href={`mailto:${personalInfo.emails.primary}`}>{personalInfo.emails.primary} ↗</a></div><div className="contact-card"><span className="availability"><i></i> Available for opportunities</span><h3>Let's build something valuable.</h3><p>Feel free to reach out. I'd be happy to connect.</p><a className="button button-primary" href={`mailto:${personalInfo.emails.primary}?subject=Let's%20connect`}>Send an email <span>↗</span></a><div className="contact-socials"><a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#home">{personalInfo.name}<span>.</span></a><p>{footerContent.copyright}</p><a href="#home">Back to top ↑</a></div></footer>;
}

export default function App() {
  return <div className="portfolio-app"><Navbar/><main><Hero/><About/><Skills/><Projects/><Experience/><Education/><Contact/></main><Footer/></div>;
}
