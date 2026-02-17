import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import buyersImg from "../../images/buyers.webp"; 
import helmet from "../../images/1-4.png";
import globe from "../../images/2-4.png";
import award from "../../images/3-3.png";
import handshake from "../../images/4-2.png";
function Counter({ icon, value, label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-22 w-22 bg-amber-400 rounded-full bg-gold-500 grid place-items-center">
        <img src={icon} alt="" className="h-20 w-25" />
      </div>
      <div>
        <div className="text-4xl font-black text-black">{value}</div>
        <div className="text-sm font-semibold text-black/80">{label}</div>
      </div>
    </div>
  );
}
export default function ForBuyers() {
  const title = "Asphalt Drum Mix Plant (International Specs.)";
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <div className="relative h-[260px] md:h-[340px] overflow-hidden">
        <img
          src={bg}
          alt="Important Information For Buyers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-semibold">
              {title}
            </h1>
            <p className="mt-4 text-white text-sm md:text-xl">
              Home /{" "}
              <span className="text-yellow-400 font-medium">
                {title}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* TEXT SECTION */}
          <div className="text-gray-800 text-[15px] leading-7">
            <h2 className="text-2xl font-semibold mb-6">
              Hello Friends,
            </h2>

            <p className="mb-5">
              With the growing demand for road construction machinery,
              many companies market themselves as manufacturers, though
              not all have real production facilities. In today’s digital
              age, a website or brochure alone does not guarantee
              manufacturing credibility.
            </p>

            <p className="mb-5">
              Our advice is simple—do not rely solely on online claims.
              We encourage you to visit India and experience the
              machinery and manufacturing process in person. This
              ensures complete transparency and confidence in your
              investment.
            </p>

            <p className="font-semibold mb-6">
              After all, “seeing is believing”
            </p>

            <p className="mb-6">
              In the meantime, we invite you to visit our page at{" "}
              <span className="font-semibold text-black cursor-pointer hover:underline">
                Clients Visit
              </span>
              , where you can view photographs from visits by our
              international buyers.
            </p>

            <p className="font-semibold">Thank you</p>
            <p className="font-bold mt-1">TEAM SPEEDCRAFTS</p>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={buyersImg}
              alt="Buyers Visit"
              className="rounded-md shadow-xl max-w-full h-auto"
            />
          </div>

        </div>
      </div>
      <section className="bg-white py-12 ">
             <div className="mx-auto  px-4">
               <div className="grid md:grid-cols-4 gap-10 items-center">
                 <Counter icon={helmet} value="350+" label="Engineers & Workers" />
                 <Counter icon={globe} value="5000+" label="Global Clients" />
                 <Counter icon={award} value="45+" label="Awards Received" />
                 <Counter icon={handshake} value="17100+" label="Machines Delivered" />
               </div>
             </div>
      </section>
    </div>
  );
}
