import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import StatsSection from '../components/StatsSection';
import { Phone, Smartphone, Mail, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const topContacts = [
  {
    icon: Phone,
    title: 'Sales (Outside India)',
    lines: [
      { text: '+91-9811859288 (Kushagra)', href: 'tel:+919811859288' },
      { text: '+91-9650089228 (Shashank)', href: 'tel:+919650089228' }
    ]
  },
  {
    icon: Smartphone,
    title: 'Sales (India)',
    lines: [{ text: '+91 8800293637 (Sanjeev)', href: 'tel:+918800293637' }]
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [{ text: 'info@speedcrafts.com', href: 'mailto:info@speedcrafts.com' }]
  }
];

const offices = [
  {
    name: 'Marketing Headquarters',
    addressLines: [
      'Speedcrafts Pvt. Ltd.',
      'Unitech Business Zone',
      'Tower C, Unit No. 804',
      'Nirvana Country, Sector 50',
      'Gurgaon-122001, Delhi NCR, INDIA'
    ],
    map: 'https://maps.google.com/maps?q=Unitech%20Business%20Zone%2C%20Sector%2050%2C%20Gurgaon&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    name: 'Corporate Office',
    addressLines: [
      'Speedcrafts Pvt. Ltd.',
      'Layak Bhawan',
      'Boring Canal Road',
      'Nr. Panchmukhi Hanuman Mandir',
      'Patna \u2013 800 001, INDIA'
    ],
    map: 'https://maps.google.com/maps?q=Layak%20Bhawan%20Boring%20Canal%20Road%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },
  {
    name: 'East Zone Office',
    addressLines: [
      'Speedcrafts Pvt. Ltd.',
      'Neelamber Building',
      'Flat No. 5F, 5th Floor',
      '28-B Shakespeare Sarani',
      'Kolkata \u2013 700 017, INDIA'
    ],
    map: 'https://maps.google.com/maps?q=28-B%20Shakespeare%20Sarani%2C%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed'
  }
];

const manufacturingUnits = [
  {
    name: 'Unit - I',
    addressLines: [
      'Speedcrafts Pvt. Ltd.',
      'Layak Enclaves',
      'Sahay Nagar',
      'Phulwarisharif',
      'Patna \u2013 801 505, INDIA'
    ],
    map: 'https://maps.google.com/maps?q=Layak%20Enclaves%20Sahay%20Nagar%20Phulwarisharif%20Patna&t=&z=14&ie=UTF8&iwloc=&output=embed'
  },
  {
    name: 'Unit - II',
    addressLines: [
      'Speedcrafts Pvt. Ltd.',
      'Plot No. 1A',
      'Sector-7',
      'IIE (SIDCUL)',
      'Hardwar, Uttrakhand, INDIA'
    ],
    map: 'https://maps.google.com/maps?q=Plot%20No.%201A%2C%20Sector%207%2C%20SIDCUL%20Hardwar&t=&z=14&ie=UTF8&iwloc=&output=embed'
  }
];

const OfficeCard = ({ office, accent = '#f5b218' }) => (
  <div className="bg-[#111] rounded-xl overflow-hidden border border-zinc-800 shadow-xl flex flex-col">
    <div className="p-7 md:p-8 flex-1">
      <h3
        className="text-2xl md:text-[28px] font-bold mb-5 tracking-wide"
        style={{ fontFamily: "'Oswald', sans-serif", color: accent }}
      >
        {office.name}
      </h3>
      <div className="space-y-2.5 text-zinc-200 leading-relaxed">
        {office.addressLines.map((l, i) => (
          <p key={i} className={i === 0 ? 'font-semibold text-white' : ''}>
            {l}
          </p>
        ))}
      </div>
    </div>
    <div className="h-[280px] w-full bg-zinc-900">
      <iframe
        title={office.name}
        src={office.map}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
);

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', subject: '', message: ''
  });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: 'Please fill required fields', description: 'Name and email are required.' });
      return;
    }
    toast({ title: 'Message sent', description: 'Thanks for reaching out. We will respond within 24 hours.' });
    setForm({ name: '', email: '', phone: '', country: '', subject: '', message: '' });
  };

  return (
    <PageLayout>
      <PageBanner title="Contact Us" breadcrumbs={[{ label: 'Contact Us' }]} />

      {/* ===== Top Quick Contact Strip ===== */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {topContacts.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="flex items-start gap-5">
                <div className="w-[72px] h-[88px] rounded-xl bg-black text-[#f5b218] flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-9 h-9" />
                </div>
                <div className="flex-1 pt-1">
                  <h3
                    className="text-xl md:text-2xl font-bold text-zinc-900 mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {title}
                  </h3>
                  <div className="space-y-1">
                    {lines.map((l) => (
                      <a
                        key={l.text}
                        href={l.href}
                        className="block text-zinc-700 hover:text-[#d99a0e] transition-colors"
                      >
                        {l.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Our Offices ===== */}
      <section className="bg-black py-16 md:py-20">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Our Offices
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {offices.map((o) => (
              <OfficeCard key={o.name} office={o} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Manufacturing Units ===== */}
      <section className="bg-black pb-16 md:pb-20">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Manufacturing Units
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[950px] mx-auto">
            {manufacturingUnits.map((u) => (
              <OfficeCard key={u.name} office={u} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <StatsSection />

      {/* ===== Enquiry Form ===== */}
      <section className="bg-zinc-50 py-16 md:py-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Send Us a Message
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 mt-5">
              Have a project in mind? Send us your requirement and our team will revert with a
              tailored solution within 24 hours.
            </p>
          </div>
          <form onSubmit={submit} className="bg-white rounded-xl shadow-xl p-7 md:p-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handle}
                placeholder="Name *"
                className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handle}
                placeholder="Email *"
                className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handle}
                placeholder="Phone"
                className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]"
              />
              <input
                name="country"
                value={form.country}
                onChange={handle}
                placeholder="Country"
                className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]"
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handle}
              placeholder="Subject"
              className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handle}
              placeholder="Message..."
              rows={5}
              className="w-full border border-zinc-200 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218] resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
