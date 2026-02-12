import React, { useEffect, useMemo, useState } from "react";

// ✅ Put your 5 hero images here (change paths as per your project)
import hero1 from "../images/5-76.webp";
import hero2 from "../images/3-76.webp";
import hero3 from "../images/6-74.webp";
import hero4 from "../images/17-1.webp";
import hero5 from "../images/8-60.webp";
import years from "../images/50years.png";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import background from "../images/Untitled.webp";
import expo1 from "../images/62-5.webp";
import expo2 from "../images/5-22.webp";
import expo3 from "../images/3-21.webp";
import Untitled1 from "../images/Untitled-design-9.webp";
import country from "../images/60.png";
import scaled from "../images/4-2-scaled-1.webp";
import helmet from "../images/1-4.png";
import globe from "../images/2-4.png";
import award from "../images/3-3.png";
import handshake from "../images/4-2.png";

function SectionTitle({ children }) {
  return <h2 className="text-center text-3xl font-bold text-amber-400">{children}</h2>;
}

function CardImage({ src, title, subtitle }) {
  return (
    <div className="bg-white rounded-lg p-3 ">
  <img
    src={src}
    alt={title}
    className="w-full h-[260px] object-cover rounded-md shadow-[0_8px_25px_rgba(0,0,0,0.50)]"
  />

  <div className="p-4 text-center">
    <div className="text-xl font-bold text-black">{title}</div>
    {subtitle && (
      <div className="text-sm text-black mt-1">{subtitle}</div>
    )}
  </div>
</div>

  );
}

function ReadMoreLink() {
  return (
    <button className="inline-flex items-center gap-2 text-black font-semibold underline underline-offset-4 hover:text-black/80">
      Read More <span>↗</span>
    </button>
  );
}

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

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919811859288"
      target="_blank"
      rel="noreferrer"
      className="fixed left-6 bottom-6 z-50 h-16 w-16 rounded-full bg-green-500 grid place-items-center shadow-card"
      aria-label="WhatsApp"
    >
      <span className="text-white text-2xl font-black"><i class="fa-brands fa-whatsapp"></i></span>
    </a>
  );
}
function Marquee() {
  const text = "MADE IN INDIA, TRUSTED GLOBALLY";

  return (
    <div className="relative overflow-hidden bg-[#2b2b1f]">
      <div className="flex w-[200%] marquee-anim">
        <div className="flex w-1/2 justify-around">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="py-3 text-amber-400 font-black tracking-widest text-xl whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>

        <div className="flex w-1/2 justify-around">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={`b-${i}`} className="py-3 text-amber-400 font-black tracking-widest text-xl whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}



function ScrollTopFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-6 bottom-6 z-50 h-16 w-16 rounded-full bg-white grid place-items-center border-4 border-green-500 shadow-card"
      aria-label="Scroll to top"
    >
      <span className="text-green-600 text-3xl font-black">↑</span>
    </button>
  );
}

