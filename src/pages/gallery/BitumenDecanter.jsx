import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import img1 from "../../images/8-51.webp";
import img2 from "../../images/7-51.webp";
import img3 from "../../images/6-55.webp";
import img4 from "../../images/5-54.webp";
import img5 from "../../images/4-55.webp";
import img6 from "../../images/3-56.webp";
import img7 from "../../images/2-56.webp";
import img8 from "../../images/1-63.webp";

export default function BitumenDecanter() {
  const title = "Bitumen Decanter";

  const images = [
  img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
];

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
