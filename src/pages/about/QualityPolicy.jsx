import React from "react";
import bg from "../../images/Untitled-design-10.webp";

import helmet from "../../images/1-4.png";
import globe from "../../images/2-4.png";
import award from "../../images/3-3.png";
import handshake from "../../images/4-2.png";

export default function QualityPolicy() {
  return (
    <div className="bg-white">
      {/* ================= HERO BANNER ================= */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img
          src={bg}
          alt="Quality Policy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold">Quality Policy</h1>
            <p className="mt-2 text-base md:text-lg font-semibold">
              Home / <span className="text-amber-400">Quality Policy</span>
            </p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Quality Policy:
          </h2>
          <p className="mt-6 text-black/80 leading-8 text-[17px]">
            At Speedcrafts, quality is the cornerstone of our operations and a
            key driver of our success. We are committed to delivering superior
            road construction machinery that meets and exceeds both national and
            international standards. Our unwavering dedication to quality is
            reflected in every product we manufacture, from design and
            development to delivery and post-sales service.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-black">
            Excellence In Manufacturing:
          </h3>
          <p className="mt-4 text-black/80 leading-8 text-[17px]">
            We ensure that all products are built with precision and integrity.
            Our manufacturing facilities in Patna and Haridwar are equipped with
            the latest technology and adhere to the strictest quality control
            standards to guarantee the reliability and performance of our
            machinery.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-black">
            Rigorous Testing &amp; Inspection:
          </h3>
          <p className="mt-4 text-black/80 leading-8 text-[17px]">
            Every machine undergoes a series of thorough inspections and tests
            during the manufacturing process. Our in-house testing laboratories,
            equipped with state-of-the-art equipment, allow us to perform
            stringent quality checks on every component and final product before
            it reaches our customers.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-black">
            Adherence To International Standards:
          </h3>
          <p className="mt-4 text-black/80 leading-8 text-[17px]">
            We adhere to both local and global standards of quality. Our products
            are built to comply with ISO, CE, and other relevant certifications,
            ensuring that we deliver machinery that meets the highest benchmarks
            in the industry.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-black">
            Continuous Improvement:
          </h3>
          <p className="mt-4 text-black/80 leading-8 text-[17px]">
            Quality at Speedcrafts is a continuous journey. Our engineering team
            is constantly working to improve and innovate, ensuring that our
            products evolve with technological advancements and meet the changing
            needs of the construction industry.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-black">
            Customer Satisfaction:
          </h3>
          <p className="mt-4 text-black/80 leading-8 text-[17px]">
            Our ultimate goal is to exceed the expectations of our customers. We
            take pride in providing not only top-quality products but also
            exceptional after-sales service. We actively listen to our customers,
            use their feedback to improve, and ensure that we provide the right
            solutions for their needs.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-black">
            Quality Assurance Framework:
          </h3>
          <p className="mt-4 text-black/80 leading-8 text-[17px]">
            At Speedcrafts, quality assurance is integrated into every aspect of
            our business. We use an established framework that includes:
          </p>
          <ul className="mt-4 list-disc pl-6 text-black/80 leading-8 text-[17px] space-y-2">
            <li>
              Comprehensive employee training programs focused on quality control
              and best practices.
            </li>
            <li>
              Regular audits and assessments to identify and correct any areas
              for improvement.
            </li>
            <li>
              Collaboration with industry experts to adopt the latest
              advancements in road construction machinery.
            </li>
          </ul>

          <h3 className="mt-12 text-2xl font-bold text-black">
            A Promise To Our Customers:
          </h3>
          <p className="mt-4 text-black/80 leading-8 text-[17px]">
            Our commitment to quality is not just about meeting standards, it's
            about setting new ones. At Speedcrafts, we believe in continuous
            innovation and excellence. We promise to maintain the highest level
            of quality in every product and service we offer, ensuring that our
            customers can always rely on us for durable, efficient, and
            cutting-edge solutions for construction machinery.
          </p>
        </div>
      </section>

      {/* ================= COUNTERS ROW (YOUR CODE) ================= */}
      <section className="bg-white py-12">
        <div className="mx-auto px-4">
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

function Counter({ icon, value, label }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-20 w-20 bg-amber-400 rounded-full grid place-items-center shadow-sm">
        <img src={icon} alt="" className="h-10 w-10 object-contain" />
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-black text-black">{value}</div>
        <div className="text-sm font-semibold text-black/80">{label}</div>
      </div>
    </div>
  );
}
