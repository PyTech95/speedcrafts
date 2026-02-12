import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";
import img55 from "../../images/55.webp";
import img54 from "../../images/54.webp";
import img53 from "../../images/53.webp";
import img52 from "../../images/52.webp";
import img51 from "../../images/51.webp";
import img50 from "../../images/50.webp";
import img49 from "../../images/49.webp";
import img48 from "../../images/48.webp";

import img47 from "../../images/47.webp";
import img46 from "../../images/46.webp";
import img45_1 from "../../images/45-1.webp";
import img44_1 from "../../images/44-1.webp";
import img43_1 from "../../images/43-1.webp";
import img42_1 from "../../images/42-1.webp";
import img41_1 from "../../images/41-1.webp";
import img40_1 from "../../images/40-1.webp";

import img39_1 from "../../images/39-1.webp";
import img38_1 from "../../images/38-1.webp";
import img37_1 from "../../images/37-1.webp";
import img36_1 from "../../images/36-1.webp";
import img35_1 from "../../images/35-1.webp";
import img34_1 from "../../images/34-1.webp";
import img33 from "../../images/33.webp";
import img32 from "../../images/32.webp";

import img31 from "../../images/31.webp";
import img30 from "../../images/30.webp";
import img29_1 from "../../images/29-1.webp";
import img28_1 from "../../images/28-1.webp";
import img27_1 from "../../images/27-1.webp";
import img26_1 from "../../images/26-1.webp";
import img25_1 from "../../images/25-1.webp";
import img24_1 from "../../images/24-1.webp";

import img23_1 from "../../images/23-1.webp";
import img22_1 from "../../images/22-1.webp";
import img21_1 from "../../images/21-1.webp";
import img20_1 from "../../images/20-1.webp";
import img19_1 from "../../images/19-1.webp";
import img18_1 from "../../images/18-1.webp";
import img17_2 from "../../images/17-2.webp";


import brochurePdf from "../../images/asphalt-and-concrete-plant-brochure.pdf";

