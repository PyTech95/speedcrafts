import React from "react";
{/* <i class="fas fa-map-marker-alt"></i> */}
function FooterTitle({ children }) {
  return (
    <div className="text-white text-2xl font-extrabold">
      {children}
      <div className="mt-3 h-[3px] w-20 bg-amber-400" />
    </div>
  );
}

function FooterLink({ children }) {
  return (
    <a href="#" className="text-white/90 hover:text-white block py-1">
      ↗ {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer-dots text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Our Products */}
          <div>
            <FooterTitle>Our Products</FooterTitle>
            <div className="mt-6 space-y-1 text-sm">
              <FooterLink>Asphalt Batch Mix Plant</FooterLink>
              <FooterLink>Asphalt Drum Mix Plant</FooterLink>
              <FooterLink>Mobile Asphalt Mixing Plant</FooterLink>
              <FooterLink>Wet Mix Macadam Plant</FooterLink>
              <FooterLink>Inline Concrete Batching Plant</FooterLink>
              <FooterLink>Portable Concrete Plant</FooterLink>
              <FooterLink>Bitumen Decanter</FooterLink>
              <FooterLink>Chip Spreader</FooterLink>
              <FooterLink>Road Sweeper</FooterLink>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <FooterTitle>Contact Us</FooterTitle>

            <div className="mt-6 text-sm space-y-4">
              <div className="flex gap-3">
                <div className="h-9 w-9 rounded bg-amber-400 grid place-items-center text-black font-black">
                 <i class="fas fa-map-marker-alt"></i>
                </div>
                <div className="leading-6">
                  <div className="font-bold">Speedcrafts Pvt. Ltd.</div>
                  <div className="text-white/85">Unitech Business Zone</div>
                  <div className="text-white/85">Tower C, Unit No. 804</div>
                  <div className="text-white/85">Nirvana Country, Sector 50</div>
                  <div className="text-white/85">Gurgaon - 122 001, INDIA</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded bg-amber-400 grid place-items-center text-black font-black">
                 <i class="fa-sharp fa-solid fa-phone"></i>
                </div>
                <div className="text-white/90">+91 9650089228</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded bg-amber-400 grid place-items-center text-black font-black">
                <i class="fa-sharp fa-solid fa-phone"></i>
                </div>
                <div className="text-white/90">+91 9811859288</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded bg-amber-400 grid place-items-center text-black font-black">
                  <i class="fa-sharp fa-solid fa-envelope"></i>
                </div>
                <div className="text-white/90">info@speedcrafts.com</div>
              </div>

              {/* Social icons */}
             <div className="flex gap-3 pt-2">
            {[
              {
                icon: "fa-brands fa-facebook-f",
                link: "https://www.facebook.com/Speedcrafts.Limited/",
              },
              {
                icon: "fa-brands fa-youtube",
                link: "http://www.youtube.com/@speedcrafts",
              },
              {
                icon: "fa-brands fa-linkedin-in",
                link: "https://www.linkedin.com/company/speedcrafts?originalSubdomain=in",
              },
              {
                icon: "fa-brands fa-x-twitter",
                link: "https://x.com/SpeedcraftsLtd",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 rounded-full bg-white/15 grid place-items-center
                           hover:bg-white/25 transition"
              >
                <i className={`${item.icon} text-white text-lg`}></i>
              </a>
            ))}
          </div>


            </div>
          </div>

          {/* Enquire Now */}
          <div>
            <FooterTitle>Enquire Now</FooterTitle>

            <form className="mt-6 space-y-4">
              {["Name", "Email", "Phone", "Country"].map((ph) => (
                <input
                  key={ph}
                  placeholder={ph}
                  className="w-full h-12 bg-white text-black px-4 outline-none"
                />
              ))}

              <textarea
                placeholder="Your Requirement"
                className="w-full bg-white text-black px-4 py-3 outline-none min-h-[120px]"
              />

              <button
                type="button"
                className="bg-white text-black font-semibold px-8 py-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#1e2a36] text-center py-4 text-sm text-white/90">
        Copyright © 2025 Speedcrafts. All Rights Reserved.
      </div>
    </footer>
  );
}
