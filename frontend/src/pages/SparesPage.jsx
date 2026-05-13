import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import EnquireSection from '../components/EnquireSection';
import { Package, Search } from 'lucide-react';
import { spareParts } from '../mock';
import { useState } from 'react';

const SparesPage = () => {
  const [q, setQ] = useState('');
  const filtered = spareParts.filter(
    (s) =>
      s.name.toLowerCase().includes(q.toLowerCase()) ||
      s.code.toLowerCase().includes(q.toLowerCase()) ||
      s.category.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <PageLayout>
      <PageBanner
        title="Spares"
        breadcrumbs={[{ label: 'Business' }, { label: 'Spares' }]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-8">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Genuine Spare Parts
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 max-w-[700px] mx-auto mt-5">
              Keep your Speedcrafts plant running at peak performance with our genuine OEM spare
              parts, supplied with the same quality assurance as the original equipment.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search spare parts..."
              className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5b218]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-zinc-200 rounded-lg p-5 flex items-center gap-4 hover:border-[#f5b218] hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#f5b218]/15 flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-[#d99a0e]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-zinc-900">{s.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 mt-1">
                    <span className="font-mono">{s.code}</span>
                    <span>•</span>
                    <span>{s.category}</span>
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-zinc-500 py-12">
                No spare parts match your search.
              </div>
            )}
          </div>
        </div>
      </section>
      <EnquireSection productTitle="Spare Parts Enquiry" />
    </PageLayout>
  );
};

export default SparesPage;
