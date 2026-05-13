import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  galleryProducts,
  galleryClientsVisit,
  galleryDespatch,
  galleryPortStuffing
} from '../mock';

const GalleryView = ({ title, intro, parent, images }) => {
  const [active, setActive] = useState(null);

  const open = (idx) => setActive(idx);
  const close = () => setActive(null);
  const next = (e) => {
    e?.stopPropagation?.();
    setActive((i) => (i + 1) % images.length);
  };
  const prev = (e) => {
    e?.stopPropagation?.();
    setActive((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <PageLayout>
      <PageBanner
        title={title}
        breadcrumbs={[{ label: 'Gallery', href: '/gallery' }, { label: title }]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10 max-w-[820px] mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {parent}
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            {intro && <p className="text-zinc-600 leading-relaxed mt-5">{intro}</p>}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => open(i)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-100 cursor-zoom-in"
              >
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          onClick={close}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#f5b218] text-black flex items-center justify-center z-10"
          >
            <X className="w-5 h-5" />
          </button>
          {images.length > 1 && (
            <>
              <button
                aria-label="Previous"
                onClick={prev}
                className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#f5b218] hover:text-black text-white border border-white/20 flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#f5b218] hover:text-black text-white border border-white/20 flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          <img
            onClick={(e) => e.stopPropagation()}
            src={images[active]}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1.5 rounded-full">
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export const GalleryProductsPage = () => (
  <GalleryView
    title="Products"
    parent="Our Equipment in Action"
    intro="A snapshot of Speedcrafts machinery in operation across project sites in India and overseas."
    images={galleryProducts}
  />
);

export const GalleryClientsVisitPage = () => (
  <GalleryView
    title="Clients Visit"
    parent="Visits to Our Manufacturing Facilities"
    intro="Customers from across the world visit our Patna and Hardwar facilities to inspect plants, witness trial runs and discuss customisations."
    images={galleryClientsVisit}
  />
);

export const GalleryDespatchPage = () => (
  <GalleryView
    title="Despatch"
    parent="Plants Ready for Despatch"
    intro="Every machine that leaves our facility is fully tested, painted, marked and packed to withstand the rigours of international transit."
    images={galleryDespatch}
  />
);

export const GalleryPortStuffingPage = () => (
  <GalleryView
    title="Port Stuffing"
    parent="Container Stuffing at Indian Ports"
    intro="Our export logistics team supervises container stuffing at major Indian ports for safe, secure and timely shipment to over 60 countries."
    images={galleryPortStuffing}
  />
);

export default GalleryView;
