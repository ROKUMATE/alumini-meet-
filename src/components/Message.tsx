import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Message = () => {
  const titleRef = useScrollAnimation({ yStart: 50, opacityStart: 0 });
  const cardsRef = useScrollAnimation({ yStart: 80, opacityStart: 0, delay: 0.2 });
  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership Messages
          </h2>
          <p className="text-gray-300 text-lg">Inspiring words from our institute leadership</p>
        </div>

        <div className="flex flex-col gap-8" ref={cardsRef}>
          {/* Director Card */}
          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-700">
            <div className="flex flex-col md:flex-row">
              {/* Image on Left */}
              <div className="md:w-1/3 h-64 md:h-auto bg-gray-800 overflow-hidden relative flex-shrink-0">
                <img 
                  src="https://www.cdpcelliiitmg.info/images/director.jpg" 
                  alt="Director" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Text on Right */}
              <div className="p-8 md:w-2/3">
                <div className="inline-block mb-3 px-3 py-1 bg-gray-800 text-gray-200 text-xs font-semibold rounded-full">
                  Director
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Message from Director</h3>
                <p className="text-sm text-gray-300 font-semibold mb-4">Prof. Sri Niwas Singh</p>
                <div className="w-12 h-1 bg-gray-600 rounded-full mb-4"></div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Dear Alumnus,<br /><br />
                  Warm greetings to all! Here at ABV-IIITM, we have stayed together as a family having each other's back throughout one's journey in this institute. It gives me immense pleasure to welcome you all on the ABV-IIITM Alumni Portal which acts as a marvelous common platform for all the alumni of our institute present at different corners of the world to meet and share about their journeys of life.
                </p>
              </div>
            </div>
          </div>

          {/* Dean Card */}
          <div className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-700">
            <div className="flex flex-col md:flex-row">
              {/* Image on Left */}
              <div className="md:w-1/3 h-64 md:h-auto bg-gray-700 overflow-hidden relative flex-shrink-0">
                <img 
                  src="https://www.iiitm.ac.in/images/demo/teachers/1686288088_pksingh%20(2).jpg" 
                  alt="Dean" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Text on Right */}
              <div className="p-8 md:w-2/3">
                <div className="inline-block mb-3 px-3 py-1 bg-gray-800 text-gray-200 text-xs font-semibold rounded-full">
                  Dean
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Message from Dean</h3>
                <p className="text-sm text-gray-300 font-semibold mb-4">Prof. Pramod Kumar Singh</p>
                <div className="w-12 h-1 bg-gray-600 rounded-full mb-4"></div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Dear Alumnus,<br /><br />
                  Warm greetings to all! On behalf of office of Career Development & Placement Cell services at IIITM Gwalior and my personal behalf, I welcome you to our webpage. It's a matter of great pride to mention that we IIITians at Gwalior, celebrating the 25th year of establishment are among the most preferred institutes in IT and CS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message; 