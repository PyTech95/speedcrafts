import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import StatsSection from '../components/StatsSection';
import { Building2, MapPin, Users, X } from 'lucide-react';
import { infrastructure } from '../mock';

const InfrastructurePage = () => {
  const [lightbox, setLightbox] = useState(null);
  return (
    <PageLayout>
      <PageBanner
        title="Infrastructure"
        breadcrumbs={[{ label: 'About Us' }, { label: 'Infrastructure' }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-[900px] mx-auto text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Two Manufacturing Facilities. One Standard of Excellence.
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              { icon: Building2, label: '2 Facilities', sub: 'Patna & Hardwar' },
              { icon: MapPin, label: '60+ Countries', sub: 'Global Presence' },
              { icon: Users, label: '350+ Employees', sub: 'Dedicated Workforce' }
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-zinc-50 rounded-xl p-6 border-l-4 border-[#f5b218]"
              >
                <div className="w-14 h-14 rounded-full bg-[#f5b218] text-black flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div
                    className="text-xl font-bold text-zinc-900"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {label}
                  </div>
                  <div className="text-sm text-zinc-600">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-[1000px] mx-auto space-y-5 text-zinc-700 leading-[1.85] text-[16px] mb-14">
            {infrastructure.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infrastructure.images.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(src)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-100 cursor-zoom-in"
              >
                <img
                  src={src}
                  alt={`Facility ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>
      <StatsSection />
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#f5b218] text-black flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
          <img src={lightbox} alt="Preview" className="max-w-full max-h-full object-contain rounded-lg" />
        </div>
      )}
    </PageLayout>
  );
};

export default InfrastructurePage;
