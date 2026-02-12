import React from "react";
import bg from "../../images/Untitled-design-10.webp";

import incorporation from "../../images/Speedcrafts-Certificate-of-Incorporation.png";
import ce from "../../images/Speedcrafts-CE-Certificate.png";
import iso from "../../images/Speedcrafts-ISO-Certificate-1.png";
import importer from "../../images/Speedcrafts-Importer-Exporter-Code.png";
import eepc from "../../images/Speedcrafts-EEPC-Registration-Cum-Membership-Certificate.png";
import udyam from "../../images/Speedcrafts-Udyam-Registration-Certificate.png";
import pan from "../../images/Speedcrafts-PAN.png";
import gst from "../../images/Speedcrafts-GST-Registration-Certificate.png";

export default function Certifications() {
  const items = [
    {
      title: "Certificate of Incorporation",
      image: incorporation,
      pdf: "/certificate/Speedcrafts-Certificate-of-Incorporation.pdf",
    },
    {
      title: "CE Certificate",
      image: ce,
      pdf: "/certificate/Speedcrafts-CE-Certificate.pdf",
    },
    {
      title: "ISO Certificate",
      image: iso,
      pdf: "/certificate/Speedcrafts-ISO-Certificate.pdf",
    },
    {
      title: "Importer Exporter Code",
      image: importer,
      pdf: "/certificate/Speedcrafts-Importer-Exporter-Code.pdf",
    },
    {
      title: "EEPC Registration Cum Membership",
      image: eepc,
      pdf: "/certificate/Speedcrafts-EEPC-Registration-Cum-Membership.pdf",
    },
    {
      title: "Udyam Registration Certificate",
      image: udyam,
      pdf: "/certificate/Speedcrafts-Udyam-Registration-Certificate.pdf",
    },
    {
      title: "PAN",
      image: pan,
      pdf: "/certificate/Speedcrafts-PAN.pdf",
    },
    {
      title: "GST",
      image: gst,
      pdf: "/certificate/Speedcrafts-GST-Registration-Certificate.pdf",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img src={bg} alt="Membership / Certifications" className="w-full h-full object-cover" />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold">
              Membership / Certifications
            </h1>
            <p className="mt-2 text-base md:text-lg font-semibold">
              Home / <span className="text-amber-400">Membership / Certifications</span>
            </p>
          </div>
        </div>
      </div>

      {/* CERTIFICATES GRID */}
      <section className="py-14">
        <div className="mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <CertCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* COUNTERS ROW (your design) */}
     
    </div>
  );
}

/* Certificate Card */
function CertCard({ title, image, pdf }) {
  return (
    <div className="text-center">
      <a href={pdf} target="_blank" rel="noopener noreferrer">
        <div className="shadow-xl border border-black/10 overflow-hidden bg-white">
          <div className="h-auto">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-top hover:scale-[1.02] transition"
            />
          </div>
        </div>
      </a>
      <h3 className="mt-5 text-xl font-bold text-black">{title}</h3>
    </div>
  );
}

