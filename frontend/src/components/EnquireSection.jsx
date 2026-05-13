import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { Send } from 'lucide-react';

const EnquireSection = ({ productTitle = '' }) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', subject: productTitle, message: ''
  });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: 'Please fill required fields', description: 'Name and email are required.' });
      return;
    }
    toast({ title: 'Enquiry submitted', description: 'Thank you. Our team will reach out to you shortly.' });
    setForm({ name: '', email: '', phone: '', country: '', subject: productTitle, message: '' });
  };
  return (
    <section className="bg-zinc-50 py-16">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d99a0e]" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Enquire Now
          </h2>
          <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
        </div>
        <form onSubmit={submit} className="bg-white p-6 md:p-10 rounded-xl shadow-lg space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handle} placeholder="Name *" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
            <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email *" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
            <input name="phone" value={form.phone} onChange={handle} placeholder="Phone" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
            <input name="country" value={form.country} onChange={handle} placeholder="Country" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
          </div>
          <input name="subject" value={form.subject} onChange={handle} placeholder="Subject" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
          <textarea name="message" value={form.message} onChange={handle} placeholder="Your Requirement" rows={4} className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218] resize-none" />
          <button type="submit" className="inline-flex items-center gap-2 px-7 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors">
            <Send className="w-4 h-4" /> Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquireSection;
