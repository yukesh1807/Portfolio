import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

// ── Card positions + animation config ────────────────────────────────────────
const CARD_CONFIG = [
  {
    className:
      'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
    aosType: 'fade-left',
    aosDelay: 100,
  },
  {
    className:
      'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
    aosType: 'fade-right',
    aosDelay: 200,
  },
  {
    className:
      'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
    aosType: 'fade-left',
    aosDelay: 300,
  },
  {
    className:
      'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
    aosType: 'fade-right',
    aosDelay: 400,
  },
];

// Approximate scroll-progress threshold for each card (0–1 over the container)
const CARD_THRESHOLDS = [0.1, 0.38, 0.58, 0.82];

// ── Tag card ─────────────────────────────────────────────────────────────────
const TagCard = ({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  threshold,
}) => {
  const [isActive, setIsActive] = useState(false);

  // Activate when the animated line tip passes this card's threshold
  useMotionValueEvent(pathLength, 'change', (latest) => {
    setIsActive(latest >= threshold);
  });

  return (
    <div
      className={`w-72 sm:w-80 ${className}`}
      data-aos={aosType}
      data-aos-delay={aosDelay}
    >
      {/* Outer tag wrapper */}
      <div
        className={`rounded-[2rem] p-2 transition-colors duration-700 ${
          isActive
            ? 'bg-[#ff2a2a] shadow-[0_0_30px_5px_rgba(255,42,42,0.4)]'
            : 'bg-white shadow-lg'
        }`}
      >
        {/* Punched hole */}
        <div className="flex justify-center pt-2 pb-0">
          <div
            className={`w-6 h-6 rounded-full border-2 transition-colors duration-700 ${
              isActive
                ? 'border-red-200/60 bg-red-700/50'
                : 'border-gray-300 bg-gray-100'
            }`}
          />
        </div>

        {/* Inner panel */}
        <div
          className={`mt-2 rounded-[1.5rem] p-8 min-h-[220px] transition-colors duration-700 ${
            isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
          }`}
        >
          <p
            className={`font-serif italic text-4xl font-black mb-2 transition-colors duration-700 ${
              isActive ? 'text-white/40' : 'text-gray-200'
            }`}
          >
            {number}
          </p>
          <h3
            className={`text-2xl font-black mb-3 transition-colors duration-700 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed transition-colors duration-700 ${
              isActive ? 'text-red-100' : 'text-gray-500'
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

// ── Main section ─────────────────────────────────────────────────────────────
const Services = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Shared SVG path for desktop
  const desktopPath =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200';

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right,#8080800a 1px,transparent 1px),linear-gradient(to bottom,#8080800a 1px,transparent 1px)',
        backgroundSize: '80px 80px',
      }}
    >
      {/* Inner wrapper */}
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* ── Header ──────────────────────────────────────────────── */}
        <div
          className="data-aos-fade-up md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
          data-aos="fade-up"
        >
          <p className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
            {skillsContent.badge}
          </p>

          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 mb-4">
              {skillsContent.heading}
            </h2>
            {/* Hand-drawn arrow */}
            <svg
              className="absolute -bottom-4 right-0 w-8 h-8 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>

          <p className="text-gray-500 mt-6">{skillsContent.description}</p>
        </div>

        {/* ── Desktop animated SVG path ───────────────────────────── */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* 1. Faint guide path */}
          <path
            d={desktopPath}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* 2. Mask – grows with scroll */}
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopPath}
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 3. Dashed real path, revealed by mask */}
          <path
            d={desktopPath}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* ── Mobile animated SVG path ────────────────────────────── */}
        <svg
          className="md:hidden absolute left-[50%] -translate-x-1/2 top-0 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* 1. Guide */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* 2. Mask */}
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth="8"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 3. Revealed dashed path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="1"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* ── Cards ───────────────────────────────────────────────── */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, idx) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={CARD_CONFIG[idx].className}
              aosType={CARD_CONFIG[idx].aosType}
              aosDelay={CARD_CONFIG[idx].aosDelay}
              pathLength={pathLength}
              threshold={CARD_THRESHOLDS[idx]}
            />
          ))}
        </div>

        {/* ── Hand-written end note ────────────────────────────────── */}
        <p
          className="hidden md:block absolute top-[1250px] left-[60%] text-3xl text-gray-600 rotate-6"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          {skillsContent.endText}
        </p>
      </div>
    </section>
  );
};

export default Services;

