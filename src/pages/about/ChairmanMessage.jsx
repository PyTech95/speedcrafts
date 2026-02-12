import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import chairmanImg from "../../images/chairman.jpg"; // <-- replace with your actual image

export default function ChairmansMessage() {
  return (
    <div className="bg-white">
      {/* ===== HERO BANNER ===== */}
      <div className="relative h-auto md:h-[320px] overflow-hidden">
        <img
          src={bg}
          alt="Chairman’s Message Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold">Chairman’s Message</h1>
            <p className="mt-2 text-lg md:text-base font-bold">
              Home / <span className="text-amber-400">Chairman’s Message</span>
            </p>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <section className="bg-[#efefef] py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Image + Name Row */}
          <div className="flex flex-col items-center text-center">
            {/* Image */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
              <img
                src={chairmanImg}
                alt="S K Agarwala"
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>

            {/* Name + Role */}
            <div className="mt-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-black">
                S K Agarwala
              </h2>
              <p className="mt-3 tracking-[4px] text-gray-600 uppercase">
                Chairman
              </p>
            </div>
          </div>

          {/* Message Text (same style like screenshot: centered container, left aligned text) */}
          <div className="mt-20 max-w-5xl mx-auto text-gray-700 text-[18px] leading-9 space-y-12">
            <p>
              It all began with a dream - a vision to create Road Construction
              Machinery that would not only meet but exceed the expectations of our
              customers.
            </p>

            <p>
              Our goal was to build equipment that would improve the lives of our
              clients, offering them the best quality, user-friendly machines that
              are reliable, efficient, and a true pleasure to work with. Machines
              that empower contractors to boost their productivity, complete
              projects ahead of schedule, and produce roads of superior quality.
            </p>

            <p>
              In a competitive market with many options, our vision has always been
              clear: to deliver the highest quality at a reasonable price, ensuring
              we meet and surpass our customers' expectations.
            </p>

            <p>
              Behind Speedcrafts' success is a story of unwavering teamwork. We
              would like to express our deepest gratitude to our overseas partners,
              business associates, shareholders, employees, and most importantly,
              our valued customers, it is because of you that we continue to thrive.
            </p>

            <p>
              As we move forward, we remain committed to continuous innovation,
              ensuring that we bring the latest and highest quality Construction
              Machinery to the industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
