import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Gallery = () => {
  const titleRef = useScrollAnimation({ yStart: 50, opacityStart: 0 });
  const galleryRef = useScrollAnimation({ yStart: 80, opacityStart: 0, delay: 0.2 });
  const images = [
    {
      src: "https://res.cloudinary.com/dge7dzxe0/image/upload/v1738065360/DSC_7079_jiewpn.webp",
      alt: "Gallery Image 1"
    },
    {
      src: "https://res.cloudinary.com/dge7dzxe0/image/upload/v1738065476/DSC_7471_epqbe0.webp",
      alt: "Gallery Image 2"
    },
    {
      src: "https://res.cloudinary.com/dge7dzxe0/image/upload/v1738065579/DSC_7500_fjua7r.webp",
      alt: "Gallery Image 3"
    },
    {
      src: "https://res.cloudinary.com/dge7dzxe0/image/upload/v1738065645/DSC_7524_lhojxd.webp",
      alt: "Gallery Image 4"
    }
  ];
  const marqueeImages = [...images, ...images];

  return (
    <section id="gallery" className="py-20 px-0 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 mb-12" ref={titleRef}>
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Photo Gallery
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg">Explore memorable moments from our alumni events</p>
        </div>
      </div>

      {/* Full-width Marquee Gallery */}
      <div className="relative overflow-hidden" ref={galleryRef}>
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 gallery-fade-left z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 gallery-fade-right z-10 pointer-events-none"></div>

        <div className="relative">
          <div className="marquee-track flex gap-6 p-6 pl-12 animate-marquee">
            {marqueeImages.map((image, index) => {
              const isDuplicate = index >= images.length;
              return (
                <div
                  key={`${image.src}-${index}`}
                  className="flex-shrink-0 group"
                  aria-hidden={isDuplicate}
                >
                  <div className="relative w-96 h-screen-70 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-gray-900">
                    {/* Image container */}
                    <div className="w-full h-full bg-gray-900 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-8 text-white w-full">
                        <p className="text-lg font-semibold">Memory #{(index % images.length) + 1}</p>
                        <p className="text-sm text-gray-200 mt-2">Hover to pause</p>
                      </div>
                    </div>

                    {/* Border accent */}
                    <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="flex justify-center mt-12">
        <div className="flex gap-3 items-center">
          <svg className="w-5 h-5 text-gray-200 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
          <p className="text-gray-400 font-medium">Gallery plays automatically — hover to pause</p>
          <svg className="w-5 h-5 text-gray-200 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
      </div> */}

      <style>{`
        .marquee-track {
          width: max-content;
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .h-screen-70 {
          height: 70vh;
          max-height: 600px;
        }
        @media (max-width: 768px) {
          .h-screen-70 {
            height: 50vh;
            max-height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery; 