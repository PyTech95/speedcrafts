import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import helmet from "../../images/1-4.png";
import globe from "../../images/2-4.png";
import award from "../../images/3-3.png";
import handshake from "../../images/4-2.png";
export default function MissionVisionValues() {
  return (
    <div className="bg-white">

      {/* ================= HERO BANNER ================= */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img
          src={bg}
          alt="Mission Vision Values"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 "></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              Mission, Vision & Values
            </h1>
            <p className="mt-2 text-sm md:text-lg font-semibold">
              Home /{" "}
              <span className="text-amber-400">
                Mission, Vision & Values
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ================= QUOTE + INTRO ================= */}
      <section className="bg-[#f4f4f4] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <div className="w-16 h-[2px] bg-black mb-6"></div>

            <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed text-black">
              "A global leader in innovative and reliable Road & Building
              Construction Machinery manufacturing, committed to quality,
              performance, and engineering excellence."
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-gray-700 leading-7 md:leading-8 text-[15px] md:text-[17px]">
            At Speedcrafts, we specialize in delivering high performance,
            reliable, and user friendly construction machinery. With a strong
            foundation in engineering excellence and a passion for innovation,
            we empower infrastructure development around the World. Our
            solutions are designed to enhance productivity, ensure safety,
            and deliver unmatched quality, contributing to faster project
            completion and stronger communities.
          </div>

        </div>
      </section>

      {/* ================= VISION / MISSION / VALUES ================= */}
      <section className="bg-[#f4f4f4] pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-12 md:gap-16 text-center">

          <InfoCard
            icon="fa-solid fa-eye"
            title="Vision"
            text="To be recognized globally as a trusted leader in the construction machinery industry, renowned for our innovation, quality excellence, and unwavering customer focus. We aim to drive infrastructure transformation by delivering cutting-edge solutions that improve connectivity and enrich lives."
          />

          <InfoCard
            icon="fa-solid fa-rocket"
            title="Mission"
            text="To manufacture and supply the highest quality construction machinery that boosts project efficiency, ensures safety, and supports sustainable development. We are committed to continuous innovation, customer satisfaction, and building infrastructure that empowers economies and communities."
          />

          <InfoCard
            icon="fa-regular fa-handshake"
            title="Values"
            text="From concept to commissioning, every Speedcrafts machine is built with precision and purpose. We begin with thorough research and customer insights, followed by innovative design and engineering. Our manufacturing process follows strict quality standards, and our dedicated service team ensures smooth delivery, installation, and support."
          />

        </div>
      </section>

      {/* COUNTERS ROW */}
                 <section className="bg-white py-12 border-t border-black/10">
                   <div className="mx-auto  px-4">
                     <div className="grid md:grid-cols-4 gap-10 items-center">
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


/* ================= INFO CARD ================= */
function InfoCard({ icon, title, text }) {
  return (
    <div className="max-w-md mx-auto">

      {/* ICON */}
      <div className="w-24 h-24 mx-auto bg-amber-400 rounded-full flex items-center justify-center shadow-md">
        <i className={`${icon} text-white text-3xl`}></i>
      </div>

      {/* TITLE */}
      <h3 className="mt-6 text-2xl font-semibold text-black">
        {title}
      </h3>

      {/* TEXT */}
      <p className="mt-4 text-gray-700 leading-7 md:leading-8 text-[15px] md:text-[16px]">
        {text}
      </p>

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

