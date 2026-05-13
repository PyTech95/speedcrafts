import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <PageLayout>
      <section className="min-h-[80vh] flex items-center justify-center bg-white pt-[80px] pb-20">
        <div className="text-center px-6">
          <div
            className="text-[140px] md:text-[200px] font-extrabold text-[#f5b218] leading-none"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            404
          </div>
          <h1
            className="text-2xl md:text-4xl font-bold text-zinc-900 mt-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Oops! That page can&apos;t be found
          </h1>
          <p className="text-zinc-600 mt-3 max-w-[500px] mx-auto">
            It looks like nothing was found at this location. Try heading back to the homepage.
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#f5b218] hover:bg-[#e0a30a] text-black font-semibold rounded-sm transition-colors"
            >
              <HomeIcon className="w-4 h-4" /> Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-7 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Go Back
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFoundPage;
