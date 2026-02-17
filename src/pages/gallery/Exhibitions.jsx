import React, { useMemo } from "react";
import bg from "../../images/Untitled-design-10.webp";

import img1_34 from "../../images/1-34.webp";
import img1_40 from "../../images/1-40.webp";
import img1_51 from "../../images/1-51.webp";
import img2_34 from "../../images/2-34.webp";
import img2_38 from "../../images/2-38.webp";
import img3_19 from "../../images/3-19.webp";
import img3_21 from "../../images/3-21.webp";
import img5_22 from "../../images/5-22.webp";
import img5_25 from "../../images/5-25.webp";
import img6_43 from "../../images/6-43.webp";
import img9_40 from "../../images/9-40.webp";
import img10_28 from "../../images/10-28.webp";
import img11_30 from "../../images/11-30.webp";
import img12_37 from "../../images/12-37.webp";
import img16_38 from "../../images/16-38.webp";
import img17_28 from "../../images/17-28.webp";
import img17_34 from "../../images/17-34.webp";
import img19_36 from "../../images/19-36.webp";
import img26_32 from "../../images/26-32.webp";
import img27_28 from "../../images/27-28.webp";
import img30_22 from "../../images/30-22.webp";
import img51_14 from "../../images/51-14.webp";
import img54_9 from "../../images/54-9.webp";
import img62_5 from "../../images/62-5.webp";

export default function Exhibitions() {
  const title = "Exhibitions";

  const images = useMemo(
    () => [
        img1_34,
        img1_40,
        img1_51,
        img2_34,
        img2_38,
        img3_19,
        img3_21,
        img5_22,
        img5_25,
        img6_43,
        img9_40,
        img10_28,
        img11_30,
        img12_37,
        img16_38,
        img17_28,
        img17_34,
        img19_36,
        img26_32,
        img27_28,
        img30_22,
        img51_14,
        img54_9,
        img62_5
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

      {/* ================= CONTENT ================= */}
      <div className="mx-auto px-4 py-12">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-amber-400">
          Speedcrafts Worldwide: Event Highlights & Galleries
        </h2>

        <p className="mt-4 font-semibold  leading-relaxed text-gray-700 text-left">
          We regularly participate in exhibitions around the world. Below,
          you’ll find photos captured during these events. Simply click on
          each event to view the complete gallery for that show.
        </p>

        {/* ================= IMAGE GRID ================= */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={img}
                alt={`Exhibition ${index + 1}`}
                className="w-full h-[300px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
