import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { MapPin, Phone, Mail } from 'lucide-react';
import { dealers } from '../mock';

const DealersPage = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Our Dealers"
        breadcrumbs={[{ label: 'Business' }, { label: 'Dealers' }]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Authorised Dealer Network
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 max-w-[700px] mx-auto mt-5">
              Speedcrafts is supported by a global network of authorised dealers across Asia,
              Africa, Middle East and South America.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealers.map((d) => (
              <div
                key={d.id}
                className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-xl hover:border-[#f5b218] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#f5b218]/15 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#d99a0e]" />
                  </div>
                  <div>
                    <div
                      className="text-lg font-bold text-zinc-900"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {d.country}
                    </div>
                    <div className="text-zinc-500 text-sm">{d.city}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-3">{d.name}</h3>
                <div className="space-y-1.5 text-sm">
                  <a href={`tel:${d.phone}`} className="flex items-center gap-2 text-zinc-600 hover:text-[#d99a0e] transition-colors">
                    <Phone className="w-4 h-4" /> {d.phone}
                  </a>
                  <a href={`mailto:${d.email}`} className="flex items-center gap-2 text-zinc-600 hover:text-[#d99a0e] transition-colors">
                    <Mail className="w-4 h-4" /> {d.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DealersPage;
