import React from "react";
import bg from "../../images/Untitled-design-10.webp";
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
export default function ForCompetitors() {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[260px] md:h-[340px] w-full overflow-hidden">
        <img
          src={bg}
          alt="Important Information For Competitors"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-3xl md:text-4xl font-semibold">
              Important Information For Competitors
            </h1>

            <p className="mt-4 text-white text-sm md:text-xl">
              Home /{" "}
              <span className="text-yellow-400 font-medium">
                Important Information For Competitors
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Important Notice on Unauthorized Use of Content
        </h2>

        <div className="text-gray-700 text-[15px] leading-7 space-y-5">
          <p>
            It has come to our attention that certain companies in India
            have been using content from our website and catalogues,
            including technical data and images, without our permission,
            to create their own promotional materials.
          </p>

          <p>
            We respectfully request that all such companies immediately
            remove any unauthorized content derived from our platforms
            to avoid potential legal action. We take intellectual
            property rights seriously and will not hesitate to protect
            our work through appropriate legal channels, if necessary.
          </p>

          <p>
            Additionally, we have received feedback from international
            buyers expressing concerns over the perceived quality of
            some Indian manufactured products. As fellow industry
            players, we believe it is our collective responsibility to
            uphold high standards of quality and provide reliable
            after-sales service. Doing so will elevate the global
            reputation of Indian manufacturing.
          </p>

          <p>
            Let us all strive for healthy and fair competition. The
            global market is vast enough to accommodate products from
            all companies, provided we respect each other’s efforts and
            originality.
          </p>

          <p className="font-medium">
            Thank you for your understanding and cooperation.
          </p>
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
