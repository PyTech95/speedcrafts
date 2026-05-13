import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import EnquireSection from '../components/EnquireSection';
import * as Icons from 'lucide-react';
import { services } from '../mock';

const ServicePage = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Our Services"
        breadcrumbs={[{ label: 'Business' }, { label: 'Service' }]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              After-Sales &amp; Service Support
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 max-w-[760px] mx-auto mt-5">
              From installation to lifelong maintenance, our service team supports customers across
              60+ countries with rapid response, genuine spares and certified engineers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = Icons[s.icon] || Icons.Settings;
              return (
                <div
                  key={s.id}
                  className="bg-white p-7 rounded-xl border border-zinc-200 hover:border-[#f5b218] hover:shadow-2xl transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#f5b218] text-black flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3
                    className="text-xl font-bold text-zinc-900 mb-2"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-[15px]">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <EnquireSection productTitle="Service Request" />
    </PageLayout>
  );
};

export default ServicePage;
