import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Trophy } from 'lucide-react';
import { awards } from '../mock';

const AwardsPage = () => {
  return (
    <PageLayout>
      <PageBanner title="Awards & Recognition" breadcrumbs={[{ label: 'Awards & Recognition' }]} />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Five Decades of Recognition
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 max-w-[700px] mx-auto mt-5">
              Speedcrafts has been honoured by industry bodies, government institutions and trade
              associations for excellence in manufacturing, exports and innovation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#f5b218]/40 -translate-x-1/2" />
            <div className="space-y-10">
              {awards.map((a, idx) => (
                <div
                  key={a.id}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center ${
                    idx % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'
                  }`}
                >
                  <div
                    className={`pl-12 md:pl-0 ${
                      idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div
                      className="text-[#d99a0e] text-3xl md:text-5xl font-bold"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {a.year}
                    </div>
                  </div>
                  <div
                    className={`pl-12 md:pl-0 ${
                      idx % 2 === 0 ? 'md:pl-12' : 'md:text-right md:pr-12'
                    }`}
                  >
                    <div className="bg-white border border-zinc-200 hover:border-[#f5b218] transition-colors p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-zinc-900">{a.title}</h3>
                      <p className="text-zinc-500 mt-1">{a.issuer}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#f5b218] text-black flex items-center justify-center shadow-md">
                    <Trophy className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AwardsPage;
