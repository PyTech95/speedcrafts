import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import MissionQuality from '../components/MissionQuality';
import { ArrowUpRight } from 'lucide-react';

const aboutLinks = [
  { title: "Chairman's Message", desc: 'A note from our founder on five decades of building machinery.', href: '/chairmans-message' },
  { title: 'Mission & Vision', desc: 'The values that guide everything we design and manufacture.', href: '/mission-vision' },
  { title: 'Quality Policy', desc: 'Our commitment to engineering excellence and quality assurance.', href: '/quality-policy' },
  { title: 'Awards & Recognition', desc: 'Industry honours and accolades earned over five decades.', href: '/awards' }
];

const AboutPage = () => {
  return (
    <PageLayout>
      <PageBanner title="About Us" breadcrumbs={[{ label: 'About Us' }]} />
      <AboutSection />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#d99a0e]" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Discover More About Us
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="group bg-white border border-zinc-200 rounded-xl p-6 hover:border-[#f5b218] hover:shadow-xl transition-all"
              >
                <h3
                  className="text-lg font-bold text-zinc-900 mb-2"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {l.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{l.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-[#d99a0e] font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <MissionQuality />
      <StatsSection />
    </PageLayout>
  );
};

export default AboutPage;