/* ---------------- Gallery (UI SAME) ---------------- */
export function ProductGallery({ images, current, setCurrent }) {
  // ✅ Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, setCurrent]);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      <div className="relative bg-white h-[420px] rounded-md overflow-hidden border">
        <img
          src={images[current]}
          alt="Product"
          className="w-full h-full object-contain transition-opacity duration-700"
        />

        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-20 w-10 flex items-center justify-center text-5xl"
          type="button"
        >
          ‹
        </button>

        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center text-5xl"
          type="button"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function AsphaltDrumMix() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  const title = "Asphalt Drum Mix Plant";

  const images = useMemo(
    () => [img17_2,
img18_1,
img19_1,
img20_1,
img21_1,
img22_1,
img23_1,
img24_1,
img25_1,
img26_1,
img27_1,
img28_1,
img29_1,
img30,
img31,
img32,
img33,
img34_1,
img35_1,
img36_1,
img37_1,
img38_1,
img39_1,
img40_1,
img41_1,
img42_1,
img43_1,
img44_1,
img45_1,
img46,
img47,
img48,
img49,
img50,
img51,
img52,
img53,
img54,
img55
],
    []
  );
  const [current, setCurrent] = useState(0);

  /* ✅ CONTENT (as per your screenshots) */
  const desc = (
    <>
      Our <b>Asphalt Plants</b> built to stringent International and Indian
      standards have found acceptance and acclaim by all users. They are
      thoroughly inspected and tested for quality and reliability by experienced
      engineers, faithfully uncompromising on quality. The checks begin with the
      incoming material and components and end only when the finished product is
      tested and despatched. We are committed to provide inspired services of
      the highest achievable standards for absolute satisfaction of our valued
      customers in terms of sales and service.
    </>
  );

  const iconFeatures = [
    "User-friendly control",
    "Durable and reliable",
    "Fast and easy installation",
    "Excellent fuel efficiency",
    "Low Maintenance Costs",
    "Adaptable to Varied Locations",
  ];

  const table = [
    ["DM 20", "15 to 20 TPH"],
    ["DM 45", "30 to 45 TPH"],
    ["DM 60", "45 to 60 TPH"],
    ["DM 90", "60 to 90 TPH"],
    ["DM 120", "90 to 120 TPH"],
    ["DM 150", "120 to 150 TPH"],
  ];

  const featureBullets = [
    "Fully Computerised & Automatic Plants upto 150 TPH Capacity",
    "Mobile and Stationary",
    "Wet Type and Bag House Filter Systems",
    "Plants with Counter Flow drums",
    "Hot Mix Storage Silos",
    "Global Presence with Prompt Product Support",
  ];

  const advantageBullets = [
    "All components used are of top quality",
    "Moving and electrical parts are provided with safety covers",
    "Ease of lubrication and dismantling has been built into the design for efficient maintenance and repair",
    "Fabricated parts are thoroughly cleaned and treated before painting",
    "Manufacturing is done with advanced, internationally recognised techniques",
  ];

  const accordion = [
    {
      title: "Dryer Drum",
      text:
        "The dryer is accurately fabricated to ensure proper heating of aggregates with minimum heat loss. It is supported on steel rollers through steel tyres with idlers and guide rollers and is provided with segmented driving sprocket.",
    },
    {
      title: "Four Bin Feeder",
      text:
        "It is of single chassis construction. At each Bin, a radial gate is provided which can be opened in any position to regulate the aggregate flow. Individual endless belts fitted with variable speed motors discharges material onto the gathering conveyor as per the mix design.",
    },
    {
      title: "Controls",
      text:
        "A fully automatic control panel with feather touch controls are provided for controlling the quantity and quality of production with operator sitting in air-conditioned comfort.\n\nAll systems are completely synchronised with automatic / manual control of burners, load cell, mix temperature, cold feed, mineral, bitumen proportions, etc. Manual control is possible through over-ride system. Adequate safety measures are adopted to avoid overloading, short-circuit, etc.",
    },
    {
      title: "Vibratory Screen",
      text:
        "A single-deck vibratory screen is provided to remove oversize aggregates received from the four bin feeder.",
    },
    {
      title: "Wet Scrubber",
      text:
        "An effective air pollution control system for minimizing emission of fine particles and gases.",
    },
    {
      title: "Flight Design",
      text:
        "The drying and mixing unit of the plant demands complex flight design. Specially designed flights lift and cascade the aggregate to reduce the final moisture content to 0.5% (by weight).",
    },
    {
      title: "Filler Unit",
      text:
        "Fabricated from steel plates, it feeds the required quantity of mineral to the dryer drum.",
    },
    {
      title: "Conveyors",
      text:
        "A slinger conveyor is provided which receives aggregate from the four bin feeder and feeds it to the dryer drum.\n\nLoadout conveyor fitted with hydraulically operated hopper is provided at the discharge end of the dryer drum which feeds the hot mix material into tippers.",
    },
    {
      title: "Dryer Burner",
      text:
        "A fully automatic, high pressure, auto jet burner is mounted at one end of the drum.",
    },
    {
      title: "Asphalt (Bitumen) Tank",
      text:
        "Tank of 15/20 MT capacity is provided, fabricated from steel plates with 50 mm glasswool insulation, manhole, thermocouples, etc. Bitumen is pumped to the dryer drum through hot oil jacketed pipelines. Tanks are fitted with independent on-off type burners.",
    },
    {
      title: "Fuel Tank",
      text:
        "One Tank of 2500 / 5000 / 10000 L capacity is provided with each plant.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO (same UI) */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-3xl font-semibold">{title}</h1>
            <p className="mt-2 text-base md:text-lg font-semibold">
              Home / <span className="text-amber-400">{title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT */}
          <div className="lg:col-span-8">
            <ProductGallery images={images} current={current} setCurrent={setCurrent} />

            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">{desc}</p>

              {/* ✅ Icon Features row (matches screenshot layout intent) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-10 pt-2">
                {iconFeatures.map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <span className="h-6 w-6 rounded-full border border-amber-400 flex items-center justify-center text-amber-400 text-sm">
                      ✓
                    </span>
                    <span className="text-black font-semibold">{t}</span>
                  </div>
                ))}
              </div>

              {/* Technical Table (same UI) */}
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
                    {table.map(([model, cap]) => (
                      <tr key={model}>
                        <td className="px-5 py-2 border-b">{model}</td>
                        <td className="px-5 py-2 border-b">{cap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ✅ Features / Advantages blocks (as in screenshots) */}
              <div className="pt-2">
                <h3 className="text-xl font-bold text-black">Features:</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-black">
                  {featureBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-bold text-black">Advantages:</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-black">
                  {advantageBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              {/* Accordion (same UI) */}
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

          {/* RIGHT SIDEBAR (same UI) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Downloads */}
              <div className="rounded-[8px] bg-gray-100 p-8 shadow-sm">
                <h3 className="text-2xl text-black font-semibold text-center">
                  Downloads
                </h3>

                <div className="h-[3px] w-16 bg-amber-400 mx-auto mt-3 mb-8" />

                <a
                  href={brochurePdf}
                  download="asphalt-and-concrete-plant-brochure.pdf"
                  className="w-full flex items-center justify-between bg-white rounded-xl px-6 py-2 shadow hover:shadow-md"
                >
                  <span className="text-lg text-black font-medium">Brochure</span>
                  <span className="h-12 w-12 rounded bg-amber-400 text-white flex items-center justify-center text-xl">
                    →
                  </span>
                </a>

                <button
                  type="button"
                  className="w-full mt-5 flex items-center justify-between bg-white rounded-xl px-6 py-2 shadow hover:shadow-md"
                >
                  <span className="text-lg text-black font-medium">Gallery</span>
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
                    className="w-full rounded text-gray-800 bg-white py-3 font-semibold hover:bg-gray-100"
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </div>
  );
}
