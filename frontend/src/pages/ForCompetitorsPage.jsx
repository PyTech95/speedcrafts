import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Handshake, Scale, Target, Users, ShieldCheck, MessageSquare } from 'lucide-react';

const principles = [
  { icon: Handshake, title: 'Healthy Competition', text: 'We believe a competitive industry pushes everyone to innovate faster and serve customers better. We respect every player in our space.' },
  { icon: Scale, title: 'Ethical Conduct', text: 'We do not engage in price wars, false claims, disparaging rivals or any anti-competitive practice. Our growth is earned through quality.' },
  { icon: Target, title: 'Customer First', text: 'The end customer is always the winner. We focus on building reliable machines, not on undermining others.' },
  { icon: Users, title: 'Industry Collaboration', text: 'We participate in industry associations, exhibitions and policy discussions to grow the construction-equipment sector as a whole.' },
  { icon: ShieldCheck, title: 'Intellectual Property', text: 'We protect our own designs and respect those of others. Reverse engineering or copying is never a route we pursue.' },
  { icon: MessageSquare, title: 'Open Dialogue', text: 'If you are a competitor with feedback, partnership ideas or collaboration interest, we welcome a respectful conversation.' }
];

const ForCompetitorsPage = () => {
  return (
    <PageLayout>
      <PageBanner title="For Competitors" breadcrumbs={[{ label: 'Information' }, { label: 'For Competitors' }]} />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d99a0e]" style={{ fontFamily: "'Oswald', sans-serif" }}>
            How We Approach Competition
          </h2>
          <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          <p className="text-zinc-600 leading-relaxed mt-5 max-w-[820px] mx-auto">
            Speedcrafts has grown over five decades alongside many talented competitors. We treat
            every other manufacturer in the road and construction equipment industry with respect,
            and we believe the only sustainable way to win is to build genuinely better machines.
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white border border-zinc-200 hover:border-[#f5b218] hover:shadow-xl transition-all rounded-xl p-7">
              <div className="w-14 h-14 rounded-lg bg-[#f5b218] text-black flex items-center justify-center mb-4">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {title}
              </h3>
              <p className="text-zinc-600 leading-relaxed text-[15px]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-zinc-50">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
            A Note to Fellow Manufacturers
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            If you are exploring a manufacturing partnership, supplier arrangement, technology
            licensing or any other form of collaboration, we are happy to talk. The construction
            equipment industry is large enough for all of us to grow together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-7 px-7 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default ForCompetitorsPage;
