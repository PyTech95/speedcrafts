import React, { useMemo,} from "react";
import bg from "../../images/Untitled-design-10.webp";
import img204 from "../../images/204.webp";
import img205 from "../../images/205.webp";
import img206 from "../../images/206.webp";
import img207 from "../../images/207.webp";
import img208 from "../../images/208.webp";
import img209 from "../../images/209.webp";
import img210 from "../../images/210.webp";
import img211 from "../../images/211.webp";
import img212 from "../../images/212.webp";
import img213 from "../../images/213.webp";
import img214 from "../../images/214.webp";
import img215 from "../../images/215.webp";
import img216 from "../../images/216.webp";
import img217 from "../../images/217.webp";
import img219 from "../../images/219.webp";
import img220 from "../../images/220.webp";
import img221 from "../../images/221.webp";
import img222 from "../../images/222.webp";
import img12_50 from "../../images/12-50.webp";
import img11_51 from "../../images/11-51.webp";
import img52_15 from "../../images/52-15.webp";
import img51_16 from "../../images/51-16.webp";
import img50_15 from "../../images/50-15.webp";
import img49_15 from "../../images/49-15.webp";
import img48_18 from "../../images/48-18.webp";

export default function RoadRoller() {
  const title = "Road Roller";
 const images = useMemo(
    () => [
      img204,
      img205,
      img206,
      img207,
      img208,
      img209,
      img210,
      img211,
      img212,
      img213,
      img214,
      img215,
      img216,
      img217,
      img219,
      img220,
      img221,
      img222,
      img12_50,
      img11_51,
      img52_15,
      img51_16,
      img50_15,
      img49_15,
      img48_18
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
