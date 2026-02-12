import React from "react";
import bg from "../../images/Untitled-design-10.webp";

import chairman from "../../images/chairman.jpg";
import shashank from "../../images/shashank.jpg";
import tirthraj from "../../images/tirthraj.jpg";
import shishir from "../../images/Shishir.jpg";
import upsinha from "../../images/upsinha.jpg";

export default function BoardOfDirectors() {
  return (
    <div className="bg-white">
      {/* ===== HERO BANNER ===== */}
      <div className="relative h-auto md:h-[320px] overflow-hidden">
        <img src={bg} alt="Board of Directors" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold">Board of Directors</h1>
            <p className="mt-2 text-lg md:text-base font-bold">
              Home / <span className="text-amber-400">Board of Directors</span>
            </p>
          </div>
        </div>
      </div>

      {/* ===== MAIN SECTION ===== */}
      <section className="bg-[#efefef] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          {/* Heading */}
          <h2 className="text-xl md:text-2xl font-semibold text-amber-500">
            Board Of Directors – Leadership With Vision And Integrity
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-4xl mx-auto text-gray-700 text-base md:text-lg leading-7 md:leading-8">
            Our Board of Directors is composed of experienced leaders and industry professionals
            who provide strategic direction, uphold strong corporate governance, and drive long-term
            value for our stakeholders. Each member brings deep expertise, ethical leadership, and a
            commitment to innovation, ensuring that our company stays focused on excellence,
            sustainable growth, and customer trust.
          </p>

          {/* Directors Grid (tight spacing like screenshot) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-10 justify-items-center">
            <DirectorCard image={chairman} name="S K Agarwala" role="Chairman" />
            <DirectorCard image={shashank} name="Shashank Agarwala" role="Director – International Sales"/>
            <DirectorCard image={tirthraj} name="Tirthraj Himatsingka" role="Director" />
            <DirectorCard image={shishir} name="Shishir Jain" role="Director" />
            <DirectorCard image={upsinha} name="U P Sinha" role="Director" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===== Director Card Component ===== */
function DirectorCard({ image, name, role }) {
  return (
    <div className="text-center">
      {/* image box */}
      <div className="w-[260px] h-[290px] sm:w-[280px] sm:h-[320px] overflow-hidden bg-white shadow-md ring-1 ring-black/10 rounded">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* name + role (reduced gaps) */}
      <h3 className="mt-3 text-xl font-semibold text-black">{name}</h3>
      <p className="mt-1 text-gray-600 text-base">{role}</p>
    </div>
  );
}
