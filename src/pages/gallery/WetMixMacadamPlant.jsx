import React, { useMemo,} from "react";
import bg from "../../images/Untitled-design-10.webp";
import img269 from "../../images/269.webp";
import img270 from "../../images/270.webp";
import img271 from "../../images/271.webp";
import img272 from "../../images/272.webp";
import img273 from "../../images/273.webp";
import img274 from "../../images/274.webp";
import img275 from "../../images/275.webp";
import img276 from "../../images/276.webp";
import img277 from "../../images/277.webp";
import img278 from "../../images/278.webp";
import img279 from "../../images/279.webp";

export default function RoadRoller() {
 const title = "Wet Mix Macadam Plant";

  const images = useMemo(
    () => [
      img269,
      img270,
      img271,
      img272,
      img273,
      img274,
      img275,
      img276,
      img277,
      img278,
      img279,
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
