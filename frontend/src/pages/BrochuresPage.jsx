import React from 'react';
import PageLayout from '../components/PageLayout';
import PageBanner from '../components/PageBanner';
import { Download, FileText } from 'lucide-react';
import { brochures } from '../mock';
import { useToast } from '../hooks/use-toast';

const BrochuresPage = () => {
  const { toast } = useToast();
  return (
    <PageLayout>
      <PageBanner
        title="Brochures"
        breadcrumbs={[{ label: 'Information' }, { label: 'Brochures' }]}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#d99a0e]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Product Brochures
            </h2>
            <div className="h-1 w-20 bg-[#f5b218] rounded-full mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brochures.map((b) => (
              <div
                key={b.id}
                className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-[200px] overflow-hidden bg-zinc-100">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 text-[#f5b218] px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1">
                    <FileText className="w-3 h-3" /> PDF
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-zinc-900 text-lg leading-snug" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {b.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-zinc-500">{b.size}</span>
                    <button
                      onClick={() =>
                        toast({
                          title: 'Download starting',
                          description: `${b.title} will be sent to your email shortly.`
                        })
                      }
                      className="inline-flex items-center gap-1 text-[#d99a0e] hover:text-[#b07e08] font-semibold"
                    >
                      <Download className="w-4 h-4" /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BrochuresPage;
