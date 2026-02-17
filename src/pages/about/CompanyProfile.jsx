import React from "react";
import years from "../../images/50years.png";
import bg from "../../images/Untitled-design-10.webp";
import helmet from "../../images/1-4.png";
import globe from "../../images/2-4.png";
import award from "../../images/3-3.png";
import handshake from "../../images/4-2.png";

/* -------------------- Timeline Data -------------------- */
const timeline = [
  {
    year: "1971",
    title: "Humble Beginnings in Patna",
    text:
      "Speedcrafts began its journey in 1971 from Patna, India, with a focused vision to deliver high quality and reliable Construction Equipment. Founded with limited resources but unlimited ambition, our early days were defined by dedication, hands on innovation, and a deep understanding of the infrastructure sector’s needs. This modest beginning laid the foundation for a future global enterprise.",
  },
  {
    year: "1977",
    title: "Strong Presence in the Indian Market",
    text:
      "By 1977, our commitment to quality and service had helped us secure a significant presence across India. Our machines became known for their durability, efficiency, and ease of use, quickly earning the trust of contractors and construction companies Nationwide. Speedcrafts was now a recognized and respected name in the Indian construction landscape.",
  },
  {
    year: "1982",
    title: "First Step into International Markets",
    text:
      "In 1982, we marked a major milestone by entering International Markets, starting with neighboring countries like Nepal, Bangladesh, Bhutan and Sri Lanka. These initial exports not only showcased our growing capability but also validated the global potential of Indian Engineered equipment. It was the beginning of our journey on the international stage.",
  },
  {
    year: "1989",
    title: "Global Expansion Across Continents",
    text:
      "By 1989, Speedcrafts had established a strong global footprint. We successfully expanded into the Middle East, Africa, Southeast Asia, Australia, and both North and South America. Our machines were being used in a wide variety of climates and terrains, proving their strength, versatility, and reliability on a global scale. This period marked our emergence as a truly International Brand.",
  },
  {
    year: "1995",
    title: "Advancing Technology, Elevating Standards",
    text:
      "With an eye on the future, 1995 saw Speedcrafts investing heavily in technology upgrades. We enhanced our product designs, integrated advanced manufacturing techniques, and began incorporating more automation and precision engineering into our equipment. These improvements allowed us to better meet the changing demands of the global market.",
  },
  {
    year: "2003",
    title: "New Manufacturing Facility in Haridwar",
    text:
      "In 2003, we expanded our manufacturing capacity by procuring land and establishing a new factory in Haridwar, India. This strategic move not only helped decentralize operations but also enabled us to cater more efficiently to northern and western regions of India, while scaling up production for export demands.",
  },
  {
    year: "2005",
    title: "Export Boom and Global Trust",
    text:
      "Our International presence grew rapidly by 2005, with exports reaching new heights. A growing number of global clients placed repeat orders, trusting us not just for product quality but for consistent after-sales support. Our name became synonymous with reliability in Road Construction Machinery Worldwide.",
  },
  {
    year:"2009",
    title:"Infrastructure Expansion in Patna",
    text:"To keep pace with rising demand, we expanded our existing infrastructure in Patna by an additional 50,000 sq. ft. This expansion allowed us to boost production capabilities, improve delivery timelines, and maintain the high quality standards, which we were trusted for.",
  },
  {
    year:"2021",
    title:"Celebrating 50 Years of Excellence",
    text:"Speedcrafts proudly celebrated its 50th anniversary in 2021, a milestone that reflects five decades of innovation, growth, and partnership. From our humble beginnings in Patna to becoming a Global Force, we’ve contributed to infrastructure projects across continents and supported clients in building the future.",
  },
  {
    year: "2024",
    title: "Diversifying and Expanding Horizons",
    text:
      "In 2024, leveraging our expansive 15 acre land in the heart of Patna, we diversified our operations by launching a state of the art Cricket Sports Academy on our premises, promoting sports and community development. Additionally, we leased a 20,000 sq. ft. built-up shed to Amazon, for their Warehouse logistics and distribution operations, which reflects our commitment to fostering strong business partnerships and utilizing our infrastructure for multi-sector growth.",
  },
  {
    year: "2026",
    title:"Future Ready - Expansion and Innovation",
    text:"Today, we continue to push boundaries with a strong focus on R&D, automation, and energy efficient technologies. In 2025, we are expanding our manufacturing capacity once again with an additional 50,000 sq. ft. facility, expected to be fully operational by next year. This growth reflects our commitment to serving the evolving needs of the Global Infrastructure Sector.",
  },
];

