import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone, Mail, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';
import { footerProducts, contactInfo } from '../mock';
import { useToast } from '../hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', requirement: ''
  });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: 'Please fill required fields', description: 'Name and email are required.' });
      return;
    }
    toast({ title: 'Enquiry submitted', description: 'Thank you. Our team will reach out to you shortly.' });
    setForm({ name: '', email: '', phone: '', country: '', requirement: '' });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-zinc-300">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #f5b218 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />
      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Our Products
            </h3>
            <div className="h-1 w-16 bg-[#f5b218] rounded-full mb-6" />
            <ul className="space-y-3">
              {footerProducts.map((p) => (
                <li key={p.name}>
                  <Link
                    to={p.href}
                    className="flex items-center gap-2 text-zinc-300 hover:text-[#f5b218] transition-colors group"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#f5b218] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Contact Us
            </h3>
            <div className="h-1 w-16 bg-[#f5b218] rounded-full mb-6" />
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-md bg-[#f5b218] text-black shrink-0 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-zinc-300 leading-relaxed">
                  <div className="font-bold text-white">{contactInfo.company}</div>
                  {contactInfo.addressLines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
              </div>
              {contactInfo.phones.map((ph) => (
                <a
                  key={ph}
                  href={`tel:${ph.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 hover:text-[#f5b218] transition-colors"
                >
                  <div className="w-9 h-9 rounded-md bg-[#f5b218] text-black shrink-0 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{ph}</span>
                </a>
              ))}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 hover:text-[#f5b218] transition-colors"
              >
                <div className="w-9 h-9 rounded-md bg-[#f5b218] text-black shrink-0 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 pt-3">
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1877F2] hover:opacity-80 flex items-center justify-center text-white transition-opacity">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Youtube" className="w-9 h-9 rounded-full bg-[#FF0000] hover:opacity-80 flex items-center justify-center text-white transition-opacity">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#0A66C2] hover:opacity-80 flex items-center justify-center text-white transition-opacity">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#1DA1F2] hover:opacity-80 flex items-center justify-center text-white transition-opacity">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Enquire Now
            </h3>
            <div className="h-1 w-16 bg-[#f5b218] rounded-full mb-6" />
            <form onSubmit={submit} className="space-y-3">
              <input name="name" value={form.name} onChange={handle} placeholder="Name" className="w-full bg-white text-zinc-900 px-4 py-3 rounded-sm outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email" className="w-full bg-white text-zinc-900 px-4 py-3 rounded-sm outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="phone" value={form.phone} onChange={handle} placeholder="Phone" className="w-full bg-white text-zinc-900 px-4 py-3 rounded-sm outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="country" value={form.country} onChange={handle} placeholder="Country" className="w-full bg-white text-zinc-900 px-4 py-3 rounded-sm outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <textarea name="requirement" value={form.requirement} onChange={handle} placeholder="Your Requirement" rows={3} className="w-full bg-white text-zinc-900 px-4 py-3 rounded-sm outline-none focus:ring-2 focus:ring-[#f5b218] resize-none" />
              <button type="submit" className="px-7 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 text-center text-sm text-zinc-400">
          Copyright © 2025 Speedcrafts. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
