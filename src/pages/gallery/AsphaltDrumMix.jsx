import React, { useMemo,} from "react";
import bg from "../../images/Untitled-design-10.webp";
import img55 from "../../images/55.webp";
import img54 from "../../images/54.webp";
import img53 from "../../images/53.webp";
import img52 from "../../images/52.webp";
import img51 from "../../images/51.webp";
import img50 from "../../images/50.webp";
import img49 from "../../images/49.webp";
import img48 from "../../images/48.webp";

import img47 from "../../images/47.webp";
import img46 from "../../images/46.webp";
import img45_1 from "../../images/45-1.webp";
import img44_1 from "../../images/44-1.webp";
import img43_1 from "../../images/43-1.webp";
import img42_1 from "../../images/42-1.webp";
import img41_1 from "../../images/41-1.webp";
import img40_1 from "../../images/40-1.webp";

import img39_1 from "../../images/39-1.webp";
import img38_1 from "../../images/38-1.webp";
import img37_1 from "../../images/37-1.webp";
import img36_1 from "../../images/36-1.webp";
import img35_1 from "../../images/35-1.webp";
import img34_1 from "../../images/34-1.webp";
import img33 from "../../images/33.webp";
import img32 from "../../images/32.webp";

import img31 from "../../images/31.webp";
import img30 from "../../images/30.webp";
import img29_1 from "../../images/29-1.webp";
import img28_1 from "../../images/28-1.webp";
import img27_1 from "../../images/27-1.webp";
import img26_1 from "../../images/26-1.webp";
import img25_1 from "../../images/25-1.webp";
import img24_1 from "../../images/24-1.webp";

import img23_1 from "../../images/23-1.webp";
import img22_1 from "../../images/22-1.webp";
import img21_1 from "../../images/21-1.webp";
import img20_1 from "../../images/20-1.webp";
import img19_1 from "../../images/19-1.webp";
import img18_1 from "../../images/18-1.webp";
import img17_2 from "../../images/17-2.webp";
export default function AsphaltDrumMixPlant() {
  const title = "Asphalt Drum Mix Plant (International Specs.)";

  const images = useMemo(
    () => [img17_2,
img18_1,
img19_1,
img20_1,
img21_1,
img22_1,
img23_1,
img24_1,
img25_1,
img26_1,
img27_1,
img28_1,
img29_1,
img30,
img31,
img32,
img33,
img34_1,
img35_1,
img36_1,
img37_1,
img38_1,
img39_1,
img40_1,
img41_1,
img42_1,
img43_1,
img44_1,
img45_1,
img46,
img47,
img48,
img49,
img50,
img51,
img52,
img53,
img54,
img55
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
