import React, { useMemo,} from "react";
import bg from "../../images/Untitled-design-10.webp";
import img246 from "../../images/246.webp";
import img247 from "../../images/247.webp";
import img249 from "../../images/249.webp";
import img250 from "../../images/250.webp";
import img251 from "../../images/251.webp";
import img252 from "../../images/252.webp";
import img255 from "../../images/255.webp";
import img256 from "../../images/256.webp";
import img257 from "../../images/257.webp";
import img258 from "../../images/258.webp";
import img259 from "../../images/259.webp";
import img260 from "../../images/260.webp";
import img261 from "../../images/261.webp";

export default function BitumenPressureDistributor() {
  const title = "Bitumen Pressure Distributor";
  const images = useMemo(
    () => [
      img246,
      img247,
      img249,
      img250,
      img251,
      img252,
      img255,
      img256,
      img257,
      img258,
      img259,
      img260,
      img261,
    ],
    []
  );

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
