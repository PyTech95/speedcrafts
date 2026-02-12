import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";

/* IMAGES */
import img108 from "../../images/108.webp";
import img109 from "../../images/109.webp";
import img110 from "../../images/110.webp";
import img111 from "../../images/111.webp";
import img112 from "../../images/112.webp";
import img113 from "../../images/113.webp";
import img114 from "../../images/114.webp";
import img115 from "../../images/115.webp";
import img116 from "../../images/116.webp";
import img117 from "../../images/117.webp";
import img118 from "../../images/118.webp";
import img119 from "../../images/119.webp";
import img120 from "../../images/120.webp";
import img121 from "../../images/121.webp";
import img122 from "../../images/122.webp";
import img123 from "../../images/123.webp";

import brochurePdf from "../../images/asphalt-and-concrete-plant-brochure.pdf";

/* ---------------- Gallery ---------------- */
export function ProductGallery({ images, current, setCurrent }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, setCurrent]);

  const goPrev = () =>
    setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));

  const goNext = () =>
    setCurrent((p) => (p + 1) % images.length);

  return (
    <div className="relative bg-white h-[420px] rounded-md overflow-hidden border">
      <img
        src={images[current]}
        alt="Product"
        className="w-full h-full object-contain transition-opacity duration-700"
      />

      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-5xl"
        type="button"
      >
        ‹
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-5xl"
        type="button"
      >
        ›
      </button>
    </div>
  );
}

export default function MobileHotMixPlant() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  const title = "Mobile Hot Mix Plant";

  const images = useMemo(
    () => [
      img108, img109, img110, img111,
      img112, img113, img114, img115,
      img116, img117, img118, img119,
      img120, img121, img122, img123,
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  const desc = (
    <>
      SPEEDCRAFTS Bitumen Mixer is extremely compact and entirely
      self-contained plant, trailer mounted on 4 nos. pneumatic wheels
      with drawbar and turntable to ensure easy towing. All controls are
      within easy reach of the operator.
      <br /><br />
      Easy accessibility to all parts and lubricating points for regular
      and quick maintenance has been given utmost importance in design.
      All materials used are of correct and specified grades and are
      properly tested.
    </>
  );

  const specs = [
    ["Model", "SBM-10"],
    ["Length", "7000 mm"],
    ["Width", "2000 mm"],
    ["Height with chimney", "5250 mm"],
    ["Height with chimney folded", "2850 mm"],
    ["Dryer drum diameter (outer)", "700 mm"],
    ["Dryer drum length", "2000 mm"],
    ["Batching chute capacity", "300 kg"],
    ["Pugmill capacity", "350 kg"],
    ["Bitumen boiler capacity", "750 L"],
    ["Fuel tank capacity (Burner)", "175 L"],
    ["Fuel tank capacity (Engine)", "40 L"],
    ["Bitumen bucket capacity", "40 L"],
    ["Aggregate size usable", "Upto 30 mm"],
  ];

  const accordion = [
    {
      title: "Type & Model",
      text:
        "‘Speedcrafts’ Bitumen Mixer, Model SBM-10, capacity 6-10 TPH, generally conforming to IS:5890.",
    },
    {
      title: "Feeder",
      text:
        "A bucket elevator is provided to discharge aggregate into the drying cylinder through the feeding ring.",
    },
    {
      title: "Drying Cylinder",
      text:
        "Drying Cylinder discharges heated aggregate into the storage ring. It is supported on two roller tracks running on 4 nos. guide rollers driven by chain and sprocket wheel. Lifting flights are wear resistant and replaceable.",
    },
    {
      title: "Aggregate Burner",
      text:
        "Fitted to the discharge end of the drying cylinder, with a fuel pump for feeding fuel and air blower for supplying air.",
    },
    {
      title: "Air Blower",
      text:
        "Driven by the engine through a v-belt and is of suitable capacity for the burners provided.",
    },
    {
      title: "Storage Ring",
      text:
        "The discharge end of the drying cylinder is provided with a storage ring fitted with lifting buckets which discharge the hot aggregate into the batching chute.",
    },
    {
      title: "Batching Chute",
      text:
        "The batching chute has a fixed volume. Hot aggregate is discharged from chute to paddle mixer by a lever which opens the radial door for discharging the aggregate into the paddle mixer and simultaneously closes a deflector plate at the top of the chute to prevent any material being discharged into the chute while the radial door is open. A thermometer is supplied to register the temperature of the stones in the chute.",
    },
    {
      title: "Drum Hoist",
      text:
        "A wire rope hoist is provided with lifting frame for easy and convenient loading of bitumen from barrels into the boiler.",
    },
    {
      title: "Bitumen Supply System",
      text:
        "An integral bitumen boiler and bitumen pump is provided for feeding bitumen into the calibrated bitumen bucket for discharge into the pug mill. The quantity of bitumen can be metered through a 3-way cock.",
    },
    {
      title: "Mixer",
      text:
        "The aggregate and bitumen are mixed in a paddle mixer, fitted with two paddle shafts mounted with arms and tips which rotate in opposite directions. The shafts are gear driven and mounted on lubricated bearings. The paddle tips are replaceable and coated with special hard facing alloy to give them longer life in operation.",
    },
    {
      title: "Chimney",
      text:
        "Chimney for drawing out the hot gases is provided which can be folded during transportation.",
    },
    {
      title: "Chassis",
      text:
        "The whole unit is mounted on a strong chassis of welded and bolted construction with rolled and folded steel sections and provided with four pneumatic tyres. Four strong mechanical parking jacks are fitted.",
    },
    {
      title: "Optional",
      text:
        "Insulated bitumen boiler, overrun and parking brakes, load out conveyor for hot mix material.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="mt-2 font-semibold">
              Home / <span className="text-amber-400">{title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-8">
          <ProductGallery images={images} current={current} setCurrent={setCurrent} />

          <div className="mt-8 space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed">{desc}</p>

            {/* Technical Specification */}
            <div className="border border-gray-900 rounded">
              <div className="px-5 py-2 font-bold border-b text-black">
                Technical Specification
              </div>

              <table className="w-full text-left text-black">
                <tbody>
                  {specs.map(([label, value]) => (
                    <tr key={label}>
                      <td className={`px-5 py-2 border-b ${label === "Model" ? "font-bold" : "font-medium"}`}>
                        {label}
                      </td>
                      <td className={`px-5 py-2 border-b ${label === "Model" ? "font-bold" : ""}`}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Accordion */}
            <div className="mt-6 border border-gray-300 rounded">
              {accordion.map((item, idx) => (
                <details
                  key={item.title}
                  open={idx === 0}
                  className="group border-b border-gray-300 last:border-b-0"
                >
                  <summary className="cursor-pointer px-5 py-3 flex justify-between items-center bg-gray-100 font-semibold text-black">
                    {item.title}
                    <span className="text-xl group-open:hidden">+</span>
                    <span className="text-xl hidden group-open:block">−</span>
                  </summary>
                  <div className="px-5 py-4 text-black whitespace-pre-line">
                    {item.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
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
    
  );
}
