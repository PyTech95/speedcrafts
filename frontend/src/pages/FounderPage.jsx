import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Quote } from 'lucide-react';
import { founder } from '../mock';

const FounderPage = () => {
  return (
    <PageLayout>
      <PageBanner title="Founder" breadcrumbs={[{ label: 'About Us' }, { label: 'Founder' }]} />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="relative">
                <div className="absolute -inset-3 bg-[#f5b218]/20 rounded-2xl blur-xl" />
                <img
                  src={founder.photo}
                  alt={founder.name}
                  className="relative w-full aspect-square object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="mt-6 text-center">
                <h2
                  className="text-2xl font-bold text-zinc-900"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {founder.name}
                </h2>
                <p className="text-[#d99a0e] font-semibold tracking-wider mt-1">
                  {founder.title}
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Quote className="w-12 h-12 text-[#f5b218] mb-4" />
              <div className="space-y-5 text-zinc-700 leading-[1.9] text-[16px] md:text-[17px]">
                {founder.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-200">
                <p className="text-zinc-900 font-bold text-lg">{founder.name}</p>
                <p className="text-[#d99a0e] text-sm tracking-wider">{founder.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FounderPage;
