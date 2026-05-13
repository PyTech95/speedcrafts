import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { chairmanMessage } from '../mock';

const ChairmanMessage = () => {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${chairmanMessage.bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative max-w-[1100px] mx-auto px-6 text-center">
        <Quote className="w-12 h-12 md:w-14 md:h-14 text-[#f5b218] mx-auto mb-6 opacity-80" />
        <h2
          className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#f5b218] mb-8"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Chairman&apos;s Message
        </h2>
        <p className="text-white text-lg md:text-2xl leading-[1.7] italic font-light max-w-[900px] mx-auto">
          &ldquo;{chairmanMessage.quote}&rdquo;
        </p>
        <a
          href="/chairmans-message"
          className="inline-flex items-center gap-2 mt-10 px-7 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default ChairmanMessage;
