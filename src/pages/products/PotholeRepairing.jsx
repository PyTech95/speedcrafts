import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import imgA49 from "../../images/A49.webp";
import imgA38 from "../../images/A38.webp";
import imgA37 from "../../images/A37.webp";
import imgA36 from "../../images/A36.webp";
import imgA35 from "../../images/A35.webp";
import imgA34 from "../../images/A34.webp";
import imgA33 from "../../images/A33.webp";
import imgA32 from "../../images/A32.webp";
import imgA31 from "../../images/A31.webp";
import imgA30 from "../../images/A30.webp";

import imgA29 from "../../images/A29.webp";
import imgA28 from "../../images/A28.webp";
import imgA27 from "../../images/A27.webp";
import imgA26 from "../../images/A26.webp";
import imgA25 from "../../images/A25.webp";
import imgA24 from "../../images/A24.webp";
import imgA23 from "../../images/A23.webp";
import imgA22 from "../../images/A22.webp";
import imgA21 from "../../images/A21.webp";
import imgA20 from "../../images/A20.webp";

import imgA19 from "../../images/A19.webp";
import imgA18 from "../../images/A18.webp";
import imgA17_1 from "../../images/A17-1.webp";
import imgA16_1 from "../../images/A16-1.webp";
import imgA15_1 from "../../images/A15-1.webp";
import imgA14_1 from "../../images/A14-1.webp";
import imgA13_2 from "../../images/A13-2.webp";
import imgA12_2 from "../../images/A12-2.webp";
import imgA11_2 from "../../images/A11-2.webp";
import imgA10_2 from "../../images/A10-2.webp";

import imgA9_2 from "../../images/A9-2.webp";
import imgA8_2 from "../../images/A8-2.webp";
import imgA7_2 from "../../images/A7-2.webp";
import imgA6_2 from "../../images/A6-2.webp";
import imgA5_2 from "../../images/A5-2.webp";
import imgA4_2 from "../../images/A4-2.webp";
import imgA3_2 from "../../images/A3-2.webp";
import imgA2_2 from "../../images/A2-2.webp";
import imgA1_2 from "../../images/A1-2.webp";


export default function PotholeRepairing() {
  const title = "Pothole Repairing Machine";

const images = [
  imgA1_2,
  imgA2_2,
  imgA3_2,
  imgA4_2,
  imgA5_2,
  imgA6_2,
  imgA7_2,
  imgA8_2,
  imgA9_2,
  imgA10_2,
  imgA11_2,
  imgA12_2,
  imgA13_2,
  imgA14_1,
  imgA15_1,
  imgA16_1,
  imgA17_1,
  imgA18,
  imgA19,
  imgA20,
  imgA21,
  imgA22,
  imgA23,
  imgA24,
  imgA25,
  imgA26,
  imgA27,
  imgA28,
  imgA29,
  imgA30,
  imgA31,
  imgA32,
  imgA33,
  imgA34,
  imgA35,
  imgA36,
  imgA37,
  imgA38,
  imgA49
];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <div className="relative h-[250px] md:h-[320px] overflow-hidden">
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
                className="w-full h-[300px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
