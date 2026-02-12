import React, { useState, useEffect } from "react";
import bg from "../../images/Untitled-design-10.webp";

import helmet from "../../images/1-4.png";
import globe from "../../images/2-4.png";
import award from "../../images/3-3.png";
import handshake from "../../images/4-2.png";

// Slider images
import img1 from "../../images/3-74.webp";
import img2 from "../../images/1-85.webp";
import img3 from "../../images/2-75.webp";
import img4 from "../../images/Untitled-design-e1752994767300-2.webp";

const images = [img1, img2, img3, img4];

export default function Infrastructure() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="bg-white">
      {/* ===== HERO BANNER ===== */}
      <div className="relative h-auto md:h-[320px] overflow-hidden">
        <img src={bg} alt="Infrastructure" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold">Infrastructure</h1>
            <p className="mt-2 text-lg md:text-base font-bold">
              Home / <span className="text-amber-400">Infrastructure</span>
            </p>
          </div>
        </div>
      </div>

      {/* ===== CONTENT (TEXT + SLIDER) ===== */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            
            {/* LEFT TEXT */}
            <div className="text-black/90 leading-8 text-[17px] space-y-6">
              <p>
                <b>SPEEDCRAFTS</b> operates two state-of-the-art manufacturing facilities,
                one in Patna and the other in Haridwar. These facilities provide an
                exclusive and optimal environment for the production of construction
                equipment, complete with all necessary support services and amenities.
              </p>

              <p>
                With a dominant presence in over 60 countries, <b>SPEEDCRAFTS</b> is backed
                by a dedicated workforce of over 350 employees across our corporate office,
                branches, and manufacturing units.
              </p>

              <p>
                Many of the core team members have been with the company since its
                inception in 1971, and hundreds of employees have served the organization
                for over two decades. This rich experience is complemented by a dynamic
                blend of seasoned professionals and young talent.
              </p>
            </div>

            {/* RIGHT AUTO SLIDER */}
            <div className="relative w-full max-w-[640px] mx-auto lg:mx-0">
              
              <div className="overflow-hidden shadow-md border border-black/10">
                <img
                  src={images[current]}
                  alt="Infrastructure"
                  className="w-full h-[360px] md:h-[420px] object-cover transition-all duration-700"
                />
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
              >
                ❮
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COUNTERS ROW ===== */}
      <section className="bg-white py-10 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Counter icon={helmet} value="350+" label="Engineers & Workers" />
            <Counter icon={globe} value="5000+" label="Global Clients" />
            <Counter icon={award} value="45+" label="Awards Received" />
            <Counter icon={handshake} value="17100+" label="Machines Delivered" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Counter({ icon, value, label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-20 w-20 bg-amber-400 rounded-full grid place-items-center shadow-sm">
        <img src={icon} alt="" className="h-10 w-10 object-contain" />
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-black text-black">{value}</div>
        <div className="text-sm font-semibold text-black/80">{label}</div>
      </div>
    </div>
  );
}
