
import React from "react";
import bg from "../images/Untitled-design-10.webp";
import helmet from "../images/1-4.png";
import globe from "../images/2-4.png";
import award from "../images/3-3.png";
import handshake from "../images/4-2.png";

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

export default function Contact() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div
        className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Contact Us
          </h1>
          <p className="mt-4 text-xl">
            Home / <span className="text-yellow-400">Contact Us</span>
          </p>
        </div>
      </div>

      {/* ================= CONTACT INFO ================= */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          {/* Outside India */}
          <div className="flex items-start gap-4">
            <div className="bg-black p-6 rounded-xl">
              <i className="fas fa-phone text-yellow-400 text-3xl"></i>
            </div>
            <div>
              <h3 className="text-xl  text-black font-semibold">
                Sales (Outside India)
              </h3>
              <p className="mt-2 text-black font-semibold">+91-9811859288 (Kushagra)</p>
              <p className="text-black font-semibold">+91-9650089228 (Shashank)</p>
            </div>
          </div>

          {/* India */}
          <div className="flex items-start gap-4">
            <div className="bg-black p-6 rounded-xl">
              <i className="fas fa-mobile-alt text-yellow-400 text-3xl"></i>
            </div>
            <div>
              <h3 className="text-xl text-black font-semibold">
                Sales (India)
              </h3>
              <p className="mt-2 text-black font-semibold">+91 8800293637 (Sanjeev)</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-black p-6 rounded-xl">
              <i className="fas fa-envelope text-yellow-400 text-3xl"></i>
            </div>
            <div>
              <h3 className="text-xl text-black font-semibold">Email</h3>
              <p className="mt-2 text-black font-semibold">info@speedcrafts.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= OUR OFFICES ================= */}
      <div className="bg-[#1f1f1f] text-white py-20">
        <h2 className="text-4xl text-center mb-16">Our Offices</h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          {/* Marketing HQ */}
          <div className="border-white border-2">
            <div className="p-8">
              <h3 className="text-yellow-400 text-2xl font-semibold mb-4">
                Marketing Headquarters
              </h3>
              <p>Speedcrafts Pvt. Ltd.</p>
              <p>Unitech Business Zone</p>
              <p>Tower C, Unit No. 804</p>
              <p>Nirvana Country, Sector 50</p>
              <p>Gurgaon-122001, Delhi NCR, INDIA</p>
            </div>

            <iframe
              className="w-full h-[250px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1796711.711079284!2d74.63287353515624!3d28.413144152002783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23a8a18f426b%3A0x17ad17905f030c75!2sBusiness%20Zone!5e0!3m2!1sen!2sin!4v1771257735301!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Corporate Office */}
          <div className="border-white border-2">
            <div className="p-8">
              <h3 className="text-yellow-400 text-2xl font-semibold mb-4">
                Corporate Office
              </h3>
              <p>Speedcrafts Pvt. Ltd.</p>
              <p>Layak Bhawan</p>
              <p>Boring Canal Road</p>
              <p>Nr. Panchmukhi Hanuman Mandir</p>
              <p>Patna – 800 001, INDIA</p>
            </div>

            <iframe
              className="w-full h-[250px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d357189.9590913944!2d85.07936614142294!3d25.780556416371713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed598f9c0d2573%3A0xf9adda78ea3ea5ea!2sSPEEDCRAFTS%20layak%20Bhawan!5e0!3m2!1sen!2sus!4v1771257970797!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* East Zone */}
          <div className="border-white border-2">
            <div className="p-8">
              <h3 className="text-yellow-400 text-2xl font-semibold mb-4">
                East Zone Office
              </h3>
              <p>Speedcrafts Pvt. Ltd.</p>
              <p>Neelamber Building</p>
              <p>Flat No. 5F, 5th Floor</p>
              <p>28-B Shakespeare Sarani</p>
              <p>Kolkata – 700 017, INDIA</p>
            </div>

            <iframe
              className="w-full h-[250px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1886680.1249330342!2d88.355256!3d22.54459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277199f3c9e25%3A0x55ac5f89a4abd10e!2sNo.%205F%2C%205th%20Floor%2C%2028%20B%2C%20Shakespeare%20Sarani%2C%20Elgin%2C%20Kolkata%2C%20West%20Bengal%20700017%2C%20India!5e0!3m2!1sen!2sus!4v1771258131436!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>

      {/* ================= MANUFACTURING UNITS ================= */}
      <div className="bg-[#1f1f1f] text-white py-20">
        <h2 className="text-4xl text-center mb-16">Manufacturing Units</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          {/* Unit 1 */}
          <div className="border-white border-2">
            <div className="p-8">
              <h3 className="text-yellow-400 text-2xl font-semibold mb-4">
                Unit - I
              </h3>
              <p>Speedcrafts Pvt. Ltd.</p>
              <p>Layak Enclaves</p>
              <p>Sahay Nagar</p>
              <p>Phulwarisharif</p>
              <p>Patna – 801 505, INDIA</p>
            </div>

            <iframe
              className="w-full h-[250px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1842666.2044654156!2d85.075934!3d25.573083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a98d335cd007%3A0xdf98e92a01dbd3fd!2sAlba%20Enclave!5e0!3m2!1sen!2sus!4v1771258213210!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Unit 2 */}
          <div className="border-white border-2">
            <div className="p-8">
              <h3 className="text-yellow-400 text-2xl font-semibold mb-4">
                Unit - II
              </h3>
              <p>Speedcrafts Pvt. Ltd.</p>
              <p>Plot No. 1A</p>
              <p>Sector-7</p>
              <p>IIE (SIDCUL)</p>
              <p>Haridwar, Uttarakhand, INDIA</p>
            </div>

            <iframe
              className="w-full h-[250px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1769692.3073590826!2d75.62061165624998!3d29.96706170000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949c59fe2e99d%3A0x39eebb8bab3ed0a1!2sSidcul%20haridwar!5e0!3m2!1sen!2sus!4v1771258373375!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
            ></iframe>
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
};

