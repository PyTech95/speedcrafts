import React from "react";
import Section from "../components/Section.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Products() {
  const items = [
    { title: "Asphalt Batch Mix Plant", note: "European Specs.", to: "/products/asphalt-batch-mix" },
    { title: "Asphalt Drum Mix Plant", note: "International Specs.", to: "/products/asphalt-drum-mix" },
    { title: "Asphalt Plant (American Specs.)", note: "American Specs.", to: "/products/asphalt-american-specs" },
    { title: "Mobile Asphalt Mixing Plant", note: "Mobile", to: "/products/mobile-asphalt-mixing" },
    { title: "Mobile Hot Mix Plant", note: "Mobile", to: "/products/mobile-hot-mix" },
  ];

  return (
    <Section title="Products" subtitle="Explore our road & building construction machinery.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {items.map((p) => (
          <ProductCard key={p.to} {...p} />
        ))}
      </div>
    </Section>
  );
}