/* ✅ HERO SLIDER COMPONENT */
function HeroSlider() {
  const slides = useMemo(() => [hero1, hero2, hero3, hero4, hero5], []);
  const [index, setIndex] = useState(0);

  // ✅ Auto slide after 3 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setIndex((p) => (p + 1) % slides.length);

  return (
    <section className="relative w-full">
      {/* ✅ Full size like website */}
      <div className="relative w-full h-[560px] md:h-[680px] overflow-hidden">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={src} alt={`Hero ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12  text-white text-5xl grid place-items-center "
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12  text-white text-5xl grid place-items-center "
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-black">
      {/* ✅ HERO SLIDER (5 images + autoslide 3s + full size) */}
      <HeroSlider />

      {/* COMPANY INTRO */}
      <section className="bg-ink-900 text-gray-400">
          <Marquee />
          <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-center">
            <div className="flex justify-center p-5">
              <img
                src={years}
                alt="50 years"
                className="w-[320px] h-auto"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>

            <div className="p-4">
              <div className="text-amber-400 text-xl font-bold mb-6">
                Speedcrafts Private Limited
              </div>
              <p className="text-white/90 leading-7">
                <b>Speedcrafts</b>, established in 1971, is a distinguished Indian Manufacturer
                specializing in high-performance Road and Building Construction Machinery. With over
                five decades of engineering excellence and continuous supplies to over 60 countries,
                our product range includes Asphalt Drum Mix Plants, Mobile Hot Mix Plants, Asphalt
                Batch Mix Plants, Concrete Batching Plants and more.
              </p>
              <p className="text-white/90 leading-7 mt-4">
                Being an ISO 9001 & CE certified organisation, our equipment is globally trusted
                for its reliability, efficiency, and exceptional performance in demanding environments.
              </p>
              <div className="text-amber-400 text-xl font-bold mt-6">
                Building infrastructure........Connecting the Future
              </div>
            </div>
          </div>
       
      </section>

      {/* HOT SELLING PRODUCTS */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4">
          <SectionTitle>Hot Selling Products</SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <CardImage src={one} title="Asphalt Batch Mix Plant" subtitle="(As per European Specs.)" />
            <CardImage src={two} title="Asphalt Drum Mix Plant" subtitle="(As per International Specs.)" />
            <CardImage src={three} title="Asphalt Drum Mix Plant" subtitle="(As per American Specs.)" />
          </div>
        </div>
      </section>

      {/* CHAIRMAN MESSAGE */}
      <section className="relative">
        <div className="relative">
          <img src={background} alt="Chairman" className="w-full h-auto object-cover" />
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-4xl px-4 text-center text-white">
              <div className="text-amber-400 text-4xl font-bold mb-20">Chairman&apos;s Message:</div>
              <p className="mt-1 text-xl leading-9">
                “We are a world-class engineering equipment manufacturer, committed to delivering
                top-quality products, services and solutions to our customers.”
              </p>
              <button className="mt-6 inline-flex rounded bg-amber-500 px-6 py-3 font-bold text-white cursor-pointer ">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EXHIBITIONS WORLDWIDE */}
      <section className="bg-white py-12">
        <div className="mx-auto px-4">
          <SectionTitle>Exhibitions Worldwide</SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <CardImage src={expo1} title="2025 – Bauma Germany, Munich" />
            <CardImage src={expo2} title="2023 – Buildexpo, Kenya" />
            <CardImage src={expo3} title="2023 – Buildexpo, Tanzania" />
          </div>
        </div>
      </section>

      {/* MISSION / COUNTRIES / QUALITY */}
      <section className="bg-white py-12">
        <div className="mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded overflow-hidden">
              <img src={Untitled1} alt="Mission" className="h-auto w-full object-cover" />
              <div className="p-1 text-center">
                <div className="text-amber-400 text-xl font-bold">MISSION &amp; VISION</div>
                <p className="mt-2 text-black/95 leading-7">
                  At Speedcrafts, our mission is to deliver the highest quality road construction
                  machinery and solutions that enhance the efficiency, safety, and reliability of
                  infrastructure projects worldwide.
                </p>
                <div className="mt-1">
                  <ReadMoreLink />
                </div>
              </div>
            </div>

            <div className="bg-white rounded">
              <img src={country} alt="Countries Served" className="h-auto w-full rounded object-cover" />
            </div>

            <div className="bg-white  rounded ">
              <img src={scaled} alt="Quality" className="h-auto w-full rounded object-cover" />
              <div className="p-1 text-center">
                <div className="text-amber-400 text-xl font-bold">QUALITY POLICY</div>
                <p className="mt-2 text-black/95 leading-7">
                  Our vision is to be a global leader in the road construction machinery industry,
                  renowned for our innovation, quality, and customer-centric approach.
                </p>
                <div className="mt-1">
                  <ReadMoreLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTERS ROW */}
      <section className="bg-white py-12 border-t border-black/10">
        <div className="mx-auto  px-4">
          <div className="grid md:grid-cols-4 gap-10 items-center">
            <Counter icon={helmet} value="350+" label="Engineers & Workers" />
            <Counter icon={globe} value="5000+" label="Global Clients" />
            <Counter icon={award} value="45+" label="Awards Received" />
            <Counter icon={handshake} value="17100+" label="Machines Delivered" />
          </div>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <WhatsAppFloat />
      <ScrollTopFloat />
    </div>
  );
}
