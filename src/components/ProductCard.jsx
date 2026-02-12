import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ title, note, to, img }) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-sky-400/30 transition"
    >
      <div className="h-40 bg-white/5 grid place-items-center">
        {img ? (
          <img src={img} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="text-slate-400 text-sm">Image</div>
        )}
      </div>
      <div className="p-4">
        <div className="font-bold">{title}</div>
        {note && <div className="mt-1 text-sm text-slate-400">{note}</div>}
      </div>
    </Link>
  );
}
