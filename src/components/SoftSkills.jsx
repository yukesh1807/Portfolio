import React from 'react';
import { softSkillsList } from '../data/portfolioData';
import 'aos/dist/aos.css'; // ensure AOS styles are loaded elsewhere

// Card for a single soft skill
const SoftSkillCard = ({ skill, index }) => (
  <div
    className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] flex flex-col items-center text-center transition transform hover:scale-[1.03] hover:shadow-[0_0_10px_2px_rgba(255,42,42,0.3)]"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div className="group mb-3">
      <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-md transition-colors group-hover:bg-red-600/20">
        <span className="text-2xl" role="img" aria-label={skill.name}>
          {skill.icon}
        </span>
      </div>
    </div>
    <h3 className="uppercase font-bold text-gray-800 mb-2">{skill.name}</h3>
    <p className="text-gray-500 text-sm">{skill.desc}</p>
  </div>
);

const SoftSkills = () => (
  <section
    id="soft-skills"
    className="bg-white pt-24 pb-32 relative overflow-hidden"
    style={{
      backgroundImage:
        'linear-gradient(to right, #80808006 1px, transparent 1px), linear-gradient(to bottom, #80808006 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }}
  >
    {/* Torn‑paper divider (flipped) */}
    <svg
      className="absolute top-0 left-0 w-full -rotate-180 -translate-y-[1px] h-12 md:h-20"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="#0a0a0a"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
    </svg>

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
      <p className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium mb-2">
        Core Competencies
      </p>
      <h2 className="uppercase font-black text-gray-900 text-4xl md:text-5xl mb-3">
        Professional Soft Skills
      </h2>
      <p className="text-gray-500">
        The personal qualities that help me collaborate, solve problems, and adapt in fast‑moving environments.
      </p>
    </div>

    {/* Grid of skill cards */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {softSkillsList.map((skill, idx) => (
        <SoftSkillCard key={idx} skill={skill} index={idx} />
      ))}
    </div>
  </section>
);

export default SoftSkills;

