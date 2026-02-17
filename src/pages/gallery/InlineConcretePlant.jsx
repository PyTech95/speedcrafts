import React, { useMemo,} from "react";
import bg from "../../images/Untitled-design-10.webp";
import img126 from "../../images/126.webp";
import img128 from "../../images/128.webp";
import img129 from "../../images/129.webp"; 
import img130 from "../../images/130.webp";
import img131 from "../../images/131.webp";
import img132 from "../../images/132.webp";
import img133 from "../../images/133.webp";
import img134 from "../../images/134.webp";
import img135 from "../../images/135.webp";
export default function InlineConcretePlant() {
  const title = "Inline Concrete Plant";
 const images = useMemo(
    () => [img126, img128, img129, img130, img131, img132, img133, img134, img135],
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
