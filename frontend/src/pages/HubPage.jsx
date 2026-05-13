import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { ArrowUpRight } from 'lucide-react';

const HubPage = ({ title, breadcrumb, sections }) => {
  return (
    <PageLayout>
      <PageBanner title={title} breadcrumbs={[{ label: breadcrumb }]} />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group relative overflow-hidden rounded-xl bg-zinc-100 shadow-md hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-xl md:text-2xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>
                        {s.title}
                      </h3>
                      <p className="text-zinc-200 text-sm mt-1">{s.desc}</p>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#f5b218] text-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export const GalleryHubPage = () => (
  <HubPage
    title="Gallery"
    breadcrumb="Gallery"
    sections={[
      { title: 'Products', desc: 'See our plants installed across the world.', href: '/gallery/products', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/5-76.webp' },
      { title: 'Exhibitions', desc: 'Trade shows and expos we have participated in.', href: '/gallery/exhibitions', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/62-5.webp' },
      { title: 'Clients Visit', desc: 'Customers visiting our manufacturing facilities.', href: '/gallery/clients-visit', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/Untitled-design-9.webp' },
      { title: 'Despatch', desc: 'Plants ready and packed for global despatch.', href: '/gallery/despatch', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/7-1.webp' },
      { title: 'Port Stuffing', desc: 'Container stuffing operations at Indian ports.', href: '/gallery/port-stuffing', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/14-1.webp' },
      { title: 'Videos', desc: 'Watch Speedcrafts machines in action.', href: '/gallery/videos', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/6-74.webp' }
    ]}
  />
);

export const InformationHubPage = () => (
  <HubPage
    title="Information"
    breadcrumb="Information"
    sections={[
      { title: 'For Buyers', desc: 'Why buy a Speedcrafts plant and how the process works.', href: '/information/for-buyers', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/1.png' },
      { title: 'For Competitors', desc: 'How we approach competition and industry collaboration.', href: '/information/for-competitors', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/2-1.png' }
    ]}
  />
);

export const BusinessHubPage = () => (
  <HubPage
    title="Business"
    breadcrumb="Business"
    sections={[
      { title: 'Dealership', desc: 'Become an authorised Speedcrafts dealer in your region.', href: '/business/dealership', image: 'https://speedcrafts.com/wp-content/uploads/2025/08/60.png' },
      { title: 'Joint Venture / Collaboration', desc: 'Strategic partnerships and technology tie-ups.', href: '/business/joint-venture', image: 'https://speedcrafts.com/wp-content/uploads/2025/07/4-2-scaled-1.webp' }
    ]}
  />
);

export default HubPage;
