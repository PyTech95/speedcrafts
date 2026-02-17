import React, { useMemo } from "react";
import bg from "../../images/Untitled-design-10.webp";

import img1_9 from "../../images/1-9.webp";
import img1_14 from "../../images/1-14.webp";
import img1_6 from "../../images/1-16.webp";
import img1_png from "../../images/1.1.png";
import img3_jpeg from "../../images/3.jpeg";
import img7_3 from "../../images/7-3.webp";
import img11_png from "../../images/11.png";
import img15_8 from "../../images/15-8.webp";
import img15_12 from "../../images/15-12.webp";
import img20_7 from "../../images/20-7.webp";
import img21_1 from "../../images/21-1.webp";
import img26_1 from "../../images/26-1.jpeg";
import img27 from "../../images/27.webp";
import img30_7 from "../../images/30-7.webp";
import img42_9 from "../../images/42-9.webp";
import img43 from "../../images/43-Copy.webp";
import img45_9 from "../../images/45-9.webp";
import img61 from "../../images/61.1.webp";


export default function ClientsVisit() {
  const title = "Clients Visit";

  const images = useMemo(
    () => [
         img1_9,
         img1_14,
         img1_6,
         img1_png,
         img3_jpeg,
         img7_3,
         img11_png,
         img15_8,
         img15_12,
         img20_7,
         img21_1,
         img26_1,
         img27,
         img30_7,
         img42_9,
         img43,
         img45_9,
         img61
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
          Factory Visits: Discover How We Build Excellence
        </h2>

    
       <div className="mx-auto">
         
         <p className="mt-4 font-semibold  leading-relaxed text-gray-700 text-left">
           We firmly believe that the best way to make an informed decision when purchasing 
           Construction Machinery is by visiting the manufacturing facility in person. That way, buyers can observe 
           the entire production process, evaluate the quality of components, and assess overall workmanship and finishing.
         </p>

         <p className="mt-4 font-semibold  leading-relaxed text-gray-700 text-left">
           Over the past 20 years, more than 1,000 International Clients have visited our facility in Patna, India. Below, you’ll find a few photos taken during these visits — 
           just click on a client’s name to view the full folder of images from their visit.
         </p>

       </div>
    

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
