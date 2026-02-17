import React, { useMemo,} from "react";
import bg from "../../images/Untitled-design-10.webp";
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

export default function MobileHotMixPlant() {
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
