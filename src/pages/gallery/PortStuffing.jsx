import React, { useMemo,} from "react";
import bg from "../../images/Untitled-design-10.webp";
import img1_83 from "../../images/1-83.webp";
import img2_73 from "../../images/2-73.webp";
import img3_72 from "../../images/3-72.webp";
import img4_69 from "../../images/4-69.webp";
import img5_69 from "../../images/5-69.webp";
import img6_67 from "../../images/6-67.webp";
import img7_61 from "../../images/7-61.webp";
import img8_58 from "../../images/8-58.webp";
import img9_62 from "../../images/9-62.webp";
import img10_57 from "../../images/10-57.webp";
import img11_63 from "../../images/11-63.webp";
import img12_57 from "../../images/12-57.webp";
import img13_57 from "../../images/13-57.webp";
import img14_52 from "../../images/14-52.webp";
import img15_56 from "../../images/15-56.webp";
import img16_53 from "../../images/16-53.webp";
import img17_52 from "../../images/17-52.webp";
import img18_51 from "../../images/18-51.webp";
import img19_49 from "../../images/19-49.webp";
import img20_50 from "../../images/20-50.webp";
import img21_50 from "../../images/21-50.webp";
import img22_43 from "../../images/22-43.webp";
import img23_39 from "../../images/23-39.webp";
import img24_40 from "../../images/24-40.webp";
import img25_41 from "../../images/25-41.webp";
import img26_40 from "../../images/26-40.webp";



export default function PortStuffing() {
  const title = "PortStuffing";
 const images = useMemo(
    () => [
        img1_83,
  img2_73,
  img3_72,
  img4_69,
  img5_69,
  img6_67,
  img7_61,
  img8_58,
  img9_62,
  img10_57,
  img11_63,
  img12_57,
  img13_57,
  img14_52,
  img15_56,
  img16_53,
  img17_52,
  img18_51,
  img19_49,
  img20_50,
  img21_50,
  img22_43,
  img23_39,
  img24_40,
  img25_41,
  img26_40
    ],
    []
  );



  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
        <div className="relative h-[220px] md:h-[320px] overflow-hidden">
             <img src={bg} alt={title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 " />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center text-white px-4">
                 <h1 className="text-3xl md:text-3xl font-semibold">{title}</h1>
                 <p className="mt-2 text-base md:text-lg font-semibold">
                   Home / <span className="text-amber-400">{title}</span>
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
