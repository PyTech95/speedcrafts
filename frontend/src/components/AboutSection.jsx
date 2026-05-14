import React from 'react';
import { aboutContent } from '../mock';

const AboutSection = () => {
  return (
    <section className="relative bg-[#0b0b0b] py-16 md:py-24 overflow-hidden">
      {/* subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #f5b218 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* 50 years logo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f5b218]/10 blur-3xl rounded-full" />
              <img
                src={aboutContent.legacyImage}
                alt="50+ Years Legacy"
                className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-8 text-zinc-200">
            <h2
              className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#f5b218] mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {aboutContent.title}
            </h2>
         <div className="w-full max-w-[850px] mx-auto px-4 sm:px-6 lg:px-0">
  
  <div
    className="
      space-y-5
      sm:space-y-6
      md:space-y-7

      text-zinc-300

      text-[14px]
      sm:text-[15px]
      md:text-[16px]
      lg:text-[17px]

      leading-7
      sm:leading-8
      md:leading-[2]
      lg:leading-[2.1]

      tracking-[0.2px]
      font-light

      text-pretty
    "
  >
    {aboutContent.paragraphs.map((p, i) => (
      <p
        key={i}
        className="
          text-justify
          md:text-left
          text-balance
        "
      >
        {i === 0 && (
          <span className="font-semibold text-white">
            Speedcrafts{" "}
          </span>
        )}

        {i === 0
          ? p.replace("Speedcrafts,", "")
          : p}
      </p>
    ))}
  </div>

</div>
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <p
                className="text-2xl md:text-3xl font-bold text-[#f5b218] italic"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {aboutContent.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
