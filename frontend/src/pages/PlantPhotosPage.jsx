import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { X } from 'lucide-react';
import { plantPhotos } from '../mock';

const PlantPhotosPage = () => {
  const [lightbox, setLightbox] = useState(null);
  return (
    <PageLayout>
      <PageBanner
        title="Plant Photos"
        breadcrumbs={[{ label: 'Gallery', href: '/gallery/plant-photos' }, { label: 'Plant Photos' }]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Plants in Operation
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 max-w-[700px] mx-auto mt-5">
              A snapshot of Speedcrafts machinery delivered and installed across project sites in
              India and overseas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {plantPhotos.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(src)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-100 cursor-zoom-in"
              >
                <img
                  src={src}
                  alt={`Plant ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

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

export default PlantPhotosPage;
