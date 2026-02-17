import {React,useMemo, useState } from "react";
import  {Link}  from "react-router-dom";

import bg from "../../images/Untitled-design-10.webp";

import imgG1 from "../../images/G1.webp";
import imgG2 from "../../images/G2.jpg";
import imgG3 from "../../images/G3.jpg";
import imgG4 from "../../images/G4.jpg";
import imgG5 from "../../images/G5.jpg";
import imgG6 from "../../images/G6.jpg";
import imgG7 from "../../images/G7.jpg";
import imgG8 from "../../images/G8.jpg";
import imgG9 from "../../images/G9.jpg";
import imgG10 from "../../images/G10.jpg";
import imgG11 from "../../images/G11.jpg";
import imgG12 from "../../images/G12.jpg";
import imgG13 from "../../images/G13.png";
import imgG14 from "../../images/G14.jpg";
import imgG15 from "../../images/G15.jpg";
import imgG16 from "../../images/G16.jpg";
import imgG17 from "../../images/G17.png";
import imgG18 from "../../images/G18.jpg";
import imgG19 from "../../images/G19.jpg";
import imgG20 from "../../images/G20.jpg";

/* ================================
   CARD COMPONENT (OUTSIDE RENDER)
================================ */
function Card({ item }) {
  return (
    <Link to={item.link} className="group text-center">
      <div className="bg-white rounded shadow-lg overflow-hidden">
        <div className="`h-[230px]`">
          <img
            src={item.src}
            alt={item.label}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="text-xl font-bold text-black group-hover:text-amber-400 transition">
          {item.label}
        </div>

        {item.subLabel && (
          <div className="text-base text-gray-800 mt-1">
            {item.subLabel}
          </div>
        )}
      </div>
    </Link>
  );
}

/* ================================
   SECTION COMPONENT (OUTSIDE RENDER)
================================ */
function Section({ heading, list }) {
  if (!list?.length) return null;

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold text-center text-amber-400">
        {heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {list.map((item) => (
          <Card key={item.link} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ================================
   MAIN PRODUCTS COMPONENT
================================ */
export default function Products() {
  const title = "Product Gallery";

  const items = useMemo(
    () => [
      // ASPHALT
      {
        src: imgG1,
        label: "Asphalt Batch Mix Plant",
        subLabel: "(As per European Specs.)",
        category: "ASPHALT",
        link: "/product-gallery/asphalt-batch-mix-plant",
      },
      {
        src: imgG2,
        label: "Asphalt Drum Mix Plant",
        subLabel: "(As per International Specs.)",
        category: "ASPHALT",
        link: "/product-gallery/asphalt-drum-mix-plant-international-specs",
      },
      {
        src: imgG3,
        label: "Asphalt Drum Mix Plant",
        subLabel: "(As per American Specs.)",
        category: "ASPHALT",
        link: "/product-gallery/asphalt-drum-mix-plant-american-specs",
      },
      {
        src: imgG4,
        label: "Mobile Asphalt Mixing Plant",
        category: "ASPHALT",
        link: "/product-gallery/mobile-asphalt-mixing-plant",
      },
      {
        src: imgG5,
        label: "Mobile Hot Mix Plant",
        category: "ASPHALT",
        link: "/product-gallery/mobile-hot-mix-plant",
      },

      // CONCRETE
      {
        src: imgG6,
        label: "Inline Concrete Batching Plant",
        category: "CONCRETE",
        link: "/product-gallery/inline-concrete-batching-plant",
      },
      {
        src: imgG7,
        label: "Compact Concrete Plant",
        category: "CONCRETE",
        link: "/product-gallery/compact-concrete-plant",
      },
      {
        src: imgG8,
        label: "Containerised Concrete Plant",
        category: "CONCRETE",
        link: "/product-gallery/containerised-concrete-plant",
      },
      {
        src: imgG9,
        label: "Portable Concrete Plant",
        category: "CONCRETE",
        link: "/products/portable-concrete-plant",
      },
      {
        src: imgG10,
        label: "Mobile Concrete Plant",
        category: "CONCRETE",
        link: "/product-gallery/mobile-concrete-plant",
      },
      {
        src: imgG11,
        label: "Concrete Conveyor",
        category: "CONCRETE",
        link: "/product-gallery/concrete-conveyor",
      },

      // OTHER
      { src: imgG12, label: "Road Roller", category: "OTHER", link: "/product-gallery/road-rollers" },
      { src: imgG13, label: "Paver Finisher", category: "OTHER", link: "/product-gallery/paver-finishers" },
      { src: imgG14, label: "Road Sweeper", category: "OTHER", link: "/product-gallery/road-sweepers" },
      { src: imgG15, label: "Chip Spreader", category: "OTHER", link: "/product-gallery/chip-spreaders" },
      { src: imgG16, label: "Bitumen Pressure Distributor", category: "OTHER", link: "/product-gallery/bitumen-pressure-distributor" },
      { src: imgG17, label: "Trolley Mounted Bitumen Sprayer", category: "OTHER", link: "/product-gallery/trolley-mounted-bitumen-sprayer" },
      { src: imgG18, label: "Bitumen Decanter", category: "OTHER", link: "/product-gallery/bitumen-decanter" },
      { src: imgG19, label: "Pothole Repairing Machine", category: "OTHER", link: "/product-gallery/pothole-repairing-machine" },
      { src: imgG20, label: "Wet Mix Macadam Plant", category: "OTHER", link: "/product-gallery/wet-mix-macadam-plant" },
    ],
    []
  );

  const tabs = [
    { key: "ALL", label: "All" },
    { key: "ASPHALT", label: "ASPHALT MIXING PLANT" },
    { key: "CONCRETE", label: "CONCRETE MIXING PLANT & EQUIPMENT" },
    { key: "OTHER", label: "OTHER CONSTRUCTION EQUIPMENT" },
  ];

  const [activeTab, setActiveTab] = useState("ALL");

  const filteredItems = useMemo(() => {
    if (activeTab === "ALL") return items;
    return items.filter((x) => x.category === activeTab);
  }, [activeTab, items]);

  const asphaltItems = filteredItems.filter((x) => x.category === "ASPHALT");
  const concreteItems = filteredItems.filter((x) => x.category === "CONCRETE");
  const otherItems = filteredItems.filter((x) => x.category === "OTHER");

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative `h-[220px]` `md:h-[320px]` overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
            <p className="mt-2 text-base md:text-lg font-semibold">
              Home / <span className="text-amber-400">{title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <div className="bg-gray-200 rounded-full p-3 flex flex-wrap gap-3 justify-center">
          {tabs.map((t) => {
            const active = activeTab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key)}
                className={[
                  "rounded-full px-6 py-2 font-semibold text-sm md:text-base transition",
                  active
                    ? "bg-white text-black shadow"
                    : "bg-black text-white hover:bg-black/90",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTIONS */}
      <div className="mx-auto max-w-7xl px-4 py-16 space-y-20">
        <Section heading="Asphalt Mixing Plant" list={asphaltItems} />
        <Section heading="Concrete Mixing Plant & Equipment" list={concreteItems} />
        <Section heading="Other Construction Equipment" list={otherItems} />
      </div>
    </div>
  );
}
