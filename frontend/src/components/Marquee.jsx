import React from 'react';

const Marquee = () => {
  const items = Array.from({ length: 12 });
  return (
    <div className="w-full bg-black border-y border-[#f5b218]/40 overflow-hidden py-3 md:py-4">
      <div className="flex whitespace-nowrap animate-marquee gap-8 md:gap-12">
        {items.concat(items).map((_, i) => (
          <span
            key={i}
            className="text-[#f5b218] text-base md:text-2xl font-bold tracking-[0.15em] flex items-center gap-8 md:gap-12 shrink-0"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            MADE IN INDIA, TRUSTED GLOBALLY
            <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#f5b218]"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
