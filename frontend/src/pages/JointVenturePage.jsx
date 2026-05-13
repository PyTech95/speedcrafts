import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Handshake, Factory, Lightbulb, Globe2, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const opportunities = [
  { icon: Factory, title: 'Manufacturing Tie-ups', desc: 'License our designs or jointly manufacture asphalt and concrete plants for your home market.' },
  { icon: Lightbulb, title: 'Technology Licensing', desc: 'Bring your specialised technology or component to global markets through our manufacturing capabilities.' },
  { icon: Globe2, title: 'Geographical Partnerships', desc: 'Distribution and support tie-ups for territories where we are looking to deepen our presence.' },
  { icon: Handshake, title: 'Strategic Investments', desc: 'Joint investments in new manufacturing facilities, R&D programs or sister verticals.' }
];

const JointVenturePage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '', interest: 'Manufacturing Tie-up', message: ''
  });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: 'Please fill required fields', description: 'Name and email are required.' });
      return;
    }
    toast({
      title: 'Proposal received',
      description: 'Thank you. Our leadership team will respond shortly.'
    });
    setForm({
      name: '', company: '', email: '', phone: '', country: '', interest: 'Manufacturing Tie-up', message: ''
    });
  };
  return (
    <PageLayout>
      <PageBanner
        title="Joint Venture / Collaboration"
        breadcrumbs={[{ label: 'Business' }, { label: 'Joint Venture / Collaboration' }]}
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d99a0e]" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Let&apos;s Build Together
          </h2>
          <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          <p className="text-zinc-600 leading-relaxed mt-5 max-w-[820px] mx-auto">
            Speedcrafts is open to strategic partnerships that expand our reach, sharpen our
            technology or strengthen our supply chain. If you are an OEM, technology provider,
            distributor or investor with an aligned vision, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map(({ icon: Icon, title, desc }) => (
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
              Submit a Proposal
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 mt-5">
              Share a brief overview and our leadership team will follow up under NDA if there is a
              good fit.
            </p>
          </div>
          <form onSubmit={submit} className="bg-white rounded-xl shadow-xl p-7 md:p-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handle} placeholder="Full Name *" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="company" value={form.company} onChange={handle} placeholder="Company / Organisation" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email *" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="phone" value={form.phone} onChange={handle} placeholder="Phone" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="country" value={form.country} onChange={handle} placeholder="Country" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <select name="interest" value={form.interest} onChange={handle} className="w-full border border-zinc-200 bg-white px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]">
                <option>Manufacturing Tie-up</option>
                <option>Technology Licensing</option>
                <option>Geographical Partnership</option>
                <option>Strategic Investment</option>
                <option>Other</option>
              </select>
            </div>
            <textarea name="message" value={form.message} onChange={handle} placeholder="Briefly describe your proposal and the value you bring..." rows={5} className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218] resize-none" />
            <button type="submit" className="inline-flex items-center gap-2 px-7 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors">
              <Send className="w-4 h-4" /> Send Proposal
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default JointVenturePage;
