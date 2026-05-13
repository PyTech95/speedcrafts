import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import EnquireSection from '../components/EnquireSection';
import { CheckCircle2, ShieldCheck, Award, Truck, Headphones, FileText, Cog, Globe2 } from 'lucide-react';

const points = [
  { icon: ShieldCheck, title: 'Quality You Can Rely On', desc: 'Every machine is built in our ISO 9001 and CE certified facilities using precision engineering and tested components.' },
  { icon: Cog, title: 'Engineered for Productivity', desc: 'Plants are designed for fast erection, smooth operation and minimal downtime, helping you finish projects ahead of schedule.' },
  { icon: Truck, title: 'On-Time Despatch', desc: 'Streamlined production and tested logistics ensure your plant arrives at site within the committed timeline.' },
  { icon: Headphones, title: 'Lifelong Support', desc: 'Our service teams in India and overseas dealer network provide spare parts, AMCs and 24x7 technical support.' },
  { icon: Award, title: 'Five Decades of Trust', desc: 'Established in 1971, we have delivered more than 17,000 machines to 5,000+ clients across 60+ countries.' },
  { icon: Globe2, title: 'Global Reach, Local Service', desc: 'Authorised dealers in Asia, Africa, Middle East and Latin America stand ready to support your purchase.' }
];

const process = [
  { step: '01', title: 'Share Your Requirement', desc: 'Tell us about your project type, expected output, site conditions and any custom needs.' },
  { step: '02', title: 'Technical Proposal', desc: 'Our application engineers prepare a tailored configuration and detailed commercial proposal.' },
  { step: '03', title: 'Site Visit & Layout', desc: 'For larger orders we visit your site (or review your drawings) to finalise plant layout and civil work.' },
  { step: '04', title: 'Manufacturing & QC', desc: 'Your plant is built and quality-checked at our factory, with optional in-process inspection visits.' },
  { step: '05', title: 'Despatch & Erection', desc: 'Plant is packed, despatched and erected on-site by Speedcrafts engineers, with operator training included.' },
  { step: '06', title: 'After-Sales Care', desc: 'AMC contracts, genuine spares and remote diagnostics keep your plant running for decades.' }
];

const ForBuyersPage = () => {
  return (
    <PageLayout>
      <PageBanner title="For Buyers" breadcrumbs={[{ label: 'Information' }, { label: 'For Buyers' }]} />

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d99a0e]" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Why Buy a Speedcrafts Plant?
          </h2>
          <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          <p className="text-zinc-600 leading-relaxed mt-5 max-w-[820px] mx-auto">
            Investing in a road construction plant is a long-term decision. Here’s what makes a
            Speedcrafts machine a smart choice for contractors, government agencies and infrastructure
            companies around the world.
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, desc }) => (
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
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d99a0e]" style={{ fontFamily: "'Oswald', sans-serif" }}>
              How the Buying Process Works
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="relative bg-white rounded-xl p-7 border border-zinc-200 hover:shadow-lg transition-shadow overflow-hidden">
                <span className="absolute -top-2 -right-2 text-[100px] font-extrabold text-[#f5b218]/10 leading-none pointer-events-none select-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {p.step}
                </span>
                <div className="relative">
                  <div className="text-[#d99a0e] font-mono font-bold mb-1">Step {p.step}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-[15px]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-black">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: FileText, title: 'Pre-Purchase Documentation', text: 'We provide complete technical drawings, foundation details, electrical schematics and operating manuals.' },
            { icon: CheckCircle2, title: 'Payment & Warranty Terms', text: 'Transparent payment milestones tied to manufacturing progress, plus a comprehensive warranty on every plant.' }
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-7">
              <Icon className="w-8 h-8 text-[#f5b218] mb-3" />
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {title}
              </h3>
              <p className="text-zinc-300 leading-relaxed text-[15px]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <EnquireSection productTitle="Buyer Enquiry" />
    </PageLayout>
  );
};

export default ForBuyersPage;
