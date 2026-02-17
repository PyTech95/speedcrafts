import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import img1 from "../../images/16-48.webp";
import img2 from "../../images/15-50.webp";
import img3 from "../../images/14-48.webp";
import img4 from "../../images/13-49.webp";
import img5 from "../../images/12-51.webp";
import img6 from "../../images/11-52.webp";
import img7 from "../../images/10-49.webp";
import img8 from "../../images/9-53.webp";
import img9 from "../../images/8-50.webp";
import img10 from "../../images/7-50.webp";

import img11 from "../../images/6-54.webp";
import img12 from "../../images/5-53.webp";
import img13 from "../../images/4-54.webp";
import img14 from "../../images/3-55.webp";
import img15 from "../../images/2-55.webp";
import img16 from "../../images/1-62.webp";

export default function RoadSweeper() {
  const title = "Road Sweeper";

  const images = [
  img16,
  img15,
  img14,
  img13,
  img12,
  img11,
  img10,
  img9,
  img8,
  img7,
  img6,
  img5,
  img4,
  img3,
  img2,
  img1
];


  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <div className="relative `h-[250px]` `md:h-[320px]` overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="mt-2 font-semibold">
              Home / Product Gallery /{" "}
              <span className="text-amber-400">{title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ================= IMAGE GRID ================= */}
      <div className="mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={img}
                alt={`Road Sweeper ${index + 1}`}
                className="w-full `h-[300px]` object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
