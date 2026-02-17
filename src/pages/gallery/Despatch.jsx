import React, { useMemo,} from "react";
import bg from "../../images/Untitled-design-10.webp";
import img1_64 from "../../images/1-64.webp";
import img2_57 from "../../images/2-57.webp";
import img3_57 from "../../images/3-57.webp";
import img4_56 from "../../images/4-56.webp";
import img5_55 from "../../images/5-55.webp";
import img6_56 from "../../images/6-56.webp";
import img7_52 from "../../images/7-52.webp";
import img8_52 from "../../images/8-52.webp";
import img9_54 from "../../images/9-54.webp";
import img10_50 from "../../images/10-50.webp";
import img11_53 from "../../images/11-53.webp";

import img125_1 from "../../images/125-1.webp";
import img126_1 from "../../images/126-1.webp";
import img127_1 from "../../images/127-1.webp";
import img128_1 from "../../images/128-1.webp";
import img129_1 from "../../images/129-1.webp";
import img130_1 from "../../images/130-1.webp";
import img131_1 from "../../images/131-1.webp";
import img132_768x576 from "../../images/132-768x576.webp";
import img133_768x576 from "../../images/133-768x576.webp";


export default function Despatch() {
  const title = "Despatch";
 const images = useMemo(
    () => [
       img1_64,
  img2_57,
  img3_57,
  img4_56,
  img5_55,
  img6_56,
  img7_52,
  img8_52,
  img9_54,
  img10_50,
  img11_53,
  img125_1,
  img126_1,
  img127_1,
  img128_1,
  img129_1,
  img130_1,
  img131_1,
  img132_768x576,
  img133_768x576
    ],
    []
  );



  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
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
