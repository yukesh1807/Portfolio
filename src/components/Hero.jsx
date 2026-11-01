

import React from "react";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/about/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#F8F6FF] text-[#171326] pt-28 pb-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#5433EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT: Introduction */}
          <div className="text-center md:text-left">

            <span className="inline-block px-5 py-2 mb-6 rounded-full bg-[#5433EB]/10 text-[#5433EB] font-semibold text-sm">
              Java Full Stack Developer
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Hi, I'm{" "}
              <span className="text-[#5433EB]">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-[#514A62] mb-6">
              {personalInfo.role}
            </h2>

            <p className="text-base md:text-lg text-[#6B6375] leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
              I am passionate about building responsive web applications
              and developing practical solutions using Java Full Stack
              technologies. I enjoy learning new technologies and
              turning ideas into functional applications.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">

              <a
                href="#projects"
                className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-[#5433EB] text-white font-semibold shadow-lg shadow-[#5433EB]/20 hover:bg-[#4328C4] hover:-translate-y-1 transition-all duration-300"
              >
                View Projects →
              </a>

              <a
                href={personalInfo.resume}
                download
                className="inline-flex justify-center items-center px-8 py-3.5 rounded-full border-2 border-[#5433EB] text-[#5433EB] font-semibold hover:bg-[#5433EB] hover:text-white transition-all duration-300"
              >
                Download Resume ↓
              </a>

            </div>
          </div>

          {/* RIGHT: Profile Image */}
          <div className="flex justify-center md:justify-end">

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">

              {/* Decorative circle */}
              <div className="absolute inset-0 rounded-full bg-[#5433EB]/10 scale-110" />

              {/* Profile image */}
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="relative w-full h-full rounded-full object-contain shadow-2xl border-4 border-white"
              />

              {/* Floating label */}
              <div className="absolute -bottom-4 -left-5 bg-white rounded-2xl px-5 py-3 shadow-xl border border-[#E8E3F2]">
                <p className="text-sm font-bold text-[#5433EB]">
                  Java | React | MySQL
                </p>
                <p className="text-xs text-[#6B6375] mt-1">
                  Full Stack Development
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}