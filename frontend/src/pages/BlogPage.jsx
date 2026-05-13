import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blog } from '../mock';

const BlogPage = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Blog"
        breadcrumbs={[{ label: 'Information' }, { label: 'Blog' }]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blog.map((b) => (
              <article
                key={b.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow border border-zinc-100 flex flex-col md:flex-row"
              >
                <div className="relative md:w-2/5 h-[200px] md:h-auto overflow-hidden shrink-0">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#d99a0e]" /> {b.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#d99a0e]" /> {b.author}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-zinc-900 mb-2 leading-snug group-hover:text-[#d99a0e] transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{b.excerpt}</p>
                  <button className="mt-3 inline-flex items-center gap-1 text-[#d99a0e] font-semibold text-sm hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
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

export default BlogPage;
