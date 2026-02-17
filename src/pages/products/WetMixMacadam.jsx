import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";
import img269 from "../../images/269.webp";
import img270 from "../../images/270.webp";
import img271 from "../../images/271.webp";
import img272 from "../../images/272.webp";
import img273 from "../../images/273.webp";
import img274 from "../../images/274.webp";
import img275 from "../../images/275.webp";
import img276 from "../../images/276.webp";
import img277 from "../../images/277.webp";
import img278 from "../../images/278.webp";
import img279 from "../../images/279.webp";

import brochurePdf from "../../images/asphalt-and-concrete-plant-brochure.pdf";

/* ---------------- Gallery (UI SAME) ---------------- */
export function ProductGallery({ images, current, setCurrent }) {
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

export default function WetMixMacadam() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  const title = "Wet Mix Macadam Plant";

  const images = useMemo(
    () => [
      img269,
      img270,
      img271,
      img272,
      img273,
      img274,
      img275,
      img276,
      img277,
      img278,
      img279,
    ],
    []
  );
  const [current, setCurrent] = useState(0);

  /* ✅ Short intro (optional) */
  const desc = (
    <>
      Wet Mix Macadam Plants are designed for high output, consistent quality and
      easy operation. Available in <b>WMM-60</b>, <b>WMM-100</b> and{" "}
      <b>WMM-160</b> variants with reliable performance and low maintenance.
    </>
  );

  const featureBullets = [
    "Modern Wet Mix Macadam Technology",
    "Produces High Quality Mix",
    "Portable or Stationary",
    "High Production Rate",
    "Easy to Operate",
    "Highly Accurate Aggregate & Additives Feeder",
    "Manufactured as per MORTH Specification",
  ];

  // ✅ Multi-column technical table (same style like your screenshot)
  const specSections = useMemo(
    () => [
      {
        title: "TECHNICAL SPECIFICATION",
        rows: [{ label: "Output (TPH)", values: ["60", "100", "160"] }],
      },
      {
        title: "Cold Feed",
        rows: [
          { label: "Gathering Conveyor (mm)", values: ["600", "600", "600"] },
          { label: "Belt Feeder Width (mm)", values: ["500", "500", "500"] },
          { label: "No. of Bins", values: ["4", "4", "4"] },
          { label: "Bin Capacity (MT)", values: ["8", "10", "12"] },
        ],
      },
      {
        title: "Slinger Conveyor",
        rows: [{ label: "Conveyor Width (mm)", values: ["600", "600", "600"] }],
      },
      {
        title: "Pugmill",
        rows: [
          { label: "Capacity (cu.m)", values: ["1.4", "1.6", "1.9"] },
          { label: "No. of Arms", values: ["20", "26", "32"] },
          { label: "Mineral Filler Capacity (MT)", values: ["2", "3", "5"] },
        ],
      },
      {
        title: "Power Requirements",
        rows: [
          { label: "4 Bin Feeder (HP)", values: ["4 x 1.5", "4 x 1.5", "4 x 2"] },
          { label: "Gathering Conveyor (HP)", values: ["5", "5", "7.5"] },
          { label: "Slinger Conveyor (HP)", values: ["5", "5", "7.5"] },
          { label: "Vibrating Screen (HP)", values: ["0.5", "0.5", "0.5"] },
          { label: "Pug Mill Drive (HP)", values: ["15", "25", "50"] },
          { label: "Hydraulic Power Pack (HP)", values: ["3", "3", "3"] },
          { label: "Water Pump (HP)", values: ["2", "3", "5"] },
          { label: "Blower (HP)", values: ["2", "2", "3"] },
        ],
        footnote: "Higher capacity Plants offered on request",
      },
    ],
    []
  );

  const accordion = useMemo(
    () => [
      {
        title: "Four Bin Feeder",
        text:
          "It is of single chassis construction. At each Bin a radial gate is provided which can be opened in any position to regulate the aggregate flow. Individual endless belts are provided, below the gates to discharge material onto the gathering belt.",
      },
      {
        title: "Vibrating Screen",
        text:
          "A single-deck vibrating screen is provided on the slinger conveyor to remove oversize aggregates received from the 4-bin feeder.",
      },
      {
        title: "Slinger Conveyor",
        text:
          "An inclined conveyor with 600 mm wide belt mounted on idlers receives aggregate from the gathering conveyor and feeds it to the pug mill.",
      },
      {
        title: "Pug Mill",
        text:
          "A twin shaft pug mill mounted on antifriction bearing provides quick, continuous and homogeneous mix of aggregates and additives.",
      },
      {
        title: "Mineral Filler",
        text:
          "Fabricated from steel plates, it feeds the required quantity of additives to the pug mill.",
      },
      {
        title: "Control Cabin",
        text:
          "A fully automatic Control Panel is provided to control quantity and quality of production with operator sitting in air conditioned comfort.",
      },
      {
        title: "Optional",
        text:
          "Wet Mix Storage Silo\nMobile & Skid mounted plants\nEmulsion tank with pump station\nCement feeding hopper with screw conveyor",
      },
      {
        title: "Miscellaneous",
        text:
          "All components used in wet mix plant are of top quality, with ISI Certification wherever available.\nAll moving parts and electrical parts of wet mix plant are provided with safety covers.\nEase of Lubrication and dismantling has been built into the design for efficient maintenance and repair.\nFabricated parts of wet mix plant are thoroughly cleaned and treated before painting.\nManufacturing is done with advance, internationally recognized techniques.",
      },
    ],
    []
  );

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
            <ProductGallery
              images={images}
              current={current}
              setCurrent={setCurrent}
            />

            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">{desc}</p>

              {/* ✅ Technical Table (3 columns) */}
              <div className="border border-gray-300 rounded overflow-hidden">
                <div className="px-5 py-3 text-center text-black font-bold bg-gray-50 border-b">
                  TECHNICAL SPECIFICATION
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white text-black">
                        <th className="px-5 py-3 border-b border-gray-200 w-[40%]">
                          Model
                        </th>
                        <th className="px-5 py-3 border-b border-gray-200 text-center font-semibold">
                          WMM-60
                        </th>
                        <th className="px-5 py-3 border-b border-gray-200 text-center font-semibold">
                          WMM-100
                        </th>
                        <th className="px-5 py-3 border-b border-gray-200 text-center font-semibold">
                          WMM-160
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-black">
                      {specSections.map((sec) => (
                        <React.Fragment key={sec.title}>
                          <tr>
                            <td
                              className="px-5 py-3 font-semibold bg-white border-t border-gray-200"
                              colSpan={4}
                            >
                              {sec.title}
                            </td>
                          </tr>

                          {sec.rows.map((r) => (
                            <tr key={r.label}>
                              <td className="px-5 py-3 border-t border-gray-200">
                                {r.label}
                              </td>
                              {r.values.map((v, i) => (
                                <td
                                  key={i}
                                  className="px-5 py-3 text-center border-t border-gray-200"
                                >
                                  {v}
                                </td>
                              ))}
                            </tr>
                          ))}

                          {sec.footnote ? (
                            <tr>
                              <td
                                className="px-5 py-3 border-t border-gray-200 text-right font-semibold"
                                colSpan={4}
                              >
                                {sec.footnote}
                              </td>
                            </tr>
                          ) : null}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ✅ Features */}
              <div className="pt-2">
                <h3 className="text-xl font-bold text-black">Features:</h3>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-black">
                  {featureBullets.map((b) => (
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
                      <span className="text-xl font-bold group-open:hidden">
                        +
                      </span>
                      <span className="text-xl font-bold hidden group-open:block">
                        −
                      </span>
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
                  <span className="text-lg text-black font-medium">
                    Brochure
                  </span>
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
