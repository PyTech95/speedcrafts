import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Briefcase, MapPin, Clock, Users, ArrowRight, Upload } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const openings = [
  { id: 1, title: 'Mechanical Design Engineer', dept: 'Engineering', location: 'Gurgaon, India', type: 'Full-time', exp: '3-5 years' },
  { id: 2, title: 'Service Engineer (Africa Region)', dept: 'Service', location: 'Travel-based', type: 'Full-time', exp: '5-8 years' },
  { id: 3, title: 'Production Supervisor', dept: 'Manufacturing', location: 'Gurgaon, India', type: 'Full-time', exp: '4-6 years' },
  { id: 4, title: 'International Sales Manager', dept: 'Sales', location: 'Gurgaon, India', type: 'Full-time', exp: '6-10 years' },
  { id: 5, title: 'PLC / Automation Engineer', dept: 'Engineering', location: 'Gurgaon, India', type: 'Full-time', exp: '2-4 years' },
  { id: 6, title: 'Quality Control Inspector', dept: 'Quality', location: 'Gurgaon, India', type: 'Full-time', exp: '2-5 years' }
];

const CareerPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', message: '', file: null });
  const handle = (e) => {
    const { name, value, files } = e.target;
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  };
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: 'Please fill required fields', description: 'Name and email are required.' });
      return;
    }
    toast({ title: 'Application submitted', description: 'Thank you for applying. Our HR team will reach out soon.' });
    setForm({ name: '', email: '', phone: '', position: '', message: '', file: null });
  };
  return (
    <PageLayout>
      <PageBanner title="Careers at Speedcrafts" breadcrumbs={[{ label: 'Career' }]} />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Build Your Career With Us
          </h2>
          <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          <p className="text-zinc-600 max-w-[800px] mx-auto mt-5 leading-relaxed">
            Join a team that has been shaping the future of road and building infrastructure for over
            five decades. At Speedcrafts you will work on challenging engineering problems alongside
            industry veterans who genuinely care about your growth.
          </p>
        </div>
      </section>

      <section className="py-14 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: 'People First', text: 'Inclusive work culture with strong focus on team well-being.' },
            { icon: Briefcase, title: 'Real Impact', text: 'Contribute to projects building infrastructure in 60+ countries.' },
            { icon: Clock, title: 'Long-term Growth', text: 'Long tenured team and clear career progression paths.' }
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-xl p-7 border border-zinc-200">
              <Icon className="w-9 h-9 text-[#d99a0e]" />
              <h3
                className="text-xl font-bold text-zinc-900 mt-4"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-zinc-600 mt-2 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Current Openings
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </div>
          <div className="space-y-4">
            {openings.map((o) => (
              <div
                key={o.id}
                className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-[#f5b218] hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg md:text-xl font-bold text-zinc-900"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {o.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#d99a0e]" /> {o.dept}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#d99a0e]" /> {o.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#d99a0e]" /> {o.type}
                    </span>
                    <span className="text-zinc-600">Experience: {o.exp}</span>
                  </div>
                </div>
                <a
                  href="#apply"
                  onClick={() => setForm((f) => ({ ...f, position: o.title }))}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-14 md:py-20 bg-zinc-50">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Apply Now
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </div>
          <form onSubmit={submit} className="bg-white p-6 md:p-10 rounded-xl shadow-lg space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handle} placeholder="Full Name *" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email *" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="phone" value={form.phone} onChange={handle} placeholder="Phone" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
              <input name="position" value={form.position} onChange={handle} placeholder="Position Applied For" className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]" />
            </div>
            <textarea name="message" value={form.message} onChange={handle} placeholder="Cover note..." rows={4} className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218] resize-none" />
            <label className="flex items-center gap-3 px-4 py-3 border border-dashed border-zinc-300 rounded-lg cursor-pointer hover:border-[#f5b218] transition-colors">
              <Upload className="w-5 h-5 text-[#d99a0e]" />
              <span className="text-zinc-600 text-sm">
                {form.file ? form.file.name : 'Upload your resume (PDF / DOC)'}
              </span>
              <input type="file" name="file" onChange={handle} className="hidden" accept=".pdf,.doc,.docx" />
            </label>
            <button type="submit" className="px-7 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default CareerPage;
