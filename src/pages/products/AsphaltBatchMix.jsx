import React from "react";
import { useEffect, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";

import img1 from "../../images/1-3.webp";
import img2 from "../../images/2-3.webp";
import img3 from "../../images/3-3.webp";
import img4 from "../../images/4-3.webp";
import img5 from "../../images/5-3.webp";
import img6 from "../../images/6-1.webp";
import img7 from "../../images/7-1.webp";
import img8 from "../../images/8-1.webp";
import img9 from "../../images/9-1.webp";
import img10 from "../../images/10-1.webp";
import img11 from "../../images/11-1.webp";
import img12 from "../../images/12-1.webp";
import img13 from "../../images/13-1.webp";
import img14 from "../../images/14-1.webp";
import img15 from "../../images/15-1.webp";
import img16 from "../../images/16-1.webp";
import brochurePdf from "../../images/asphalt-and-concrete-plant-brochure.pdf";

export function ProductGallery() {
  const images = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
    img9, img10, img11, img12,
    img13, img14, img15, img16,
  ];

  const [current, setCurrent] = useState(0);

  // ✅ Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const goPrev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      {/* Main Image */}
      <div className="relative bg-white h-[420px] rounded-md overflow-hidden border">

        <img
          src={images[current]}
          alt="Product"
          className="w-full h-full object-contain transition-opacity duration-700"
        />

        {/* Left Arrow */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2  h-20 w-10  flex items-center justify-center text-5xl"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2  h-10 w-10 flex items-center justify-center text-5xl"
        >
          ›
        </button>
      </div>
    </div>
  );
}


