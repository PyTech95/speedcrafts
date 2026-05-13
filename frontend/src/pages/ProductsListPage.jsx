import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { ArrowUpRight } from 'lucide-react';
import { productList } from '../mock';

const ProductsListPage = () => {
  return (
    <PageLayout>
      <PageBanner title="Our Products" breadcrumbs={[{ label: 'Products' }]} />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Construction Machinery Range
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
            <p className="text-zinc-600 max-w-[750px] mx-auto mt-5">
              Asphalt plants, concrete batching plants and a complete range of road construction
              equipment trusted in 60+ countries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {productList.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-zinc-100 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={p.bannerImage}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3
                          className="text-white text-xl md:text-2xl font-bold leading-snug"
                          style={{ fontFamily: "'Oswald', sans-serif" }}
                        >
                          {p.title}
                        </h3>
                        <p className="text-[#f5b218] text-sm mt-1 font-medium">{p.subtitle}</p>
                      </div>
                      <div className="shrink-0 w-11 h-11 rounded-full bg-[#f5b218] text-black flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
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

export default ProductsListPage;
