import React from "react";
import Container from "./Container.jsx";

export default function Section({ title, subtitle, children, className = "" }) {
  return (
    <section className={`py-10 ${className}`}>
      <Container>
        {title && <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>}
        {subtitle && <p className="mt-2 text-slate-300 max-w-3xl">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </Container>
    </section>
  );
}
