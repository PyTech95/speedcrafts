import React, { useMemo, useRef, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

/* -------------------- Helpers -------------------- */
function useHoverDelay() {
  const timer = useRef(null);
  const clear = () => timer.current && clearTimeout(timer.current);
  const delayClose = (fn, ms = 120) => {
    clear();
    timer.current = setTimeout(fn, ms);
  };
  return { clear, delayClose };
}

/* -------------------- Desktop Components -------------------- */
function DesktopLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-5 py-3 text-sm font-semibold transition ${
          isActive
            ? "bg-amber-400 text-white"
            : "text-white/90 hover:bg-amber-400 hover:text-white"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

function DesktopDropdown({ label, active, items }) {
  const [open, setOpen] = useState(false);
  const { clear, delayClose } = useHoverDelay();

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clear();
        setOpen(true);
      }}
      onMouseLeave={() => delayClose(() => setOpen(false), 140)}
    >
      <button
        type="button"
        className={`px-5 py-3 text-sm font-semibold transition flex items-center gap-2 ${
          active
            ? "bg-amber-400 text-white"
            : "text-white/90 hover:bg-amber-400 hover:text-white"
        }`}
      >
        {label}
        <span className="text-white/70 text-xs">▼</span>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-[330px] bg-[#2b2b2b] shadow-2xl">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                `block px-5 py-3 text-[15px] border-b border-white/10 ${
                  isActive ? "text-amber-400" : "text-white"
                } hover:bg-black/30`
              }
              onClick={() => setOpen(false)}
            >
              {it.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

function DesktopMegaDropdown({ label, active, items }) {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const { clear, delayClose } = useHoverDelay();

  const closeAll = () => {
    setOpen(false);
    setOpenSub(null);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clear();
        setOpen(true);
      }}
      onMouseLeave={() => delayClose(closeAll, 170)}
    >
      <button
        type="button"
        className={`px-5 py-3 text-sm font-semibold transition flex items-center gap-2 ${
          active
            ? "bg-amber-400 text-white"
            : "text-white/90 hover:bg-amber-400 hover:text-white"
        }`}
      >
        {label}
        <span className="text-white/70 text-xs">▼</span>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-[330px] bg-[#2b2b2b] shadow-2xl">
          {items.map((it, idx) => {
            const hasChildren = Array.isArray(it.children) && it.children.length > 0;

            if (!hasChildren) {
              return (
                <NavLink
                  key={it.to}
                  to={it.to}
                  className={({ isActive }) =>
                    `block px-5 py-3 text-[15px] border-b border-white/10 ${
                      isActive ? "text-amber-400" : "text-white"
                    } hover:bg-black/30`
                  }
                  onClick={closeAll}
                >
                  {it.label}
                </NavLink>
              );
            }

            return (
              <div
                key={it.label}
                className="relative"
                onMouseEnter={() => setOpenSub(idx)}
                onMouseLeave={() => setOpenSub(null)}
              >
                <div className="flex items-center justify-between px-5 py-1 text-[15px] border-b border-white/10 text-white hover:bg-black/30 cursor-pointer">
                  <span>{it.label}</span>
                  <span className="text-white text-3xl">›</span>
                </div>

                {openSub === idx && (
                  <div
                    className="absolute top-0 left-full w-[330px] bg-[#2b2b2b] shadow-2xl"
                    onMouseEnter={() => setOpenSub(idx)}
                    onMouseLeave={() => setOpenSub(null)}
                  >
                    {it.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        className={({ isActive }) =>
                          `block px-5 py-3 text-[15px] border-b border-white/10 ${
                            isActive ? "text-amber-400" : "text-white"
                          } hover:bg-black/30`
                        }
                        onClick={closeAll}
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* -------------------- Mobile Components -------------------- */
function MobileRow({ to, label, active, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`block w-full px-5 py-1 text-lg font-semibold border-t border-white/10 ${
        active ? "bg-amber-400 text-white" : "bg-black text-white"
      }`}
    >
      {label}
    </NavLink>
  );
}

function MobileDrop({ label, active, open, onToggle, children }) {
  return (
    <div className="border-t border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-5 py-1 text-lg font-semibold ${
          active ? "bg-amber-400 text-white" : "bg-black text-white"
        }`}
      >
        <span>{label}</span>
        <span className={`text-xl transition ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && <div className="bg-[#0e0e0e]">{children}</div>}
    </div>
  );
}

function MobileSubLink({ to, label, onClick, active }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`block px-8 py-1 text-base border-t border-white/10 ${
        active ? "text-amber-400" : "text-white/90 hover:text-white"
      }`}
    >
      {label}
    </NavLink>
  );
}

/* ✅ Nested Category Row (for mobile Products) */
function MobileCategory({ label, open, onToggle, children }) {
  return (
    <div className="border-t border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-8 py-1 text-base font-semibold text-white bg-amber-400/90 hover:bg-amber-400"
      >
        <span>{label}</span>
        <span className={`text-xl transition ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && <div className="bg-black">{children}</div>}
    </div>
  );
}

