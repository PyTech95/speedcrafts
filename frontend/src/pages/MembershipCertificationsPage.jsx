import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { ExternalLink, Award, X } from 'lucide-react';
import { certifications } from '../mock';

const MembershipCertificationsPage = () => {
  const [lightbox, setLightbox] = useState(null);
  return (
    <PageLayout>
      <PageBanner
        title="Membership / Certifications"
        breadcrumbs={[
          { label: 'About Us' },
          { label: 'Membership / Certifications' }
        ]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 max-w-[820px] mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Trusted, Compliant &amp; Globally Recognised
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 leading-relaxed mt-5">
              Speedcrafts proudly upholds the highest standards of quality and compliance, certified
              by leading national and international authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c) => (
              <div
                key={c.id}
                className="group bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#f5b218] transition-all"
              >
                <button
                  onClick={() => setLightbox(c.image)}
                  className="relative w-full h-[230px] overflow-hidden bg-zinc-100 cursor-zoom-in block"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#f5b218] text-black text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                    <Award className="w-3 h-3" /> Certified
                  </div>
                </button>
                <div className="p-4 border-t border-zinc-100">
                  <h3
                    className="font-bold text-zinc-900 text-[15px] leading-snug"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {c.title}
                  </h3>
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-[#d99a0e] hover:text-[#b07e08] text-sm font-semibold"
                  >
                    View Certificate <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#f5b218] text-black flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
          <img src={lightbox} alt="Preview" className="max-w-full max-h-full object-contain rounded-lg bg-white p-2" />
        </div>
      )}
    </PageLayout>
  );
};

export default MembershipCertificationsPage;