export default function AsphaltBatchMixPlant() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };
const accordion = [
  {
    title: "Dryer Drum",
    text:
      "It is designed for longer life. Proven flight design ensures a perfect distribution of material to be dried. The drum is guided through two rolling steel rings on 4 trunion rollers, coupled with geared motors and bearings, mounted on a sturdy main frame.",
  },
  {
    title: "Burner",
    text:
      "Our modulating burner works with either diesel or heavy oil. Burner is provided with servo motor for air regulation and PID Controller for modulation.",
  },
  {
    title: "Batching Tower",
    text:
      "It is fully automatic and guarantees best product quality. The operator can choose all the required process parameters and all components of the tower will become automatically set to obtain the requested product. The main units of the tower such as elevator, screen, hot aggregate storage bins and mixer are designed for long life, low maintenance and reliability.",
  },
  {
    title: "Cold Feed Bins",
    text:
      "Plants are provided with heavy duty cold feed bins. Bins have self-relieving bottom opening, which eliminates bridging of the feeders. Each bin is provided with variable speed inverter drive through gear box & motor.",
  },
  {
    title: "Control Unit",
    text:
      "Computerised Controls are provided for burner, temperature, damper, emergency plant shut down, sequential start and stop, etc. The display shows Aggregate, Asphalt, Filler and Production TPH along with temperature display of Aggregate, Asphalt, Exhaust and Mix Material. Daily production data can be printed out for records. Controls are mounted on a centralised control panel inside the control room.",
  },
  {
    title: "Bag House Filter",
    text:
      "Bag house filters remove the dust from the dryer’s exhaust and comply with the most severe environmental regulations. They are fitted with safety devices for temperature control and automatic counter-flow cleaning through main exhauster and complete system for recovery and re-use of filler.",
  },
  {
    title: "Bitumen Tank",
    text:
      "Tanks are insulated with rock-wool, available in horizontal type and heated by thermal oil with automatic temperature adjustment. Suitable valves to control the charge, transfer and discharge of bitumen among tanks are provided.",
  },
];
  return (
    <div className="bg-white">
      {/* ---------------- HERO SECTION (YOUR CODE) ---------------- */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img
          src={bg}
          alt="Asphalt Batch Mix Plant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-3xl font-semibold">
              Asphalt Batch Mix Plant
            </h1>
            <p className="mt-2 text-base md:text-lg font-semibold">
              Home /{" "}
              <span className="text-amber-400">
                Asphalt Batch Mix Plant
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            {/* Image Placeholder */}
           <div className="lg:col-span-8">
            <ProductGallery />
           </div>


            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Our <b>Asphalt Batch Mix Plants</b> are being manufactured
                using Design, Drawing & Technology from a European Company.
                These plants are available in capacities ranging from{" "}
                <b>80 tph to 200 tph</b>.
              </p>

              {/* Technical Table */}
              <div className="border border-gray-900 rounded">
                <div className="px-5 py-2 text-black font-bold border-b">
                  Technical Specifications
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 text-black">
                      <th className="px-5 py-2 border-b">Model</th>
                      <th className="px-5 py-2 border-b">Capacity</th>
                    </tr>
                  </thead>
                  <tbody className="text-black">
                    {[
                      ["BM 80", "80 tph"],
                      ["BM 120", "120 tph"],
                      ["BM 160", "160 tph"],
                      ["BM 180", "180 tph"],
                      ["BM 200", "200 tph"],
                    ].map(([model, cap]) => (
                      <tr key={model}>
                        <td className="px-5 py-2 border-b">{model}</td>
                        <td className="px-5 py-2 border-b">{cap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* --------- Accordion Section --------- */}
            <div className="mt-8 border border-gray-300 rounded">
              {accordion.map((it, idx) => (
                <details
                  key={it.title}
                  open={idx === 0}
                  className="group border-b border-gray-300 last:border-b-0"
                >
                  <summary className="cursor-pointer px-5 py-2 flex items-center justify-between bg-gray-100 text-black font-semibold">
                    <span>{it.title}</span>
                    <span className="text-xl font-bold group-open:hidden">+</span>
                    <span className="text-xl font-bold hidden group-open:block">−</span>
                  </summary>

                  <div className="px-5 py-4 text-black leading-relaxed bg-white whitespace-pre-line">
                    {it.text}
                  </div>
                </details>
              ))}
            </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR (Sticky on desktop) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Downloads */}
              <div className="rounded-[8px] bg-gray-100 p-8 shadow-sm">
                <h3 className="text-2xl text-black font-semibold text-center">
                  Downloads
                </h3>

                <div className="h-[3px] w-16 bg-amber-400 mx-auto mt-3 mb-8" />

                <a href={brochurePdf}
  download="asphalt-and-concrete-plant-brochure.pdf"
                    className="w-full flex items-center justify-between bg-white rounded-xl px-6 py-2 shadow hover:shadow-md">
                  <span className="text-lg text-black  font-medium">
                    Brochure
                  </span>
                  <span className="h-12 w-12 rounded bg-amber-400 text-white flex items-center justify-center text-xl">
                    →
                  </span>
                </a>

                <button className="w-full mt-5 flex items-center justify-between bg-white rounded-xl px-6 py-2 shadow hover:shadow-md">
                  <span className="text-lg text-black font-medium">
                    Gallery
                  </span>
                  <span className="h-12 w-12 rounded bg-amber-400 text-white flex items-center justify-center text-xl">
                    →
                  </span>
                </button>
              </div>

              {/* Enquire Now */}
              <div className="rounded-[8px] bg-amber-300/90 p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-black text-center">
                  Enquire Now
                </h3>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none"
                    placeholder="Email"
                    required
                  />
                  <input
                    className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none"
                    placeholder="Phone"
                    required
                  />
                  <input
                    className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none"
                    placeholder="Address"
                  />
                  <input
                    className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none"
                    placeholder="Country"
                  />

                  <textarea
                    className="w-full bg-amber-50 rounded text-gray-800 px-5 py-3 outline-none min-h-[120px]"
                    placeholder="Your Requirement"
                  />

                  <button
                    type="submit"
                    className="w-full bg-amber-50 rounded text-gray-800 bg-white py-3 font-semibold hover:bg-gray-100"
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
