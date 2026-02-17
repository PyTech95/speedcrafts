import React,{useMemo} from "react";
import bg from "../../images/Untitled-design-10.webp";
import img175 from "../../images/175.webp";
import img176 from "../../images/176.webp";
import img177 from "../../images/177.webp";
import img178 from "../../images/178.webp";
import img179 from "../../images/179.webp";
import img180 from "../../images/180.webp";
import img181 from "../../images/181.webp";
import img182 from "../../images/182.webp";
import img183 from "../../images/183.webp";
import img184 from "../../images/184.webp";
import img185 from "../../images/185.webp";
import img186 from "../../images/186.webp";
import img187 from "../../images/187.webp";
import img188 from "../../images/188.webp";
import img189 from "../../images/189.webp";
import img190 from "../../images/190.webp";
import img191 from "../../images/191.webp";

export default function MobileConcretePlant() {
  const title = "Mobile Concrete Plant";

  const images = useMemo(
    () => [
      img175, img176, img177, img178, img179,
      img180, img181, img182, img183, img184,
      img185, img186, img187, img188, img189,
      img190, img191,
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