/* -------------------- Small UI Parts -------------------- */
function CalendarIcon({ variant = "amber" }) {
  const bgClass = variant === "blue" ? "bg-sky-500" : "bg-amber-400";
  return (
    <div className={`h-11 w-11 rounded ${bgClass} grid place-items-center shadow-md`}>
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
        <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm14 8H3v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V10Z" />
      </svg>
    </div>
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

function TimelineCard({ year, title, text, side = "right" }) {
  const desktopLeft = side === "left";

  return (
    <div className="relative bg-[#f6e9dc] px-6 sm:px-8 py-7 sm:py-8 shadow-sm">
      {/* MOBILE notch: always left */}
      <div className="absolute top-10 -left-[14px] w-0 h-0 border-y-[14px] border-y-transparent border-r-[14px] border-r-[#f6e9dc] lg:hidden" />

      {/* DESKTOP notch: side-based */}
      {desktopLeft ? (
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-[14px] w-0 h-0 border-y-[14px] border-y-transparent border-l-[14px] border-l-[#f6e9dc]" />
      ) : (
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-[14px] w-0 h-0 border-y-[14px] border-y-transparent border-r-[14px] border-r-[#f6e9dc]" />
      )}

      {/* MOBILE content */}
      <div className="lg:hidden">
        <div className="text-3xl font-semibold text-slate-900">{year}</div>
        <div className="mt-1 text-xl font-bold text-amber-400">{title}</div>
        <p className="mt-1 text-black/80 leading-8 text-base font-bold">{text}</p>
      </div>

      {/* DESKTOP content */}
      <div className="hidden lg:block text-center">
        <div className="text-amber-400 text-xl font-bold mb-5">{title}</div>
        <p className="text-black/80 leading-8 text-base font-bold">{text}</p>
      </div>
    </div>
  );
}

/* -------------------- Timeline Section -------------------- */
function OurJourneyTimeline() {
  return (
    <section className="bg-[#fbf7ef]">
      <div className="mx-auto  px-1 py-6">
        <h2 className="text-center text-5xl font-medium text-slate-900">Our Journey</h2>

        <div className="relative mt-16">
          {/* MOBILE: left vertical line */}
          <div className="lg:hidden absolute left-6 top-0 h-full w-[3px] bg-blue-700" />

          {/* DESKTOP: centered vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-blue-700" />

          <div className="flex flex-col gap-16">
            {timeline.map((t, idx) => {
              const isLeftCardDesktop = idx % 2 === 1;

              return (
                <div key={t.year} className="relative">
                  {/* ===== MOBILE ROW ===== */}
                  <div className="lg:hidden grid grid-cols-[72px_1fr] gap-4 items-start">
                    <div className="relative">
                      <div className="relative z-10 ml-[8px]">
                        <CalendarIcon variant={idx % 2 === 0 ? "blue" : "amber"} />
                      </div>
                    </div>

                    <TimelineCard year={t.year} title={t.title} text={t.text} />
                  </div>

                  {/* ===== DESKTOP ROW (alternate) ===== */}
                  <div className="hidden lg:grid grid-cols-[1fr_90px_1fr] items-center gap-6">
                    {/* LEFT */}
                    <div className={`${isLeftCardDesktop ? "" : "text-right"}`}>
                      {isLeftCardDesktop ? (
                        <TimelineCard
                          year={t.year}
                          title={t.title}
                          text={t.text}
                          side="left"
                        />
                      ) : (
                        <div className="text-right text-4xl font-semibold text-slate-900">
                          {t.year}
                        </div>
                      )}
                    </div>

                    {/* CENTER ICON */}
                    <div className="flex flex-col items-center">
                      <div className="relative z-10">
                        <CalendarIcon />
                      </div>
                      <div className="relative z-10 mt-3 h-4 w-4 rounded-full bg-amber-400 border-4 border-white shadow" />
                    </div>

                    {/* RIGHT */}
                    <div>
                      {isLeftCardDesktop ? (
                        <div className="text-left text-4xl font-semibold text-slate-900">
                          {t.year}
                        </div>
                      ) : (
                        <TimelineCard
                          year={t.year}
                          title={t.title}
                          text={t.text}
                          side="right"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Final: Company Profile + Timeline -------------------- */
export default function CompanyProfile() {
  return (
    <div className="bg-white">
      {/* ===== HERO TOP BANNER ===== */}
      <div className="relative h-auto md:h-[320px] overflow-hidden">
        <img src={bg} alt="Company Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold">Company Profile</h1>
            <p className="mt-2 text-lg md:text-base font-bold">
              Home / <span className="text-amber-400">Company Profile</span>
            </p>
          </div>
        </div>
      </div>

      {/* ===== COMPANY INTRO SECTION WITH BACKGROUND IMAGE ===== */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative mx-auto py-2 lg:py-4">
          <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-center">
            {/* LEFT SIDE IMAGE */}
            <div className="flex justify-center p-1">
              <img
                src={years}
                alt="50 years"
                className="w-[280px] h-auto"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>

            {/* RIGHT SIDE TEXT */}
            <div>
              <div className="text-amber-400 text-2xl font-bold mb-6">
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
                Being an ISO 9001 & CE certified organisation, our equipment is globally trusted for
                its reliability, efficiency, and exceptional performance in demanding environments.
              </p>

              <p className="text-white/90 leading-7 mt-4">
                At Speedcrafts, innovation drives us forward. We are committed to delivering
                state-of-the-art solutions that meet the dynamic needs of the construction industry,
                ensuring customer satisfaction and long-term partnerships worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurJourneyTimeline />
      <section className="bg-[#fbf7ef] py-12">
          <div className="mx-auto  px-4">
            <div className="grid md:grid-cols-4 gap-10 items-center">
              <Counter icon={helmet} value="350+" label="Engineers & Workers" />
              <Counter icon={globe} value="5000+" label="Global Clients" />
              <Counter icon={award} value="45+" label="Awards Received" />
              <Counter icon={handshake} value="17100+" label="Machines Delivered" />
            </div>
          </div>
      </section>
   <WhatsAppFloat />
  <ScrollTopFloat />
    </div>
  );
}
