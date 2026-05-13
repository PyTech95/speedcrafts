import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { CheckCircle2, ShieldCheck, Award } from 'lucide-react';

const points = [
  'Adopting customer-focused approach in every aspect of our operations.',
  'Continuous improvement of products, processes and service standards.',
  'Strict adherence to ISO 9001 & CE certified manufacturing protocols.',
  'Use of premium quality raw materials and tested components.',
  'In-house quality control checks at every stage of production.',
  'On-going training of employees to uphold the highest standards.',
  'Compliance with national and international regulatory norms.',
  'Safety, sustainability and environmental responsibility.'
];

const QualityPolicyPage = () => {
  return (
    <PageLayout>
      <PageBanner title="Quality Policy" breadcrumbs={[{ label: 'Quality Policy' }]} />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-9 h-9 text-[#d99a0e]" />
                <span className="text-[#d99a0e] tracking-[0.2em] font-semibold text-sm">
                  OUR COMMITMENT
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-[42px] font-bold text-zinc-900 mb-5"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Excellence in Every Machine
              </h2>
              <p className="text-zinc-600 leading-relaxed text-[16px]">
                At Speedcrafts, our Quality Policy is built on the philosophy of customer
                satisfaction through engineering excellence. Every machine that leaves our
                facility is a result of rigorous design validation, precision manufacturing and
                comprehensive testing.
              </p>
              <p className="text-zinc-600 leading-relaxed text-[16px] mt-4">
                We aspire to drive the transformation of the global infrastructure industry by
                delivering products that exceed expectations on durability, productivity and
                operating economy.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#f5b218]/15 rounded-2xl blur-2xl" />
              <img
                src="https://speedcrafts.com/wp-content/uploads/2025/07/4-2-scaled-1.webp"
                alt="Quality Manufacturing"
                className="relative w-full rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Quality Pillars
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {points.map((p) => (
              <div
                key={p}
                className="flex items-start gap-4 bg-white p-5 rounded-lg border border-zinc-200 hover:border-[#f5b218] transition-colors shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-[#d99a0e] shrink-0 mt-0.5" />
                <p className="text-zinc-700 leading-relaxed text-[15px]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { label: 'ISO 9001:2015', sub: 'Quality Management System' },
            { label: 'CE Certified', sub: 'European Conformity' },
            { label: 'Star Export House', sub: 'Govt. of India recognised' }
          ].map((c) => (
            <div key={c.label} className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50">
              <Award className="w-10 h-10 text-[#f5b218] mx-auto mb-3" />
              <div className="text-white text-xl font-bold">{c.label}</div>
              <div className="text-zinc-400 text-sm mt-1">{c.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default QualityPolicyPage;
