import React from "react";
import bg from "../../images/Untitled-design-10.webp";
import dealer from "../../images/e3.png";
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
export default function JointVenture() {
  const title = "Joint Venture / Collaboration";

  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[250px] md:h-[340px] overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
            <p className="mt-2 text-2xl md:text-xl font-semibold">
              Home / <span className="text-amber-400">{title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* GREETINGS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl text-gray-900 font-semibold mb-6">Greetings,</h2>

            <div className="space-y-5 text-gray-900 leading-relaxed">
              <p>We trust you have had a chance to thoroughly explore our website.</p>

              <p>
                We would like to inform you that we currently have ample capacity for manufacturing, supported by competitive pricing and the necessary resources such as land, labor, electricity, and finance. We are actively seeking to expand the range of products we manufacture.
              </p>
              <p>
                If you are considering entering the Indian market and partnering with a local company that has a strong domestic presence, we invite you to consider us as a potential collaborator.
              </p>
               <p>
                We are open to proposals for collaboration or joint ventures in manufacturing of engineering, industrial or consumer goods. Additionally, we are available to provide any further information you may require.
              </p>
              <p className="font-semibold">
               We look forward to the opportunity to discuss potential partnerships.
              </p>

              <div className="pt-6">
                <p className="font-semibold">Best regards,</p>
                <p className="font-semibold">Shashank Agarwala</p>
                <p>Director – International Sales</p>
                <p className="font-semibold">
                  Mobile : +91 – 96500 89228
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={dealer}
              alt="Dealership Partnership"
              className="w-full max-w-[520px] h-auto rounded-md shadow-md"
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
