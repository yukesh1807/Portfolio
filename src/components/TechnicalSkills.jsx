import React from 'react';
import { technicalSkills } from '../data/portfolioData';
import 'aos/dist/aos.css'; // ensure AOS styles are available if used elsewhere

// Small pill badge for each skill name
const SkillBadge = ({ name }) => (
  <span className="inline-flex rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition">
    {name}
  </span>
);

// Card for a skill category
const SkillCard = ({ category, index }) => (
  <div
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_10px_2px_rgba(255,42,42,0.5)] transition"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <h3 className="uppercase font-black text-white mb-3 pb-2 border-b border-white/20">
      {category.title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill, i) => (
        <SkillBadge key={i} name={skill.name} />
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => (
  <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden">
    {/* Background blurred red circles */}
    <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

    {/* Header */}
    <div className="text-center mb-12" data-aos="fade-up">
      <p className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
        Technical Stack
      </p>
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-3">
        My Skillset
      </h2>
      <p className="text-white/50 max-w-2xl mx-auto">
        A quick overview of the tools and technologies I work with regularly.
      </p>
    </div>

    {/* Grid of skill cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {technicalSkills.categories.map((cat, idx) => (
        <SkillCard key={cat.title} category={cat} index={idx} />
      ))}
    </div>
  </section>
);

export default TechnicalSkills;

