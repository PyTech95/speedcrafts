import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { boardMembers } from '../mock';

const BoardOfDirectorsPage = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Board of Directors"
        breadcrumbs={[{ label: 'About Us' }, { label: 'Board of Directors' }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 max-w-[850px] mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Leadership with Vision and Integrity
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 leading-relaxed mt-5">
              Our Board of Directors is composed of experienced leaders and industry professionals
              who provide strategic direction, uphold strong corporate governance, and drive
              long-term value for our stakeholders. Each member brings deep expertise, ethical
              leadership, and a commitment to innovation, ensuring that our company stays focused on
              excellence, sustainable growth, and customer trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {boardMembers.map((m) => (
              <div
                key={m.name}
                className="group bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#f5b218] transition-all"
              >
                <div className="relative h-[300px] overflow-hidden bg-zinc-100">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3
                    className="text-xl font-bold text-zinc-900"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {m.name}
                  </h3>
                  <p className="text-[#d99a0e] mt-1 text-sm font-semibold tracking-wider">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BoardOfDirectorsPage;
