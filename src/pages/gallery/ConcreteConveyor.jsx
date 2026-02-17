import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import img1_60 from "../../images/1-60.webp";
import img2_53 from "../../images/2-53.webp";
import img3_53 from "../../images/3-53.webp";
import img4_52 from "../../images/4-52.webp";
import img5_51 from "../../images/5-51.webp";
import img6_52 from "../../images/6-52.webp";
import img7_48 from "../../images/7-48.webp";
import img8_48 from "../../images/8-48.webp";
import img9_51 from "../../images/9-51.webp";
import img10_47 from "../../images/10-47.webp";
import img11_50 from "../../images/11-50.webp";

export default function ConcreteConveyor() {
  const title = "Concrete Conveyor";
const images = [
  img1_60,
  img2_53,
  img3_53,
  img4_52,
  img5_51,
  img6_52,
  img7_48,
  img8_48,
  img9_51,
  img10_47,
  img11_50
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
