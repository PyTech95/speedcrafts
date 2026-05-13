import React, { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <a
        href="https://wa.me/918800293637"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-[#25D366] hover:scale-110 transition-transform shadow-lg flex items-center justify-center text-white"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#f5b218] hover:bg-[#e0a30a] text-black shadow-lg flex items-center justify-center transition-all ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default FloatingButtons;
