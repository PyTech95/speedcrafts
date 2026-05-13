import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { navigation } from '../mock';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);
  const [activeSubIdx, setActiveSubIdx] = useState(null);
  const [openMobileSub, setOpenMobileSub] = useState(null);
  const [openMobileSubSub, setOpenMobileSubSub] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveIdx(null);
    setActiveSubIdx(null);
  }, [location.pathname]);

  const isActive = (item) => {
    if (item.href === '/' && location.pathname === '/') return true;
    if (item.href !== '/' && item.href !== '/products' && location.pathname.startsWith(item.href)) return true;
    if (item.children) {
      const checkChildren = (children) =>
        children.some((c) =>
          (c.href && c.href !== '/' && c.href !== '/products' && location.pathname.startsWith(c.href)) ||
          (c.children && checkChildren(c.children))
        );
      if (checkChildren(item.children)) return true;
    }
    if (item.label === 'Products' && location.pathname.startsWith('/products')) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-[#0a0a0a] ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="https://customer-assets.emergentagent.com/job_preview-speedcrafts/artifacts/e14a6yen_image.png"
              alt="Speedcrafts - Asphalt & Concrete Equipment"
              className="h-[64px] md:h-[68px] w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item, idx) => {
              const active = isActive(item);
              const isOpen = activeIdx === idx;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveIdx(idx);
                    setActiveSubIdx(null);
                  }}
                  onMouseLeave={() => {
                    setActiveIdx(null);
                    setActiveSubIdx(null);
                  }}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-3 py-2 text-[15px] font-medium transition-colors ${
                      active || isOpen
                        ? 'bg-[#f5b218] text-black'
                        : 'text-white hover:text-[#f5b218]'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {item.children && isOpen && (
                    <div className="absolute left-0 top-full pt-0 z-50">
                      <div className="flex">
                        {/* Level 1 list */}
                        <ul className="bg-black/95 min-w-[280px] py-1 shadow-2xl">
                          {item.children.map((c, ci) => {
                            const hasSub = c.children && c.children.length > 0;
                            const subOpen = activeSubIdx === ci;
                            return (
                              <li
                                key={c.label}
                                onMouseEnter={() => setActiveSubIdx(ci)}
                                className="relative"
                              >
                                {hasSub ? (
                                  <div
                                    className={`flex items-center justify-between gap-3 px-5 py-3 text-[14px] cursor-pointer transition-colors ${
                                      subOpen
                                        ? 'bg-[#f5b218] text-black'
                                        : 'text-white hover:bg-[#f5b218] hover:text-black'
                                    }`}
                                  >
                                    <span>{c.label}</span>
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  </div>
                                ) : (
                                  <Link
                                    to={c.href}
                                    className="block px-5 py-3 text-[14px] text-white hover:bg-[#f5b218] hover:text-black transition-colors"
                                  >
                                    {c.label}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>

                        {/* Level 2 panel (rendered next to the active L1 item) */}
                        {activeSubIdx !== null &&
                          item.children[activeSubIdx]?.children &&
                          item.children[activeSubIdx].children.length > 0 && (
                            <ul className="bg-black/95 min-w-[280px] py-1 shadow-2xl border-l border-zinc-800">
                              {item.children[activeSubIdx].children.map((sc) => (
                                <li key={sc.label}>
                                  <Link
                                    to={sc.href}
                                    className="block px-5 py-3 text-[14px] text-white hover:bg-[#f5b218] hover:text-black transition-colors"
                                  >
                                    {sc.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-zinc-800 max-h-[80vh] overflow-y-auto">
          {navigation.map((item, idx) => (
            <div key={item.label} className="border-b border-zinc-800">
              <div className="flex items-center justify-between">
                <Link
                  to={item.href}
                  className={`flex-1 px-4 py-3 ${
                    isActive(item) ? 'text-[#f5b218] font-semibold' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    className="px-4 py-3 text-white"
                    onClick={() =>
                      setOpenMobileSub(openMobileSub === idx ? null : idx)
                    }
                    aria-label="Toggle submenu"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openMobileSub === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.children && openMobileSub === idx && (
                <div className="bg-zinc-900">
                  {item.children.map((c, ci) => {
                    const hasSub = c.children && c.children.length > 0;
                    const subOpen = openMobileSubSub === `${idx}-${ci}`;
                    return (
                      <div key={c.label} className="border-b border-zinc-800/60 last:border-b-0">
                        <div className="flex items-center justify-between">
                          {hasSub ? (
                            <button
                              onClick={() =>
                                setOpenMobileSubSub(subOpen ? null : `${idx}-${ci}`)
                              }
                              className="flex-1 text-left px-8 py-2.5 text-sm text-zinc-300 hover:text-[#f5b218]"
                            >
                              {c.label}
                            </button>
                          ) : (
                            <Link
                              to={c.href}
                              className="flex-1 px-8 py-2.5 text-sm text-zinc-300 hover:text-[#f5b218]"
                            >
                              {c.label}
                            </Link>
                          )}
                          {hasSub && (
                            <button
                              onClick={() =>
                                setOpenMobileSubSub(subOpen ? null : `${idx}-${ci}`)
                              }
                              className="px-4 py-2.5 text-zinc-400"
                              aria-label="Toggle"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  subOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                          )}
                        </div>
                        {hasSub && subOpen && (
                          <div className="bg-zinc-950">
                            {c.children.map((sc) => (
                              <Link
                                key={sc.label}
                                to={sc.href}
                                className="block px-12 py-2 text-sm text-zinc-400 hover:text-[#f5b218]"
                              >
                                {sc.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
