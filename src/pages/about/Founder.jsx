import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import founderImg from "../../images/founder.jpg"; // replace with your actual image

export default function Founder() {
  return (
    <div className="bg-white">

      {/* ===== HERO BANNER ===== */}
      <div className="relative h-auto md:h-[320px] overflow-hidden">
        <img
          src={bg}
          alt="Founder Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold">Founder</h1>
            <p className="mt-2 text-lg md:text-base font-bold">
              Home / <span className="text-amber-400">Founder</span>
            </p>
          </div>
        </div>
      </div>

      {/* ===== MAIN SECTION ===== */}
      <section className="bg-[#efefef] py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Founder Image + Name */}
          <div className="flex flex-col items-center text-center">
            
            {/* Image */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
              <img
                src={founderImg}
                alt="Late Mr. Phoolchand Agarwala"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="mt-8 text-3xl font-semibold text-black">
              Late Mr. Phoolchand Agarwala
            </h2>

            {/* Designation */}
            <p className="mt-3 tracking-[4px] text-gray-600 uppercase">
              Founder of Speedcrafts
            </p>

          </div>

          {/* Paragraph Section */}
          <div className="mt-20 max-w-4xl mx-auto text-gray-700 text-[18px] leading-9 space-y-12">

            <p>
              Late Mr. Phoolchand Agarwala was the visionary founder of Speedcrafts,
              established in 1971. With a passion for engineering and a commitment
              to quality, he laid the foundation for what is now a leading name in
              road construction machinery.
            </p>

            <p>
              Driven by his dedication to excellence, Mr. Agarwala’s leadership and
              strong values of integrity, innovation, and customer satisfaction set
              Speedcrafts on a path of success. His focus on delivering durable and
              reliable products made Speedcrafts a trusted partner in the industry.
            </p>

            <p>
              Though he is no longer with us, Mr. Agarwala’s vision and values
              continue to guide Speedcrafts, ensuring the company's growth and
              commitment to quality.
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}
