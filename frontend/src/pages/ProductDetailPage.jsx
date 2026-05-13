import React, { useState, useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import EnquireSection from '../components/EnquireSection';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Play,
  Phone,
  Mail,
  Award,
  ShieldCheck,
  Globe2,
  Wrench,
  X,
  Home as HomeIcon,
  Flame,
  Zap,
  Building2,
  Layers,
  Monitor,
  Wind,
  Droplets,
  Settings,
  Send
} from 'lucide-react';
import { products, contactInfo } from '../mock';
import { useToast } from '../hooks/use-toast';

const ICONS = { Flame, Zap, Building2, Layers, Monitor, Wind, Droplets, Settings };

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'specs', label: 'Specifications' },
  { id: 'components', label: 'Components' },
  { id: 'enquire', label: 'Enquire' }
];

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products[slug];
  const { toast } = useToast();

  const [activeImg, setActiveImg] = useState(0);
  const [openVideo, setOpenVideo] = useState(false);
  const [openLightbox, setOpenLightbox] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [quickForm, setQuickForm] = useState({ name: '', email: '', phone: '', message: '' });

  const sectionRefs = {
    overview: useRef(null),
    specs: useRef(null),
    components: useRef(null),
    enquire: useRef(null)
  };

  // Scroll-spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveTab(e.target.dataset.tab);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    Object.values(sectionRefs).forEach((r) => {
      if (r.current) obs.observe(r.current);
    });
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // Auto-advance gallery
  useEffect(() => {
    if (!product) return;
    const t = setInterval(() => {
      setActiveImg((i) => (i + 1) % product.gallery.length);
    }, 4500);
    return () => clearInterval(t);
  }, [product]);

  if (!product) return <Navigate to="/products" replace />;

  const scrollTo = (id) => {
    const el = sectionRefs[id]?.current;
    if (el) {
      const headerOffset = 160;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleQuick = (e) => setQuickForm({ ...quickForm, [e.target.name]: e.target.value });
  const submitQuick = (e) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.email) {
      toast({ title: 'Please fill required fields', description: 'Name and email are required.' });
      return;
    }
    toast({
      title: 'Quick enquiry sent',
      description: `We will contact you about ${product.title}.`
    });
    setQuickForm({ name: '', email: '', phone: '', message: '' });
  };

  const next = () => setActiveImg((i) => (i + 1) % product.gallery.length);
  const prev = () => setActiveImg((i) => (i - 1 + product.gallery.length) % product.gallery.length);

  const hasVideo = Boolean(product.videoUrl);
  const highlights = product.highlights || [];
  const advantages = product.advantages || [];
  const specsKeys = Object.keys(product.specs[0] || { model: '', capacity: '' });

  return (
    <PageLayout>
      {/* ===== HERO ===== */}
      <section
        className="relative pt-[80px] bg-cover bg-center"
        style={{ backgroundImage: `url(${product.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/50" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-12 md:py-20 lg:py-24">
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-300 mb-5 flex-wrap">
            <Link to="/" className="hover:text-[#f5b218] inline-flex items-center gap-1">
              <HomeIcon className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#f5b218]" />
            <Link to="/products" className="hover:text-[#f5b218]">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#f5b218]" />
            <span className="text-[#f5b218] break-words">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="inline-block px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-[#f5b218] text-black rounded-sm">
                {product.subtitle}
              </span>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-[1.1]"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {product.title}
              </h1>
              <p className="text-zinc-200 text-[15px] md:text-lg mt-4 md:mt-5 max-w-[640px] leading-relaxed">
                {product.intro}
              </p>

              {highlights.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 max-w-[640px]">
                  {highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-md px-3 py-2 text-sm text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#f5b218] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 mt-7">
                <button
                  onClick={() => scrollTo('enquire')}
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold text-sm md:text-base rounded-sm transition-colors shadow-lg"
                >
                  Request a Quote <ArrowUpRight className="w-4 h-4" />
                </button>
                {product.brochureUrl && (
                  <a
                    href={product.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 md:px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm md:text-base rounded-sm transition-colors backdrop-blur-sm"
                  >
                    <Download className="w-4 h-4" /> Brochure
                  </a>
                )}
                {hasVideo && (
                  <button
                    onClick={() => setOpenVideo(true)}
                    className="inline-flex items-center gap-2 px-5 md:px-6 py-3 bg-transparent text-white border border-white/30 hover:bg-white/10 font-semibold text-sm md:text-base rounded-sm transition-colors"
                  >
                    <Play className="w-4 h-4 fill-current" /> Video
                  </button>
                )}
              </div>
            </div>

            {/* Quick contact card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl shadow-2xl p-6 md:p-7">
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
                  <div className="w-11 h-11 rounded-lg bg-[#f5b218] text-black flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-zinc-900 text-lg"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      Quick Enquiry
                    </h3>
                    <p className="text-xs text-zinc-500">Get a tailored quotation in 24 hours</p>
                  </div>
                </div>
                <form onSubmit={submitQuick} className="mt-4 space-y-3">
                  <input
                    name="name"
                    value={quickForm.name}
                    onChange={handleQuick}
                    placeholder="Your Name *"
                    className="w-full border border-zinc-200 px-3 py-2.5 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="email"
                      type="email"
                      value={quickForm.email}
                      onChange={handleQuick}
                      placeholder="Email *"
                      className="w-full border border-zinc-200 px-3 py-2.5 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]"
                    />
                    <input
                      name="phone"
                      value={quickForm.phone}
                      onChange={handleQuick}
                      placeholder="Phone"
                      className="w-full border border-zinc-200 px-3 py-2.5 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218]"
                    />
                  </div>
                  <textarea
                    name="message"
                    value={quickForm.message}
                    onChange={handleQuick}
                    placeholder={`I'm interested in ${product.title}...`}
                    rows={2}
                    className="w-full border border-zinc-200 px-3 py-2.5 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#f5b218] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors"
                  >
                    Send Enquiry
                  </button>
                </form>
                <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-around text-sm">
                  <a
                    href={`tel:${contactInfo.phones[0].replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-zinc-700 hover:text-[#d99a0e]"
                  >
                    <Phone className="w-4 h-4 text-[#d99a0e]" /> Call
                  </a>
                  <span className="w-px h-5 bg-zinc-200" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-1.5 text-zinc-700 hover:text-[#d99a0e]"
                  >
                    <Mail className="w-4 h-4 text-[#d99a0e]" /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust strip ===== */}
      <section className="bg-[#f5b218] border-y-2 border-[#e0a30a]">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Award, label: 'ISO 9001 Certified' },
            { icon: ShieldCheck, label: 'CE Marked' },
            { icon: Globe2, label: '60+ Countries' },
            { icon: Wrench, label: '24x7 Support' }
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 text-black font-semibold">
              <Icon className="w-5 h-5" />
              <span className="text-sm md:text-[15px]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Sticky Tab Nav ===== */}
      <div className="sticky top-[80px] z-30 bg-white border-b-2 border-[#f5b218] shadow-md">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-1 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => scrollTo(t.id)}
                className={`relative px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeTab === t.id
                    ? 'text-[#d99a0e]'
                    : 'text-zinc-700 hover:text-zinc-900'
                }`}
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.04em' }}
              >
                {t.label}
                {activeTab === t.id && (
                  <span className="absolute left-3 right-3 -bottom-[2px] h-[3px] bg-[#f5b218] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Overview + Gallery ===== */}
      <section ref={sectionRefs.overview} data-tab="overview" className="py-14 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-zinc-100 group">
                <button
                  onClick={() => setOpenLightbox(true)}
                  className="w-full block cursor-zoom-in"
                  aria-label="Open larger image"
                >
                  <img
                    src={product.gallery[activeImg]}
                    alt={product.title}
                    className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700"
                  />
                </button>
                {product.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-[#f5b218] hover:text-black text-white flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-[#f5b218] hover:text-black text-white flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-full">
                  {activeImg + 1} / {product.gallery.length}
                </div>
              </div>

              {product.gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-6 md:grid-cols-8 gap-2">
                  {product.gallery.slice(0, 8).map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative h-16 md:h-20 rounded-md overflow-hidden border-2 transition-all ${
                        activeImg === i
                          ? 'border-[#f5b218] scale-[1.02]'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={g} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Overview text */}
            <div className="lg:col-span-5">
              <span className="text-[#d99a0e] font-semibold tracking-wider text-xs uppercase">
                Product Overview
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-zinc-900 mt-2 mb-5"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Engineered for Performance &amp; Durability
              </h2>
              <p className="text-zinc-700 leading-relaxed text-[16px]">{product.intro}</p>

              {advantages.length > 0 && (
                <div className="mt-7">
                  <h3
                    className="text-xl font-bold text-zinc-900 mb-3"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Key Advantages
                  </h3>
                  <ul className="space-y-2.5">
                    {advantages.map((a) => (
                      <li key={a} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#d99a0e] shrink-0 mt-0.5" />
                        <span className="text-zinc-700 text-[15px]">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Specifications ===== */}
      <section
        ref={sectionRefs.specs}
        data-tab="specs"
        className="py-14 md:py-20 bg-zinc-50 border-t border-zinc-100"
      >
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="text-[#d99a0e] font-semibold tracking-wider text-xs uppercase">
              Technical Specifications
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-zinc-900 mt-2"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Choose the Right Capacity for Your Project
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-[15px]">
                <thead>
                  <tr className="bg-black text-[#f5b218]">
                    {specsKeys.map((k) => (
                      <th
                        key={k}
                        className="text-left px-5 md:px-7 py-4 font-bold uppercase tracking-wider text-sm whitespace-nowrap"
                        style={{ fontFamily: "'Oswald', sans-serif" }}
                      >
                        {k === 'model'
                          ? 'Model'
                          : k === 'capacity'
                          ? 'Capacity'
                          : k === 'mixer'
                          ? 'Mixer Size'
                          : k === 'bins'
                          ? 'Cold Bins'
                          : k === 'tower'
                          ? 'Tower'
                          : k.charAt(0).toUpperCase() + k.slice(1)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr
                      key={s.model}
                      className={`${
                        i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'
                      } hover:bg-[#f5b218]/10 transition-colors`}
                    >
                      {specsKeys.map((k) => (
                        <td
                          key={k}
                          className={`px-5 md:px-7 py-4 ${
                            k === 'model' ? 'font-bold text-zinc-900' : 'text-zinc-700'
                          }`}
                        >
                          {s[k] || '\u2014'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-zinc-500 text-sm mt-5">
            * Specifications are indicative and subject to change without notice. Custom configurations available on request.
          </p>
        </div>
      </section>

      {/* ===== Components ===== */}
      <section
        ref={sectionRefs.components}
        data-tab="components"
        className="py-14 md:py-20 bg-white"
      >
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-[#d99a0e] font-semibold tracking-wider text-xs uppercase">
              Key Components
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-zinc-900 mt-2"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Built From Precision-Engineered Modules
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((f, idx) => {
              const Icon = (f.icon && ICONS[f.icon]) || Settings;
              return (
                <div
                  key={f.title}
                  className="group relative bg-white border border-zinc-200 rounded-2xl p-7 md:p-8 hover:border-[#f5b218] hover:shadow-2xl transition-all overflow-hidden"
                >
                  {/* Decorative number watermark */}
                  <span
                    className="absolute -top-2 -right-1 text-[110px] md:text-[140px] font-extrabold text-[#f5b218]/10 leading-none pointer-events-none select-none group-hover:text-[#f5b218]/15 transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-[#f5b218] text-black flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[#d99a0e] font-mono font-bold text-sm">
                          0{idx + 1}
                        </span>
                        <h3
                          className="text-2xl font-bold text-zinc-900 leading-tight"
                          style={{ fontFamily: "'Oswald', sans-serif" }}
                        >
                          {f.title}
                        </h3>
                      </div>
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-[#f5b218] via-[#f5b218]/30 to-transparent mb-4" />
                    <p className="text-zinc-600 leading-relaxed text-[15px]">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Enquire ===== */}
      <div ref={sectionRefs.enquire} data-tab="enquire">
        <EnquireSection productTitle={`Enquiry for ${product.title}`} />
      </div>

      {/* ===== Image Lightbox ===== */}
      {openLightbox && (
        <div
          onClick={() => setOpenLightbox(false)}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#f5b218] text-black flex items-center justify-center z-10"
            onClick={() => setOpenLightbox(false)}
          >
            <X className="w-5 h-5" />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#f5b218] hover:text-black text-white border border-white/20 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#f5b218] hover:text-black text-white border border-white/20 flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <img
            onClick={(e) => e.stopPropagation()}
            src={product.gallery[activeImg]}
            alt={product.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* ===== Video Modal ===== */}
      {openVideo && hasVideo && (
        <div
          onClick={() => setOpenVideo(false)}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
        >
          <button
            aria-label="Close video"
            onClick={() => setOpenVideo(false)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#f5b218] text-black flex items-center justify-center z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1100px] aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
          >
            <video src={product.videoUrl} className="w-full h-full" controls autoPlay playsInline />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default ProductDetailPage;
