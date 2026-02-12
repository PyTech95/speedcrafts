import React from "react";
import Section from "../components/Section.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";

export default function Contact() {
  return (
    <Section title="Contact Us" subtitle="Reach out via phone/email or submit the enquiry form.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="font-bold text-lg">Office</h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Speedcrafts Pvt. Ltd.<br />
            Unitech Business Zone, Tower C, Unit No. 804<br />
            Nirvana Country, Sector 50, Gurgaon - 122 001, India
          </p>
          <p className="mt-3 text-sm text-slate-300">
            <a className="hover:text-white" href="tel:+919650089228">+91 9650089228</a><br />
            <a className="hover:text-white" href="tel:+919811859288">+91 9811859288</a><br />
            <a className="hover:text-white" href="mailto:info@speedcrafts.com">info@speedcrafts.com</a>
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <EnquiryForm />
        </div>
      </div>
    </Section>
  );
}
