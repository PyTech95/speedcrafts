import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";
import brochurePdf from "../../images/asphalt-and-concrete-plant-brochure.pdf";

/* ✅ USE YOUR IMAGES (246.webp → 261.webp) */
import img246 from "../../images/246.webp";
import img247 from "../../images/247.webp";
import img249 from "../../images/249.webp";
import img250 from "../../images/250.webp";
import img251 from "../../images/251.webp";
import img252 from "../../images/252.webp";
import img255 from "../../images/255.webp";
import img256 from "../../images/256.webp";
import img257 from "../../images/257.webp";
import img258 from "../../images/258.webp";
import img259 from "../../images/259.webp";
import img260 from "../../images/260.webp";
import img261 from "../../images/261.webp";

/* ---------------- Gallery (same UI) ---------------- */
export function ProductGallery({ images, current, setCurrent }) {
  useEffect(() => {
    if (!images?.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images, setCurrent]);

  const goPrev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const goNext = () => setCurrent((p) => (p + 1) % images.length);

  return (
    <div>
      <div className="relative bg-white h-[420px] rounded-md overflow-hidden border">
        {/* ✅ more suitable width/height + contain */}
        <img
          src={images[current]}
          alt="Product"
          className="w-full h-full object-contain mx-auto"
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

export default function BitumenPressure() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  const title = "Bitumen Pressure Distributor";

  const images = useMemo(
    () => [
      img246,
      img247,
      img249,
      img250,
      img251,
      img252,
      img255,
      img256,
      img257,
      img258,
      img259,
      img260,
      img261,
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  const desc = (
    <>
      <span className="font-semibold">Model BS / 42 / 4000 / 5000 / 6000 / 8000</span>
      <br />
      Truck mounted self propelled Bitumen Pressure Distributor with suitable
      heating system and variable spray bar to operate on constant pressure
      system, complete with air compressor, bitumen pump, auxiliary engine, tank
      mounting and other accessories for uniform and constant rate applications
      of hot bitumen (or cold tar) as per the specifications indicated below.
    </>
  );

  /* ✅ MULTI-SECTIONS TABLES (like your screenshot) */
  const sections = [
    {
      title: "Bitumen Tank",
      rows: [
        ["Capacity", "4000 / 5000 / 6000 / 8000 L"],
        ["Thickness of shell", "4 mm"],
        [
          "Shape",
          "Rectangular / Oval shape with light resin bonded glass wool insulation of 50 mm thickness.",
        ],
        ["Manhole", "600 mm dia."],
        ["Filter", "Removable screen filter"],
        ["Filling of Tank", "a) Through manhole. b) Through self-priming by own pump."],
        ["Temperature", "Dial type thermometer of range 0° to 250° C."],
        ["Tank Contents Measurement", "With calibrated dipstick."],
      ],
    },
    {
      title: "Power Pack",
      rows: [
        ["Engine", "4 – Stroke twin cylinder air / water cooled diesel engine of 25 hp at 2000 RPM."],
        ["Bitumen Pump", "Shuttle Block Type 380 to 450 litres per minute."],
        ["Compressor", "Double cylinder 3 HP"],
        ["Pressure", "9 Kg/sq. cm"],
        ["Maximum Capacity", "360 LPM"],
      ],
    },
    {
      title: "Heating",
      rows: [
        [
          "Type of Burner",
          "Single high pressure oil burner for adequate heating of viscous binder, oil consumption 8-20 lt/hr.",
        ],
        ["Tank Capacity", "50 L"],
        ["Fire Tube", "230 mm dia."],
      ],
    },
    {
      title: "Spray Bar",
      rows: [
        ["Type", "Folding type fitted with pressure gauge, regulating valve etc"],
        ["Width", "Variable width from 2.4 to 4.2 metres by extension bar"],
        ["Width adjustment", "By closing of nozzles"],
        ["Adjustment of height", "Mechanical"],
        ["Pre-heating of spray bar", "By full circulation of preheated bitumen."],
        ["Distance of nozzles", "225 mm"],
        ["Spraying pressure", "To be adjusted between 0-6 bars"],
        ["Hand lances", "2 Nos"],
        ["Cleaning", "By air pressure or diesel oil"],
        ["Rate of application", "0.3 to 1.0 Kg / sqm"],
      ],
    },
  ];

  const accordion = [
    {
      title: "Operation",
      text: "The operation of the spray bar is from the operator’s platform at the rear.",
    },
    {
      title: "Truck",
      text: "Truck Chassis of minimum wheel Base of 4225 mm and 4×2 configuration is provided. The battery used for starting the diesel engine conforms to ISI.",
    },
    {
      title: "ISI Specifications",
      text: "All the bought-out components conform to relevant ISI specifications and are of reputed make.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
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

              {/* ✅ Section tables */}
              <div className="space-y-6">
                {sections.map((sec) => (
                  <div key={sec.title} className="border border-gray-300 rounded">
                    <div className="px-5 py-3 font-semibold text-black border-b bg-gray-50">
                      {sec.title}
                    </div>

                    <table className="w-full text-left text-black">
                      <tbody>
                        {sec.rows.map(([label, value]) => (
                          <tr key={label} className="border-b last:border-b-0">
                            <td className="px-5 py-3 w-[45%] text-gray-900">
                              {label}
                            </td>
                            <td className="px-5 py-3">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>

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
                    <div className="px-5 py-4 text-black leading-relaxed font-medium bg-white whitespace-pre-line">
                      {it.text}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT S

          {/* RIGHT SIDEBAR (use exactly your block) */}
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
                  <span className="text-lg text-black  font-medium">
                    Brochure
                  </span>
                  <span className="h-12 w-12 rounded bg-amber-400 text-white flex items-center justify-center text-xl">
                    →
                  </span>
                </a>

                <button className="w-full mt-5 flex items-center justify-between bg-white rounded-xl px-6 py-2 shadow hover:shadow-md">
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
                    className="w-full bg-amber-50 rounded text-gray-800 bg-white py-3 font-semibold hover:bg-gray-100"
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
