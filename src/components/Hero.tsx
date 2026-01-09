// import Image from "../assets/Poster.png";
import { useSequenceAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import AlumniMeetBanner from '../assets/5.png';

const Hero = () => {
    const heroRef = useSequenceAnimation({
        sequence: [
            {
                selector: '[data-hero="badge"]',
                from: { opacity: 0, y: 30, scale: 0.8 },
                to: { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.2)' }
            },
            {
                selector: '[data-hero="heading"]',
                from: { opacity: 0, y: 50 },
                to: { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            },
            {
                selector: '[data-hero="subtitle"]',
                from: { opacity: 0, y: 30 },
                to: { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
            },
            {
                selector: '[data-hero="cta"]',
                from: { opacity: 0, y: 40, scale: 0.9 },
                to: { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.1)' }
            },
            {
                selector: '[data-hero="stats"] > div',
                from: { opacity: 0, y: 50 },
                to: { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            }
        ],
        stagger: 0.1
    });

    return (
        <div className="pt-24 md:pt-28 relative overflow-hidden min-h-screen flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 bg-transparent">
                {/* Animated background blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
            </div>

            {/* Content */}
            <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center relative z-10" ref={heroRef}>
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-block mb-6 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all" data-hero="badge">
                        <span className="text-white text-sm font-semibold tracking-wider">WELCOME TO ALUMNI COMMUNITY</span>
                    </div>
                    
                    {/* Main heading */}
                    <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl mb-8 leading-tight" data-hero="heading">
                        <span className="block mb-2">ABV-IIITM</span>
                        <span className="block text-gray-200">
                            Alumni Network
                        </span>
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="mt-8 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-10 md:text-xl md:max-w-3xl leading-relaxed" data-hero="subtitle">
                        Connect with your alma mater, network with fellow alumni, and stay involved with the IIITM community across the globe
                    </p>
                    
                    {/* CTA Button */}
                    <div className="mt-12 max-w-md mx-auto flex flex-col items-center gap-4" data-hero="cta">
                        <div className="rounded-xl shadow-2xl hover:shadow-3xl transition-all w-full">
                            <a
                                href="https://forms.gle/jpsTnk42FB8514jE8"
                                target="_blank"
                                className="w-full flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:py-5 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Join Alumni Network
                            </a>
                        </div>

                        {/* Alumni Meet Banner */}
                        <div className="w-full mx-auto my-6">
                            <Link to="/alumnimeet" className="block">
                                <img 
                                    src={AlumniMeetBanner} 
                                    alt="Alumni Meet 2026 Banner" 
                                    className="w-full h-auto rounded-xl shadow-2xl transform transition-transform hover:scale-105"
                                />
                            </Link>
                        </div>
                        <div className="w-full">
                            <Link
                                to="/alumnimeet"
                                className="w-full flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-gray-700 hover:bg-gray-600 md:py-5 md:text-lg md:px-10 transition-all duration-200 shadow-xl transform hover:scale-105"
                            >
                                Explore Alumni Meet
                            </Link>
                        </div>

                        <div className="w-full">
                            <Link
                                to="/directory"
                                className="w-full flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-emerald-600 hover:bg-emerald-500 md:py-5 md:text-lg md:px-10 transition-all duration-200 shadow-xl transform hover:scale-105"
                            >
                                View Directory
                            </Link>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto" data-hero="stats">
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-emerald-300">5000+</p>
                            <p className="text-purple-200 text-sm mt-2">Active Alumni</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-bold text-violet-300">50+</p>
                            <p className="text-purple-200 text-sm mt-2">Countries</p>
                        </div>
                        <div className="text-center md:col-span-1 col-span-2">
                            <p className="text-3xl md:text-4xl font-bold text-emerald-300">100+</p>
                            <p className="text-purple-200 text-sm mt-2">Companies</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};

export default Hero;
