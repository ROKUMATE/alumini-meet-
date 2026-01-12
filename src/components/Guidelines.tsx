import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Guidelines = () => {
    const titleRef = useScrollAnimation({ yStart: 50, opacityStart: 0 });
    const cardsRef = useScrollAnimation({ yStart: 80, opacityStart: 0, delay: 0.2 });
    
    return (
        <section id="guidelines" className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center" ref={titleRef}>
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Alumni Guidelines
                    </h2>
                    <p className="mt-4 text-xl text-gray-300">
                        Everything you need to know about staying connected with
                        IIITM
                    </p>
                </div>

                <div className="mt-12 flex justify-center" ref={cardsRef}>
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-full max-w-md">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Privileges for applying
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    ✓
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Issue Alumni Card
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    ✓
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Membership of mailing list
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    ✓
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Discounted on-campus accomodation
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Add more guideline cards here */}
                </div>
            </div>
        </section>
    );
};

export default Guidelines;
