import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Calendar, ArrowRight } from 'lucide-react';
import { news } from '../mock';

const NewsPage = () => {
  return (
    <PageLayout>
      <PageBanner
        title="News & Updates"
        breadcrumbs={[{ label: 'Information' }, { label: 'News' }]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((n) => (
              <article
                key={n.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow border border-zinc-100"
              >
                <div className="relative h-[230px] overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#d99a0e] font-semibold inline-flex items-center gap-1 mb-2">
                    <Calendar className="w-4 h-4" /> {n.date}
                  </div>
                  <h3
                    className="text-xl font-bold text-zinc-900 mb-3 leading-snug group-hover:text-[#d99a0e] transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {n.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">{n.excerpt}</p>
                  <button className="mt-4 inline-flex items-center gap-1 text-[#d99a0e] font-semibold hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NewsPage;
