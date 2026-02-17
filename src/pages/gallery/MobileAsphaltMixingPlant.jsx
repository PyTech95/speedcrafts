import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import img1_56 from "../../images/1-56.webp";
import img2_49 from "../../images/2-49.webp";
import img3_49 from "../../images/3-49.webp";
import img4_48 from "../../images/4-48.webp";
import img5_47 from "../../images/5-47.webp";
import img6_48 from "../../images/6-48.webp";
import img7_44 from "../../images/7-44.webp";
import img8_44 from "../../images/8-44.webp";
import img9_47 from "../../images/9-47.webp";
import img10_44 from "../../images/10-44.webp";

import img11_46 from "../../images/11-46.webp";
import img12_46 from "../../images/12-46.webp";
import img13_44 from "../../images/13-44.webp";
import img14_43 from "../../images/14-43.webp";
import img15_45 from "../../images/15-45.webp";
import img16_43 from "../../images/16-43.webp";
import img17_42 from "../../images/17-42.webp";
import img18_42 from "../../images/18-42.webp";
import img19_43 from "../../images/19-43.webp";
import img20_44 from "../../images/20-44.webp";

export default function MobileAsphaltMixingPlant() {
  const title = "Mobile Asphalt Mixing Plant";

  const images = [
  img1_56, img2_49, img3_49, img4_48, img5_47,
  img6_48, img7_44, img8_44, img9_47, img10_44,
  img11_46, img12_46, img13_44, img14_43, img15_45,
  img16_43, img17_42, img18_42, img19_43, img20_44
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
