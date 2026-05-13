import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Handshake, MapPin, TrendingUp, Award, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const benefits = [
  { icon: Award, title: 'Established Brand', desc: 'Sell a brand trusted by 5,000+ customers in 60+ countries since 1971.' },
  { icon: TrendingUp, title: 'Attractive Margins', desc: 'Competitive dealer pricing with growth-linked incentive structures.' },
  { icon: MapPin, title: 'Protected Territory', desc: 'Defined territory rights so you can invest in your market with confidence.' },
  { icon: Handshake, title: 'Full Support', desc: 'Sales training, marketing collaterals, technical support and lead sharing.' }
];

const DealershipPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '', city: '', business: '', experience: '', message: ''
  });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast({ title: 'Please fill required fields', description: 'Name, email and phone are required.' });
      return;
    }
    toast({
      title: 'Application submitted',
      description: 'Thank you. Our channel team will reach out within 3 working days.'
    });
    setForm({
      name: '', company: '', email: '', phone: '', country: '', city: '', business: '', experience: '', message: ''
    });
  };
  return (
    <PageLayout>
      <PageBanner title="Become a Dealer" breadcrumbs={[{ label: 'Business' }, { label: 'Dealership' }]} />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d99a0e]" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Partner With Speedcrafts
          </h2>
          <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          <p className="text-zinc-600 leading-relaxed mt-5 max-w-[820px] mx-auto">
            We are growing our authorised dealer network across India and overseas. If you have a
            background in construction equipment, infrastructure projects or industrial sales, we
            invite you to apply for a Speedcrafts dealership.
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white border border-zinc-200 hover:border-[#f5b218] hover:shadow-xl transition-all rounded-xl p-7">
              <div className="w-14 h-14 rounded-lg bg-[#f5b218] text-black flex items-center justify-center mb-4">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {title}
              </h3>
              <p className="text-zinc-600 leading-relaxed text-[15px]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20 bg-zinc-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d99a0e]" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Apply for Dealership
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 mt-5">
              Fill out the form below and our channel team will get back to you within 3 working
              days.
            </p>
          </div>
          <form onSubmit={submit} className="bg-white rounded-xl shadow-xl p-7 md:p-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handle} placeholder="Full Name *" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="company" value={form.company} onChange={handle} placeholder="Company Name" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email *" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="phone" value={form.phone} onChange={handle} placeholder="Phone *" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="country" value={form.country} onChange={handle} placeholder="Country" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="city" value={form.city} onChange={handle} placeholder="City / Region" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="business" value={form.business} onChange={handle} placeholder="Existing Business / Trade" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="experience" value={form.experience} onChange={handle} placeholder="Years of Industry Experience" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
            </div>
            <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us about your sales infrastructure, network and territory you wish to cover..." rows={4} className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218] resize-none" />
            <button type="submit" className="inline-flex items-center gap-2 px-7 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors">
              <Send className="w-4 h-4" /> Submit Application
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default DealershipPage;
