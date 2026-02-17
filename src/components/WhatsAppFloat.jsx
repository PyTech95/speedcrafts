import { useState } from "react";
import logo from "../images/NewLogo.png";
import bgPattern from "../images/whatsapp-bg.jpg"; 

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-6 bottom-6 z-50 h-16 w-16 rounded-full bg-green-500 grid place-items-center shadow-xl hover:scale-110 transition duration-300"
      >
        <i className="fa-brands fa-whatsapp text-white text-3xl"></i>
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed left-6 bottom-24 w-[320px] h-[520px] rounded-xl shadow-lg overflow-hidden z-50">

          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="h-8" />
              <div>
                <h3 className="font-semibold text-base">Speedcrafts</h3>
                <p className="text-sm text-green-500 opacity-80">Online</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white text-xl font-bold cursor-pointer"
            >
              ×
            </button>
          </div>

          {/* Chat Body */}
            <div
              className="p-6 h-[320px] flex items-start"
              style={{
                backgroundImage: `url(${bgPattern})`,
                backgroundSize: "cover",
              }}
            >
              <div className="relative max-w-[85%]">

                {/* Message Bubble */}
                <div className="bg-[#d6e872] text-[#111b21] text-[15px] leading-6 px-4 py-3 rounded-[8px] shadow-sm">
                  Welcome to Speedcrafts! <br />
                  We manufacture and supply Construction Machines Worldwide.
                </div>

                {/* Perfect WhatsApp Tail */}
                <div className="absolute left-[-8px] top-[6px] w-5 h-6 bg-[#d6e872] rotate-45"></div>

              </div>
            </div>

          {/* Start Chat Section */}
          <div className="bg-white p-6 text-center">
            <a
              href="https://wa.me/919811859288?text=Hello%20Speedcrafts"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-green-600 text-white px-6 py-2 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Start Chat
            </a>

            <div className="mt-4 text-gray-400 text-sm flex items-center justify-center gap-1">
              <span className="text-lg">🤖</span> Autachat
            </div>
          </div>
        </div>
      )}
    </>
  );
}
