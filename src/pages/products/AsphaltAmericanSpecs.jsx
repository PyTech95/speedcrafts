import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";
import img86 from "../../images/86.webp";
import img85 from "../../images/85.webp";
import img84 from "../../images/84.webp";
import img83 from "../../images/83.webp";
import img82 from "../../images/82.webp";
import img81 from "../../images/81.webp";
import img80 from "../../images/80.webp";
import img79 from "../../images/79.webp";
import img78 from "../../images/78.webp";
import img77 from "../../images/77.webp";
import img76 from "../../images/76.webp";
import img75 from "../../images/75.webp";
import img73 from "../../images/73.webp";
import img72 from "../../images/72.webp";
import img71 from "../../images/71.webp";
import img70 from "../../images/70.webp";
import img69 from "../../images/69.webp";
import img68 from "../../images/68.webp";
import img67 from "../../images/67.webp";
import img66 from "../../images/66.webp";
import img65 from "../../images/65.webp";
import img64 from "../../images/64.webp";
import img63 from "../../images/63.webp";
import img62 from "../../images/62.webp";
import img61 from "../../images/61.webp";
import img60 from "../../images/60.webp";
import img59 from "../../images/59.webp";
import img58 from "../../images/58.webp";

import brochurePdf from "../../images/asphalt-and-concrete-plant-brochure.pdf";

/* ---------------- Gallery (UI SAME) ---------------- */
export function ProductGallery({ images, current, setCurrent }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, setCurrent]);

  const goPrev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const goNext = () => setCurrent((p) => (p + 1) % images.length);

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

export default function AsphaltAmericanSpecs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  const title = "Asphalt Plant (American Specs.)";

  // ✅ gallery images
  const images = useMemo(
    () => [
      img86,
      img85,
      img84,
      img83,
      img82,
      img81,
      img80,
      img79,
      img78,
      img77,
      img76,
      img75,
      img73,
      img72,
      img71,
      img70,
      img69,
      img68,
      img67,
      img66,
      img65,
      img64,
      img63,
      img62,
      img61,
      img60,
      img59,
      img58,
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  /* ✅ PAGE CONTENT (as per your screenshots) */
  const desc = (
    <>
      Speedcrafts is a global brand in the field of continuous type Asphalt
      Mixing Plants with our existence in over 60 Countries. We manufacture
      these Asphalt Plants as per American design & specifications (similar to
      Plants build in the US). Plants are offered both in stationary & mobile
      version and are available upto 120 tph capacity.
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

  // ✅ Table as per image (tph values)
  const table = [
    ["DM 30", "30 tph"],
    ["DM 50", "50 tph"],
    ["DM 70", "70 tph"],
    ["DM 90", "90 tph"],
    ["DM 120", "120 tph"],
  ];

  const newGenTitle = "New Generation Drum Mix Asphalt Plants:";
  const newGenBullets = [
    "Five models with production capacities ranging from 30 to 120 tph",
    "Stationary and mobile plants",
    "Includes Cold feed bins, Drum mixer fitted with fully automatic and modulating burner, Drag conveyor with integral discharge hopper, Wet scrubber, Asphalt tank, Fuel tank, Control cabin, Computer automated controls",
    "Bag Filters and Storage Silos available as an option",
  ];

  const accordion = [
    {
      title: "Strongly Built Plants",
      text:
        "Plants are well built to meet tough working conditions, constructed of heavy duty steel and high quality parts.",
    },
    {
      title: "Drum Mixer",
      text:
        "Drum mixers are constructed of C-45 steel plate for longer life. Main frame is built with large structural beams for extra strength. Drum shell is coated with heat resistant paint for heat retention. Drum is provided with friction drive through four trunnions and individual gears. Proven flight design ensures maximum heat transfer and mixing.",
    },
    {
      title: "Cold Feed Bins",
      text:
        "Plants are provided with 3 or 4 cold feed bins. All bins are strongly built and mounted on heavy duty beams for extra strength. Bins have self-relieving bottom opening which eliminates bridging of the feeders. Each bin is provided with variable speed inverter drives through gear motors.",
    },
    {
      title: "Asphalt (Bitumen) Tank",
      text:
        "Burner heated asphalt tank is standard with our drum mixer. Tanks are built with heavily reinforced steel structures and fitted with diesel fired burner. Hot oil coils are also provided in the tank, allowing the hot oil to circulate through jacketed pipes and pump. US make Asphalt and hot oil pumps are used.",
    },
    {
      title: "Wet Scrubber (Pollution Control System)",
      text:
        "Plant is equipped with a standard wet scrubber type pollution control system. Wet scrubber system includes all duct work, automatically controlled air damper, water spray nozzles, water pump and exhaust fan.",
    },
    {
      title: "Fully Modulating Burner",
      text:
        "Drum Mixer is equipped with fully automatic, diesel fired burner. Burner assembly includes control motor, oil and air piping, pilot and main flame scanners, turbo blower and fuel pump.",
    },
    {
      title: "Computer Automated Controls",
      text:
        "Plant controls are mounted on a centralized panel inside the control house. PC/PLC based automation system allows the operator to automatically control the asphalt blending process. Controls include burner controls, temperature controls, damper controls, emergency plant shut down controls, sequential start and stop controls. The display shows Production TPH, Aggregate TPH, Asphalt TPH & Mix Temperature. Computer controlled automation system is fully backed with a semi-automatic control system. Daily production datas can be printed out for records.",
    },
    {
      title: "Drag Conveyor",
      text:
        "Plant is equipped with a drag output conveyor. Drag conveyor is built with heavy steel sections, bottom and sides are provided with abrasion resistant wear liners. US make high quality drag chain is supplied, fitted with heat treated sprockets, gear box and motor.",
    },
    {
      title: "Fuel Tank",
      text: "One Tank of 5000 / 10000 L capacity is provided with each plant.",
    },
    {
      title: "Note",
      text:
        "All Mobile Plants are provided with Tandem Axle fitted on Cold Feed Bins, Drum Mixer & Asphalt Tank. Landing Gears, Steel Foundation Plates, Braking System etc. are also provided.\nHigher Capacity Plants are available on specific enquiry.",
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

              {/* ✅ Icon Features row (same UI) */}
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

              {/* ✅ New Generation section (as in image) */}
              <div className="pt-2">
                <h3 className="text-xl font-bold text-black">{newGenTitle}</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-black">
                  {newGenBullets.map((b) => (
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
