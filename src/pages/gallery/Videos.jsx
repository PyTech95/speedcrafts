import React, { useMemo, useState } from "react";
import bg from "../../images/Untitled-design-10.webp";
import img1_1 from "../../images/v1.jpg";
import img30_1 from "../../images/v2.jpg";
import img8 from "../../images/v3.jpg";
import img7 from "../../images/v4.jpg";
import img6 from "../../images/v5.jpg";
import img5 from "../../images/v6.jpg";
import img4 from "../../images/v7.jpg";
import img3 from "../../images/v8.jpeg";
import img2 from "../../images/v9.png";

export default function Videos() {
  const title = "Videos";
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = useMemo(
    () => [
      { id: 1, url: "https://youtu.be/ueQEli_7iww", thumb: img1_1 },
      { id: 2, url: "https://youtu.be/NulGI46tdJM", thumb: img30_1 },
      { id: 3, url: "https://youtu.be/EuxYQz5gzJ0", thumb: img8 },
      { id: 4, url: "https://youtu.be/du-x4UyovgA", thumb: img7 },
      { id: 5, url: "https://youtu.be/Hxm23zTFn7U", thumb: img6 },
      { id: 6, url: "https://youtu.be/K4RAtvz4_tY", thumb: img5 },
      { id: 7, url: "https://youtu.be/j3Fd67HP_Xs", thumb: img4 },
      { id: 8, url: "https://youtu.be/Krd-AAwzad0", thumb: img2 },
      { id: 9, url: "https://youtu.be/tSHdecA1DR4", thumb: img3 },
      { id: 10, url: "https://youtu.be/EHVGJUvQguU",thumb: img2 }

    ],
    []
  );

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <div className="relative h-[220px] md:h-[320px] overflow-hidden">
        <img src={bg} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="mt-2 font-semibold">
              Home / <span className="text-amber-400">{title}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ================= VIDEO GRID ================= */}
      <div className="mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Thumbnail */}
              <img
                src={video.thumb}
                alt="Video Thumbnail"
                className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay + Play */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= MODAL ================= */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden">

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-0 right-0 w-6 h-6 rounded-full font-bold cursor-pointer border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              ✕
            </button>

            <iframe
              className="w-full h-[320px] sm:h-[420px] md:h-[520px]"
              src={`https://www.youtube.com/embed/${activeVideo.url.replace(
                "https://youtu.be/",
                ""
              )}?autoplay=1`}
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
