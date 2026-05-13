import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Target, Eye, Gem } from 'lucide-react';
import StatsSection from '../components/StatsSection';

const MissionVisionPage = () => {
  return (
    <PageLayout>
      <PageBanner title="Mission, Vision & Values" breadcrumbs={[{ label: 'Mission & Vision' }]} />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <p
            className="text-2xl md:text-3xl font-bold text-zinc-900 leading-relaxed italic"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            “A global leader in innovative and reliable Road &amp; Building Construction Machinery
            manufacturing, committed to quality, performance, and engineering excellence.”
          </p>
          <p className="text-zinc-600 leading-relaxed mt-6 text-[16px] max-w-[900px] mx-auto">
            At Speedcrafts, we specialize in delivering high performance, reliable, and user friendly
            construction machinery. With a strong foundation in engineering excellence and a passion for
            innovation, we empower infrastructure development around the World. Our solutions are designed
            to enhance productivity, ensure safety, and deliver unmatched quality, contributing to faster
            project completion, better roads, and stronger communities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            {
              icon: Eye,
              title: 'Vision',
              text: 'To be recognized globally as a trusted leader in the construction machinery industry, renowned for our innovation, quality excellence, and unwavering customer focus. We aim to drive infrastructure transformation by delivering cutting-edge solutions that improve connectivity and enrich lives.'
            },
            {
              icon: Target,
              title: 'Mission',
              text: 'To manufacture and supply the highest quality construction machinery that boosts project efficiency, ensures safety, and supports sustainable development. We are committed to continuous innovation, customer satisfaction, and building infrastructure that empowers economies and communities.'
            },
            {
              icon: Gem,
              title: 'Values',
              text: 'From concept to commissioning, every Speedcrafts machine is built with precision and purpose. We begin with thorough research and customer insights, followed by innovative design and engineering. Our manufacturing process follows strict quality standards, and our dedicated service team ensures smooth delivery, installation, and support.'
            }
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-shadow border-t-4 border-[#f5b218]"
            >
              <div className="w-16 h-16 rounded-full bg-[#f5b218]/15 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-[#d99a0e]" />
              </div>
              <h3
                className="text-2xl font-bold text-zinc-900 mb-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-zinc-600 leading-relaxed text-[15px]">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <StatsSection />
    </PageLayout>
  );
};

export default MissionVisionPage;
