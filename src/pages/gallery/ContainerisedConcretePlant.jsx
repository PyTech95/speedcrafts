import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import img1_58 from "../../images/1-58.webp";
import img2_51 from "../../images/2-51.webp";
import img3_51 from "../../images/3-51.webp";
import img4_50 from "../../images/4-50.webp";
import img5_49 from "../../images/5-49.webp";
import img6_50 from "../../images/6-50.webp";
import img7_46 from "../../images/7-46.webp";
import img8_46 from "../../images/8-46.webp";
import img9_49 from "../../images/9-49.webp";
import img10_45 from "../../images/10-45.webp";
import img11_48 from "../../images/11-48.webp";

import img12_48 from "../../images/12-48.webp";
import img13_46 from "../../images/13-46.webp";
import img14_45 from "../../images/14-45.webp";
import img15_47 from "../../images/15-47.webp";
import img16_45 from "../../images/16-45.webp";
import img17_44 from "../../images/17-44.webp";
import img18_44 from "../../images/18-44.webp";
import img19_44 from "../../images/19-44.webp";
import img21_42 from "../../images/21-42.webp";
import img22_38 from "../../images/22-38.webp";

export default function ContainerisedConcretePlant() {
  const title = "Containerised Concrete Plant";

   const images = [
  img1_58,  
  img2_51,
  img3_51,
  img4_50,
  img5_49,
  img6_50,
  img7_46,
  img8_46,
  img9_49,
  img10_45,
  img11_48,
  img12_48,
  img13_46,
  img14_45,
  img15_47,
  img16_45,
  img17_44,
  img18_44,
  img19_44,
  img21_42,
  img22_38
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
