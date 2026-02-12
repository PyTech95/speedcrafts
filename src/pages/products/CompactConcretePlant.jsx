import React, { useMemo } from "react";
import bg from "../../images/Untitled-design-10.webp";

/* ✅ USE YOUR IMAGES (Compact Concrete Plant Gallery) */
import img1 from "../../images/136.jpg";
import img2 from "../../images/137.jpg";
import img3 from "../../images/138.jpg";
import img4 from "../../images/139.jpg";
import img5 from "../../images/140.jpg";

export default function CompactConcretePlant() {
  const title = "Compact Concrete Plant";

  const images = useMemo(
    () => [img1, img2, img3, img4, img5],
    []
  );

  return (
    <div className="bg-white">
      {/* HERO (same UI like screenshot) */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-3xl font-semibold">{title}</h1>
            <p className="mt-2 text-base md:text-lg font-semibold">
              Home / Product Gallery /{" "}
              <span className="text-amber-400">{title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* GALLERY GRID (like screenshot) */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((src, idx) => (
            <div key={idx} className="bg-white border rounded">
              <img
                src={src}
                alt={`${title} ${idx + 1}`}
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
