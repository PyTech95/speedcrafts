import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";

import img223 from "../../images/223.webp";
import img224 from "../../images/224.jpeg";
import img225 from "../../images/225.jpeg";

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
          className="w-full h-full object-cover transition-all duration-700"
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

export default function PaverFinisher() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  const title = "Paver Finisher";

  const images = useMemo(() => [img223, img224, img225], []);
  const [current, setCurrent] = useState(0);

  /* ✅ CONTENT (CHANGE ONLY CONTENT, UI SAME) */
  const desc = (
    <>
      <b>Sensor Pavers are also available.</b>
      <br />
      <br />
      This paver finisher is designed for reliable paving performance with
      smooth material flow, strong build quality, and easy operator controls.
    </>
  );

  const specs = [
    ["Model", "SPF – 45"],
    ["Power Unit", "40-45 BHP"],
    ["Hopper capacity", "7000 Kg"],
    ["Conveyor", "Twin bar type"],
    ["Dia. of screw spreader (Auger)", "254 mm"],
    ["Tamper-blows per min.", "1000 to 1500"],
    ["Vibration", "3000 vpm (infinitely variable-hydraulic)"],
    ["Working speeds", "2 to 23 m/min"],
    ["Travel speed (max.)", "16 Km/hr"],
    ["No. of speeds", "8 forward and 8 reverse"],
    ["Mat thickness capacity", "10 to 205 mm"],
    ["Mat width capacity", "2.5 to 4 m"],
    ["Extension width (min.)", "75 mm"],
    ["Rear wheel & tyres", "10.00 – 20 x 12 PR"],
    ["Front solid tyres", "560 mm x 405 mm x 150 mm"],
    ["Permissible variation", "± 5%"],
  ];

  const accordion = [
    {
      title: "Power Unit",
      text:
        "Kirloskar / equivalent water cooled / air cooled diesel engine of adequate horse-power provided with 12 volts electrical starting system.",
    },
    {
      title: "Transmission",
      text:
        "Through a multiple clutch and a 4-Speed Gearbox to an auxiliary low, high & reverse Gearbox & differential unit is provided with differential locking facility. Final drive from the differential to the wheels is through roller chain and sprocket mechanism. Hydraulic Traction option also available.",
    },
    {
      title: "Hoppers",
      text:
        "Hoppers have low dump clearance to handle all type of trucks. The wings are raised or lowered hydraulically to give a smaller overall width for transportation and for self-cleaning action during feeding of the asphaltic concrete onto the conveyor.",
    },
    {
      title: "Conveyor",
      text:
        "Twin bar conveyors are provided to feed the material from hopper on to the screws (augers). The conveyors can be independently controlled.",
    },
    {
      title: "Spreading Screws (Augers)",
      text:
        "The asphaltic concrete flows from the main hopper into another hopper containing the augers. These augers are adjustable to cover the full width of the paved surface and each side has independent control.",
    },
    {
      title: "Optional Tamper",
      text:
        "Initial compaction of the material is effected through the optional tamper. The tamper is actuated by means of eccentric journals mounted on sturdy roller bearings.",
    },
    {
      title: "Screed",
      text:
        "A heated, fully floating, hydraulically operated and vibrating screed is provided, covering the full length of the paved width. It ensures a predetermined thickness of the asphaltic concrete layer by striking off the excess material. The screed is adjustable for height and camber.",
    },
    {
      title: "Controls",
      text:
        "All controls are provided within easy reach of the operator from a comfortable driving seat.",
    },
    {
      title: "General",
      text:
        "The material specifications of all parts is as per ISI recommendations viz. abrasion-resistant steels for hopper, conveyor, auger screws, tamper, screed etc. All gears and sprockets are of requisite quality of steel and properly heat-treated. Easy accessibility to all parts for maintenance, inspection and overhaul has been given utmost importance in design.",
    },
    {
      title: "Standard Accessories",
      text:
        "Oil pressure meter, water temperature meter, ampere meter, 12 volt horn, full extensions of screws, screed and tamper, hour meter, edger plates, guides, cut-off shoes, bevel edges, screed heater, spray down equipment, comprehensive tool kit, operator hand book, semi rotary fuel pump for filling fuel tank from barrels and working / traveling lights.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO (same UI) */}
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
            <ProductGallery
              images={images}
              current={current}
              setCurrent={setCurrent}
            />

            <div className="mt-8 space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">{desc}</p>

              {/* Technical Specification (same UI) */}
              <div className="border border-gray-900 rounded">
                <div className="px-5 py-2 font-bold border-b text-center text-black">
                  TECHNICAL SPECIFICATION
                </div>

                <table className="w-full text-left text-black">
                  <tbody>
                    {specs.map(([label, value]) => {
                      const isModelRow = label.trim().toLowerCase() === "model";
                      return (
                        <tr key={label}>
                          <td
                            className={`px-5 py-2 border-b ${
                              isModelRow ? "font-bold" : "font-medium"
                            }`}
                          >
                            {label}
                          </td>
                          <td
                            className={`px-5 py-2 border-b ${
                              isModelRow ? "font-bold" : ""
                            }`}
                          >
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Accordion (same UI) */}
              <div className="mt-6 border border-gray-300 rounded">
                {accordion.map((item, idx) => (
                  <details
                    key={item.title}
                    open={idx === 0}
                    className="group border-b border-gray-300 last:border-b-0"
                  >
                    <summary className="cursor-pointer px-5 py-3 flex justify-between items-center bg-gray-100 font-semibold text-black">
                      <span>{item.title}</span>
                      <span className="text-xl font-bold group-open:hidden">
                        +
                      </span>
                      <span className="text-xl font-bold hidden group-open:block">
                        −
                      </span>
                    </summary>

                    <div className="px-5 py-4 text-black leading-relaxed whitespace-pre-line">
                      {item.text}
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
                  Download
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
