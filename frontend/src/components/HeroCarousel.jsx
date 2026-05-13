import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { heroSlides } from '../mock';

const VIDEO_URL =
  'https://customer-assets.emergentagent.com/job_preview-speedcrafts/artifacts/d8p0h97v_Speedcrafts%20Video.mp4';

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [openVideo, setOpenVideo] = useState(false);
  const videoRef = useRef(null);
  const total = heroSlides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  // Pause / reset when modal closes
  useEffect(() => {
    if (!openVideo && videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch (e) {
        /* noop */
      }
    }
    // Lock background scroll while modal is open
    if (openVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [openVideo]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenVideo(false);
    };
    if (openVideo) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openVideo]);

  return (
    <section className="relative w-full pt-[80px] bg-black overflow-hidden">
      <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[80vh] lg:h-[88vh]">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}

        {/* Arrows */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-[#f5b218] hover:text-black text-white border border-white/30 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-[#f5b218] hover:text-black text-white border border-white/30 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Watch Video Button - center bottom */}
        <div className="absolute left-1/2 bottom-14 md:bottom-20 -translate-x-1/2 z-30">
          <button
            onClick={() => setOpenVideo(true)}
            aria-label="Watch our video"
            className="group relative inline-flex items-center gap-2 md:gap-3 pl-1.5 pr-4 md:pr-6 py-1.5 md:py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-white hover:bg-[#f5b218] hover:text-black hover:border-[#f5b218] transition-all duration-300 shadow-2xl"
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#f5b218]/40 animate-ping" />
              <span className="relative w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#f5b218] text-black flex items-center justify-center group-hover:bg-black group-hover:text-[#f5b218] transition-colors">
                <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" fill="currentColor" />
              </span>
            </span>
            <span
              className="text-xs md:text-base font-semibold tracking-wider uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Watch Video
            </span>
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                current === idx ? 'w-8 bg-[#f5b218]' : 'w-2 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {openVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setOpenVideo(false)}
        >
          <button
            aria-label="Close video"
            onClick={() => setOpenVideo(false)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#f5b218] hover:bg-[#e0a30a] text-black flex items-center justify-center z-10 transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1100px] aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
          >
            <video
              ref={videoRef}
              src={VIDEO_URL}
              className="w-full h-full"
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroCarousel;
