import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const PageBanner = ({ title, breadcrumbs = [], image }) => {
  const bg = image || 'https://speedcrafts.com/wp-content/uploads/2025/07/8-60.webp';
  return (
    <section className="relative pt-[80px]">
      <div
        className="relative h-[200px] md:h-[280px] lg:h-[320px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="relative z-10 text-center px-5 sm:px-6">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 text-white"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {title}
          </h1>
          <nav className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-zinc-200 flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-[#f5b218] transition-colors">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="w-3.5 h-3.5 text-[#f5b218]" />
                {b.href ? (
                  <Link to={b.href} className="hover:text-[#f5b218] transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-[#f5b218]">{b.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
