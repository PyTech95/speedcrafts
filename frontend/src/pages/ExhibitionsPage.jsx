import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { MapPin, Calendar } from 'lucide-react';
import { exhibitionsList } from '../mock';

const ExhibitionsPage = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Exhibitions Worldwide"
        breadcrumbs={[{ label: 'Gallery', href: '/gallery/plant-photos' }, { label: 'Exhibitions' }]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Trade Shows & Expos
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 max-w-[760px] mx-auto mt-5">
              Speedcrafts has been a regular exhibitor at leading construction industry expos
              across the world, connecting with contractors and partners on every continent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitionsList.map((ex) => (
              <div
                key={ex.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow group border border-zinc-100"
              >
                <div className="relative h-[230px] overflow-hidden">
                  <img
                    src={ex.image}
                    alt={ex.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#f5b218] text-black text-xs font-bold px-3 py-1 rounded-full">
                    {ex.year}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-zinc-900" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {ex.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-3 text-sm text-zinc-600">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#d99a0e]" /> {ex.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#d99a0e]" /> {ex.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ExhibitionsPage;
