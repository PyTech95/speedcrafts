import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Play, X } from 'lucide-react';
import { videos } from '../mock';

const VideosPage = () => {
  const [active, setActive] = useState(null);
  return (
    <PageLayout>
      <PageBanner
        title="Videos"
        breadcrumbs={[{ label: 'Gallery', href: '/gallery/plant-photos' }, { label: 'Videos' }]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Watch Speedcrafts in Action
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((v) => (
              <button
                key={v.id}
                onClick={() => setActive(v)}
                className="group relative aspect-video overflow-hidden rounded-xl bg-zinc-900 shadow-md hover:shadow-2xl transition-shadow"
              >
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#f5b218] text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-9 h-9 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-5 right-5 text-left">
                  <h3 className="text-white text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {v.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
        >
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#f5b218] text-black flex items-center justify-center z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-[1100px] aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
              title={active.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default VideosPage;
