import React from 'react';
import { motion } from 'framer-motion';
import stackImage from '../assets/about/profile.png';
import { aboutContent } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden">
      {/* Inner layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left badge */}
        <motion.div
          className="relative md:w-[350px] shrink-0"
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
        >
          {/* Lanyard string */}
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-3 h-40 bg-black" />
          {/* Clip rectangle */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-700" />
          {/* Card with photo */}
          <div className="bg-gray-900 max-w-[280px] rounded-2xl p-3 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500 relative">
            <img
              src={stackImage}
              alt="YUKESHWARAN A — Java Full Stack Developer, TAP Academy student"
              className="aspect-[3/4] w-full rounded-xl object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Right content */}
        <div data-aos="fade-left" className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* Torn paper divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      {/* Decorative stars */}
      <svg
        className="absolute top-4 right-4 w-6 h-6 text-black opacity-30 animate-pulse"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>
      <svg
        className="absolute bottom-4 left-4 w-6 h-6 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>
    </section>
  );
};

export default About;

