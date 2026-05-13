import React from 'react';
import { exhibitions } from '../mock';

const Exhibitions = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#d99a0e] inline-block relative"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Exhibitions Worldwide
            <span className="block h-1 w-24 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {exhibitions.map((ex) => (
            <a
              key={ex.id}
              href={ex.href}
              className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-zinc-100"
            >
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={ex.image}
                  alt={ex.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5 text-center bg-black">
                <h3 className="text-white text-lg font-semibold group-hover:text-[#f5b218] transition-colors">
                  {ex.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
