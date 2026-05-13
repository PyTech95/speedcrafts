import React, { useEffect, useRef, useState } from 'react';
import { stats } from '../mock';

const useCounter = (target, duration = 2000, start = false) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
};

const StatItem = ({ stat, start }) => {
  const value = useCounter(stat.count, 2200, start);
  return (
    <div className="flex items-center gap-5 justify-center md:justify-start">
      <div className="shrink-0">
        <img src={stat.icon} alt={stat.label} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
      </div>
      <div>
        <div
          className="text-3xl md:text-5xl font-extrabold text-zinc-900 leading-none"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {value.toLocaleString()}
          {stat.suffix}
        </div>
        <div className="text-zinc-600 text-sm md:text-base mt-1 font-medium">
          {stat.label}
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="bg-white py-14 md:py-20 border-t border-zinc-100">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StatItem key={s.id} stat={s} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
