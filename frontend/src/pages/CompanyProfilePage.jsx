import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import StatsSection from '../components/StatsSection';
import { aboutContent, journey } from '../mock';
import { Calendar } from 'lucide-react';

const CompanyProfilePage = () => {
  return (
    <PageLayout>
      <PageBanner title="Company Profile" breadcrumbs={[{ label: 'About Us' }, { label: 'Company Profile' }]} />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f5b218]/15 blur-3xl rounded-full" />
                <img src={aboutContent.legacyImage} alt="50+ Years Legacy" className="relative w-[280px] md:w-[360px] h-auto" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#d99a0e] mb-5"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {aboutContent.title}
              </h2>
              <div className="space-y-4 text-zinc-700 leading-[1.85] text-[16px]">
                {aboutContent.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Our Journey
            </h2>
            <div className="h-1 w-24 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 max-w-[750px] mx-auto mt-5">
              Five decades of milestones, growth and global partnerships.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#f5b218]/40 -translate-x-1/2" />
            <div className="space-y-10">
              {journey.map((m, idx) => (
                <div
                  key={m.year}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center`}
                >
                  <div
                    className={`pl-12 md:pl-0 ${
                      idx % 2 === 0 ? 'md:text-right md:pr-12 md:order-1' : 'md:order-2 md:pl-12'
                    }`}
                  >
                    <div
                      className="text-[#d99a0e] text-3xl md:text-5xl font-bold"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {m.year}
                    </div>
                  </div>
                  <div
                    className={`pl-12 md:pl-0 ${
                      idx % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:order-1 md:text-right md:pr-12'
                    }`}
                  >
                    <div className="bg-white border border-zinc-200 hover:border-[#f5b218] transition-colors p-6 rounded-xl shadow-sm">
                      <h3
                        className="text-xl font-bold text-zinc-900"
                        style={{ fontFamily: "'Oswald', sans-serif" }}
                      >
                        {m.title}
                      </h3>
                      <p className="text-zinc-600 leading-relaxed mt-2 text-[15px]">{m.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#f5b218] text-black flex items-center justify-center shadow-md">
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
    </PageLayout>
  );
};

export default CompanyProfilePage;
