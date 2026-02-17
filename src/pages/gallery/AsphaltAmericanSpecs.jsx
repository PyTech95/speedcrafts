import React, { useMemo,} from "react";
import bg from "../../images/Untitled-design-10.webp";
import img86 from "../../images/86.webp";
import img85 from "../../images/85.webp";
import img84 from "../../images/84.webp";
import img83 from "../../images/83.webp";
import img82 from "../../images/82.webp";
import img81 from "../../images/81.webp";
import img80 from "../../images/80.webp";
import img79 from "../../images/79.webp";
import img78 from "../../images/78.webp";
import img77 from "../../images/77.webp";
import img76 from "../../images/76.webp";
import img65 from "../../images/65.webp";
import img63 from "../../images/63.webp";
import img62 from "../../images/62.webp";
import img61 from "../../images/61.webp";
import img60 from "../../images/60.webp";
import img59 from "../../images/59.webp";
import img58 from "../../images/58.webp";
export default function AsphaltAmericanSpecs() {
  const title = "Asphalt Drum Mix Plant (As per US Specs.)";

    const images = useMemo(
  () => [
    img59,
    img58,
    img60,
    img61,
    img62,
    img63,
    img65,
    img76,
    img77,
    img78,
    img79,
    img80,
    img81,
    img82,
    img83,
    img84,
    img85,
    img86,
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
