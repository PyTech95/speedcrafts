import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto w-[92vw] max-w-6xl py-14">
      <h1 className="text-2xl md:text-3xl font-extrabold">Page not found</h1>
      <p className="mt-2 text-slate-300">The page you’re looking for doesn’t exist.</p>
      <Link
        className="mt-6 inline-flex rounded-xl border border-sky-400/40 bg-sky-400/10 px-4 py-2 font-semibold hover:bg-sky-400/15"
        to="/"
      >
        Go Home
      </Link>
    </div>
  );
}
