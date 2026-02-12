import React, { useEffect, useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";

/* ✅ USE THESE IMAGES (as you said) */
import img106 from "../../images/106.webp";
import img105 from "../../images/105.webp";
import img104 from "../../images/104.webp";
import img103 from "../../images/103.webp";
import img102 from "../../images/102.webp";
import img101 from "../../images/101.webp";
import img100 from "../../images/100.webp";
import img99 from "../../images/99.webp";
import img98 from "../../images/98.webp";
import img97 from "../../images/97.webp";
import img96 from "../../images/96.webp";
import img95 from "../../images/95.webp";
import img94 from "../../images/94.webp";
import img93 from "../../images/93.webp";
import img92 from "../../images/92.webp";
import img91 from "../../images/91.webp";
import img90 from "../../images/90.webp";
import img89 from "../../images/89.webp";
import img88 from "../../images/88.webp";
import img86_1 from "../../images/86-1.webp";

import img85_1 from "../../images/85-1.webp";
import img84_1 from "../../images/84-1.webp";
import img83_1 from "../../images/83-1.webp";
import img82_1 from "../../images/82-1.webp";
import img81_1 from "../../images/81-1.webp";
import img80_1 from "../../images/80-1.webp";
import img79_1 from "../../images/79-1.webp";
import img78_1 from "../../images/78-1.webp";
import img77_1 from "../../images/77-1.webp";
import img76_1 from "../../images/76-1.webp";

import img75_1 from "../../images/75-1.webp";
import img74_1 from "../../images/74-1.webp";
import img73_1 from "../../images/73-1.webp";
import img72_1 from "../../images/72-1.webp";
import img71_1 from "../../images/71-1.webp";
import img70_1 from "../../images/70-1.webp";
import img69_1 from "../../images/69-1.webp";
import img68_1 from "../../images/68-1.webp";
import img67_1 from "../../images/67-1.webp";
import img66_1 from "../../images/66-1.webp";

import img65_1 from "../../images/65-1.webp";
import img64_1 from "../../images/64-1.webp";
import img63_1 from "../../images/63-1.webp";
import img62_1 from "../../images/62-1.webp";
import img61_1 from "../../images/61-1.webp";
import img59_1 from "../../images/59-1.webp";

import brochurePdf from "../../images/asphalt-and-concrete-plant-brochure.pdf";

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

export default function MobileAsphaltMixingPlant() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  const title = "Mobile Asphalt Mixing Plant";


  const images = useMemo(
    () => [
      img106,
      img105,
      img104,
      img103,
      img102,
      img101,
      img100,
      img99,
      img98,
      img97,
      img96,
      img95,
      img94,
      img93,
      img92,
      img91,
      img90,
      img89,
      img88,
      img86_1,
      img85_1,
      img84_1,
      img83_1,
      img82_1,
      img81_1,
      img80_1,
      img79_1,
      img78_1,
      img77_1,
      img76_1,
      img75_1,
      img74_1,
      img73_1,
      img72_1,
      img71_1,
      img70_1,
      img69_1,
      img68_1,
      img67_1,
      img66_1,
      img65_1,
      img64_1,
      img63_1,
      img62_1,
      img61_1,
      img59_1,
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  /* ✅ CONTENT (from your screenshot text) */
  const desc = (
    <>
      At Speedcrafts, we take pride in our <b>strong Design and Engineering</b>{" "}
      capabilities, which allow us to manufacture high quality{" "}
      <b>Mobile Asphalt Mixing Plants</b> tailored to both American
      Specifications and International Standards. These mobile versions are
      engineered to deliver reliability, efficiency, and performance across a
      wide range of paving projects.
      <br />
      <br />
      While we do offer mobile variants of our Asphalt Plants, we believe in
      offering honest guidance to our clients. In most practical scenarios, site
      relocations do not occur frequently, certainly not on a weekly or monthly
      basis. Therefore, we generally do not recommend mobile plants as the
      optimal solution for most customers. Instead, we advise investing that
      additional cost into value-added equipment that can further enhance your
      operations and productivity.
      <br />
      <br />
      That said, our stationary plants are designed for flexibility, they are
      easy to install, operate, maintain, and relocate. Even if relocation is
      required occasionally, you will find our systems extremely user-friendly
      and efficient to move.
      <br />
      <br />
      However, if your project demands a Mobile Asphalt Mixing Plant, we will be
      glad to provide a solution tailored to your specific needs.
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
