import React from 'react';
import { personalInfo, socialLinks, footerContent, academy } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
        {/* Column 1: Taglines */}
        <div className="flex flex-col space-y-2">
          {footerContent.taglines.map((tag, idx) => (
            <p key={idx} className="uppercase" >{tag}</p>
          ))}
        </div>
        {/* Column 2: Credential and View Work */}
        <div className="flex flex-col items-center md:items-center space-y-2">
          <p>{footerContent.credential}</p>
          <a href="#projects" className="underline hover:text-white">View Work</a>
        </div>
        {/* Column 3: Availability */}
        <div className="flex flex-col items-end md:items-end space-y-2">
          <p>Available for opportunities</p>
          <p>{currentYear}</p>
        </div>
      </div>

      {/* Middle */}
      <div className="py-20 md:py-24 overflow-hidden text-center">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4]">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 items-end gap-4 text-white/60">
        {/* Column 1 */}
        <div className="flex flex-col space-y-1">
          <a href="#contact" className="underline hover:text-white">Contact</a>
          <p className="text-xs">{footerContent.copyright}</p>
          <p className="text-xs">Trained at <a href={academy.url} target="_blank" rel="noopener" className="underline hover:text-white">{academy.name}</a></p>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col items-center space-y-1">
          <a href={`mailto:${personalInfo.emails.primary}`} className="underline hover:text-white" aria-label="Email">
            {personalInfo.emails.primary}
          </a>
          <div className="flex space-x-3">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              {/* Simple GitHub SVG */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.77s.78-1.77 1.75-1.77 1.75.79 1.75 1.77-.78 1.77-1.75 1.77zm13.5 11.27h-3v-5.5c0-1.31-.02-3-1.84-3-1.84 0-2.12 1.44-2.12 2.9v5.6h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.6z"/></svg>
            </a>
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.86.25 2.3.41a4.6 4.6 0 011.66 1.09 4.6 4.6 0 011.09 1.66c.16.44.35 1.13.41 2.3.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.86-.41 2.3a4.6 4.6 0 01-1.09 1.66 4.6 4.6 0 01-1.66 1.09c-.44.16-1.13.35-2.3.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.86-.25-2.3-.41a4.6 4.6 0 01-1.66-1.09 4.6 4.6 0 01-1.09-1.66c-.16-.44-.35-1.13-.41-2.3C2.21 15.78 2.2 15.4 2.2 12s.01-3.58.07-4.85c.06-1.17.25-1.86.41-2.3A4.6 4.6 0 013.77 3.19a4.6 4.6 0 011.66-1.09c.44-.16 1.13-.35 2.3-.41C8.42 2.21 8.8 2.2 12 2.2zm0-2.2C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.22.55a6.8 6.8 0 00-2.45 1.44A6.8 6.8 0 00.33 4.44c-.22.68-.42 1.56-.48 2.83C-.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.06 1.27.26 2.15.48 2.83a6.8 6.8 0 001.44 2.45 6.8 6.8 0 002.45 1.44c.68.22 1.56.42 2.83.48C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.83-.48a6.8 6.8 0 002.45-1.44 6.8 6.8 0 001.44-2.45c.22-.68.42-1.56.48-2.83.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.48-2.83a6.8 6.8 0 00-1.44-2.45 6.8 6.8 0 00-2.45-1.44c-.68-.22-1.56-.42-2.83-.48C15.67.01 15.26 0 12 0z"/><path d="M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.6a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
              </a>
            )}
          </div>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col items-end space-y-1">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Explore My GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

