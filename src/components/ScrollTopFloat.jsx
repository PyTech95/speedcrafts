import React, { useState, useEffect } from "react";

export default function ScrollTopFloat() {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      setShow(scrollTop > 200);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        background: `conic-gradient(#22c55e ${scrollProgress}%, #e5e7eb ${scrollProgress}%)`,
      }}
      className="fixed right-6 bottom-6 z-50 h-14 w-14 rounded-full grid place-items-center shadow-xl transition-all duration-200"
      aria-label="Scroll to top"
    >
      {/* Inner Circle */}
      <div className="h-12 w-12 bg-white rounded-full grid place-items-center">
        <span className="text-green-600 text-2xl font-extrabold">↑</span>
      </div>
    </button>
  );
}
