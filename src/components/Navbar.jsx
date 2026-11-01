
import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry - Portfolio`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-lg py-3"
          : "bg-[#F8F6FF] py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-[#171326] text-2xl font-extrabold tracking-tight"
        >
          {personalInfo.brandName || personalInfo.name}
          <span className="text-[#5433EB]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[#514A62] font-medium hover:text-[#5433EB] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hire Me Button */}
        <div className="hidden lg:block">
          <a
            href={hireMeMailto}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#5433EB] text-white font-semibold hover:bg-[#4328C4] hover:-translate-y-0.5 transition-all duration-300 shadow-md"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-[#5433EB] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-[#E8E3F2]">
          <div className="flex flex-col px-6 py-5 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="text-[#514A62] font-semibold hover:text-[#5433EB] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href={hireMeMailto}
              className="text-center bg-[#5433EB] text-white font-semibold py-3 rounded-full"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