/* -------------------- Navbar -------------------- */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openAbout, setOpenAbout] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openBusiness, setOpenBusiness] = useState(false);

  // ✅ nested open state for mobile product categories
  const [openProductCat, setOpenProductCat] = useState({});

  const location = useLocation();
  const isActivePath = (prefix) => location.pathname.startsWith(prefix);

  const menus = useMemo(
    () => ({
      about: [
        { to: "/about/company-profile", label: "Company Profile" },
        { to: "/about/founder", label: "Founder" },
        { to: "/about/chairman-message", label: "Chairman’s Message" },
        { to: "/about/board-of-directors", label: "Board of Directors" },
        { to: "/about/infrastructure", label: "Infrastructure" },
        { to: "/about/mission-vision-values", label: "Mission, Vision & Values" },
        { to: "/about/quality-policy", label: "Quality Policy" },
        { to: "/about/certifications", label: "Membership / Certifications" },
      ],
      products: [
        {
          label: "Asphalt Mixing Plant",
          children: [
            { to: "/products/asphalt-batch-mix", label: "Asphalt Batch Mix Plant" },
            { to: "/products/asphalt-drum-mix", label: "Asphalt Drum Mix Plant" },
            { to: "/products/asphalt-american-specs", label: "Asphalt Plant (American Specs.)" },
            { to: "/products/mobile-asphalt-mixing", label: "Mobile Asphalt Mixing Plant" },
            { to: "/products/mobile-hot-mix", label: "Mobile Hot Mix Plant" },
          ],
        },
        {
          label: "Concrete Mixing Plant & Equip.",
          children: [
            { to: "/products/concrete-batching-plant", label: "Inline & Compact Concrete Batching Plants," },
            { to: "/products/compact-concrete-plant", label: "Compact Concrete Plant" },
            { to: "/products/Containerised", label: "Containerised Concrete Plant" },
            { to: "/products/portable-concrete-plant", label: "Portable Concrete Plant" },
            { to: "/products/mobile-concrete-plant", label: "Mobile Concrete Plants" },
            { to: "/products/Concrete", label: "Concrete Conveyors" },
            
            
          ],
        },
        {
          label: "Other Construction Equipment",
          children: [
            { to: "/products/Road-Roller", label: "Road Roller" },
            { to: "/products/Paver-Finisher", label: "Paver Finisher" },
            { to: "/products/Road-Sweeper", label: "Road Sweeper" },
            { to: "/products/Chip-Spreader", label: "Chip Spreader" },
            { to: "/products/Bitumen-Pressure", label: "Bitumen Pressure Distributor" },
            { to: "/products/Bitumen-Sprayer", label: "Bitumen Sprayer (On Trolley)" },
            { to: "/products/Bitumen-Decanter", label: "Bitumen Decanter" },
            { to: "/products/Wet-Mix-Macadam", label: "Wet Mix Macadam Plant" },
            { to: "/products/Pothole-Repairing", label: "Pothole Repairing Machine" },
            

          ],
        },
      ],
      gallery: [
        { to: "/gallery/products", label: "Products" },
        { to: "/gallery/exhibitions", label: "Exhibitions" },
        { to: "/gallery/clients-visit", label: "Clients Visit" },
        { to: "/gallery/despatch", label: "Despatch" },
        { to: "/gallery/port-stuffing", label: "Port Stuffing" },
        { to: "/gallery/videos", label: "Videos" },
      ],
      info: [{ to: "/information", label: "Information" }],
      business: [{ to: "/business", label: "Business" }],
    }),
    []
  );

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenProductCat({});
  };

  /* ✅ Prevent body scroll when menu open */
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  return (
    <header className="bg-black fixed top-0 left-0 w-full z-[9999]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-[92px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Speedcrafts" className="h-14 w-auto" />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-stretch gap-1 overflow-visible">
            <DesktopLink to="/">Home</DesktopLink>
            <DesktopDropdown label="About Us" active={isActivePath("/about")} items={menus.about} />
            <DesktopMegaDropdown label="Products" active={isActivePath("/products")} items={menus.products} />
            <DesktopDropdown label="Gallery" active={isActivePath("/gallery")} items={menus.gallery} />
            <DesktopDropdown label="Information" active={isActivePath("/information")} items={menus.info} />
            <DesktopDropdown label="Business" active={isActivePath("/business")} items={menus.business} />
            <DesktopLink to="/career">Career</DesktopLink>
            <DesktopLink to="/contact">Contact Us</DesktopLink>
          </nav>

          {/* Mobile: Call + Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+919650089228"
              className="inline-flex items-center justify-center h-11 w-11 rounded bg-white/10 text-white hover:bg-white/15"
              aria-label="Call"
            >
              ☎
            </a>

            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="inline-flex items-center justify-center h-11 w-11 rounded bg-white/10 text-white hover:bg-white/15"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60" onClick={closeMobile} />

          {/* Drawer */}
          <aside className="fixed inset-y-0 right-0 w-[86vw] max-w-[360px] bg-black shadow-2xl">
            {/* Header */}
            <div className="relative flex items-center px-4 py-4 border-b border-white/10">
              <button
                onClick={closeMobile}
                className="absolute right-3 top-1 h-8 w-8 flex items-center justify-center text-white text-xl font-bold"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Menu */}
            <div className="overflow-y-auto h-[calc(100%-72px)]">
              <MobileRow to="/" label="Home" active={location.pathname === "/"} onClick={closeMobile} />

              <MobileDrop
                label="About Us"
                active={isActivePath("/about")}
                open={openAbout}
                onToggle={() => setOpenAbout((p) => !p)}
              >
                {menus.about.map((m) => (
                  <MobileSubLink
                    key={m.to}
                    to={m.to}
                    label={m.label}
                    active={location.pathname === m.to}
                    onClick={closeMobile}
                  />
                ))}
              </MobileDrop>

              {/* ✅ Products (mobile nested accordion like screenshot) */}
              <MobileDrop
                label="Products"
                active={isActivePath("/products")}
                open={openProducts}
                onToggle={() => setOpenProducts((p) => !p)}
              >
                {menus.products.map((m) => {
                  // All Products (no children)
                  if (!m.children) {
                    return (
                      <MobileSubLink
                        key={m.to}
                        to={m.to}
                        label={m.label}
                        active={location.pathname === m.to}
                        onClick={closeMobile}
                      />
                    );
                  }

                  const isOpen = !!openProductCat[m.label];

                  return (
                    <MobileCategory
                      key={m.label}
                      label={m.label}
                      open={isOpen}
                      onToggle={() =>
                        setOpenProductCat((prev) => ({
                          ...prev,
                          [m.label]: !prev[m.label],
                        }))
                      }
                    >
                      {m.children.map((c) => (
                        <NavLink
                          key={c.to}
                          to={c.to}
                          onClick={closeMobile}
                          className={({ isActive }) =>
                            `block px-10 py-3 text-base border-t border-white/10 ${
                              isActive ? "text-amber-400" : "text-white"
                            } hover:bg-white/5`
                          }
                        >
                          {c.label}
                        </NavLink>
                      ))}
                    </MobileCategory>
                  );
                })}
              </MobileDrop>

              <MobileDrop
                label="Gallery"
                active={isActivePath("/gallery")}
                open={openGallery}
                onToggle={() => setOpenGallery((p) => !p)}
              >
                {menus.gallery.map((m) => (
                  <MobileSubLink
                    key={m.to}
                    to={m.to}
                    label={m.label}
                    active={location.pathname === m.to}
                    onClick={closeMobile}
                  />
                ))}
              </MobileDrop>

              <MobileDrop
                label="Information"
                active={isActivePath("/information")}
                open={openInfo}
                onToggle={() => setOpenInfo((p) => !p)}
              >
                {menus.info.map((m) => (
                  <MobileSubLink
                    key={m.to}
                    to={m.to}
                    label={m.label}
                    active={location.pathname === m.to}
                    onClick={closeMobile}
                  />
                ))}
              </MobileDrop>

              <MobileDrop
                label="Business"
                active={isActivePath("/business")}
                open={openBusiness}
                onToggle={() => setOpenBusiness((p) => !p)}
              >
                {menus.business.map((m) => (
                  <MobileSubLink
                    key={m.to}
                    to={m.to}
                    label={m.label}
                    active={location.pathname === m.to}
                    onClick={closeMobile}
                  />
                ))}
              </MobileDrop>

              <MobileRow to="/career" label="Career" active={location.pathname === "/career"} onClick={closeMobile} />
              <MobileRow to="/contact" label="Contact Us" active={location.pathname === "/contact"} onClick={closeMobile} />
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
