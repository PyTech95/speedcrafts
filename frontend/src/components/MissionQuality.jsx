import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { missionVision, qualityPolicy, countriesServed } from '../mock';
import AnimatedGlobe from './AnimatedGlobe';

const Card = ({ image, title, text, href }) => (
  <div className="group flex flex-col h-full">
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-[230px] md:h-[260px] object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="text-center px-3 py-6 flex-1 flex flex-col">
      <h3
        className="text-xl md:text-2xl font-bold text-[#d99a0e] mb-3 tracking-wide"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        {title}
      </h3>
      <p className="text-zinc-700 leading-relaxed text-[15px] flex-1">{text}</p>
      <a
        href={href}
        className="inline-flex items-center justify-center gap-1 mt-4 text-[#0c0c0c] font-semibold underline underline-offset-4 hover:text-[#d99a0e] transition-colors"
      >
        Read More
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  </div>
);

const MissionQuality = () => {
  return (
    <section className="bg-zinc-50 py-16 md:py-24">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <Card
            image={missionVision.image}
            title={missionVision.title}
            text={missionVision.text}
            href="/mission-vision"
          />

          {/* Countries Served - 3D Animated Globe */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-full h-[460px] sm:h-[500px] md:h-[520px] rounded-xl overflow-hidden flex flex-col items-center shadow-xl"
              style={{
                background:
                  'radial-gradient(circle at 50% 55%, #2d6a52 0%, #1f4a3a 55%, #0f2a20 100%)'
              }}
            >
              {/* Subtle dotted overlay */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 0.5px, transparent 0)',
                  backgroundSize: '22px 22px'
                }}
              />

              {/* Text above the globe */}
              <div className="relative z-20 pt-6 md:pt-7 text-center drop-shadow-[0_3px_14px_rgba(0,0,0,0.55)]">
                <div
                  className="text-6xl sm:text-7xl md:text-[88px] font-extrabold text-[#f5b218] leading-none"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {countriesServed.count}
                </div>
                <div className="text-white text-xl sm:text-2xl md:text-[26px] font-semibold mt-2 tracking-wide">
                  {countriesServed.label}
                </div>
              </div>

              {/* Globe (fills remaining space) */}
              <div className="absolute left-0 right-0 bottom-0 top-[150px] sm:top-[170px] md:top-[180px] flex items-center justify-center">
                <AnimatedGlobe size={520} />
              </div>
            </div>
          </div>

          <Card
            image={qualityPolicy.image}
            title={qualityPolicy.title}
            text={qualityPolicy.text}
            href="/quality-policy"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionQuality;
