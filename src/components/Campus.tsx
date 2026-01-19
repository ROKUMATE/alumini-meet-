import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Campus = () => {
    const titleRef = useScrollAnimation({ yStart: 50, opacityStart: 0 });
    const cardsRef = useScrollAnimation({ yStart: 80, opacityStart: 0, delay: 0.2 });
    
    return (
        <section id="campus" className="py-24 scroll-mt-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center" ref={titleRef}>
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Campus Visit Guide
                    </h2>
                    <p className="mt-4 text-xl text-gray-300">
                        Welcome back to your alma mater
                    </p>
                </div>

                <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-2" ref={cardsRef}>
                    <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Visitor Gate Pass
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    •
                                </span>
                                <span className="ml-3 text-gray-300">
                                    No gate pass needed with digital/physical
                                    alumni card
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    •
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Email your visit details to
                                    alumninet@iiitm.ac.in
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    •
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Any special requirements
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Accommodation
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-300">
                                Stay at our Visitor Hostel with special alumni
                                discount
                            </p>
                            <a
                                href="https://iiitm.ac.in/images/2024/July_2024/Visitor-Hostel-Guest-House-Booking-Form-1.pdf"
                                target="_blank"
                                className="inline-block text-gray-200 hover:text-white">
                                Download Booking Form →
                            </a>
                            <p className="text-sm text-gray-400 mt-2">
                                Pro Tip: Fill this form and send to alumninet@iiitm.ac.in. No need to fill the form just email us the details.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Group Visits
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Planning to visit with your batch? We'll arrange:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-gray-400 mr-2">✓</span>
                                <span className="text-gray-300">Campus tours</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-gray-400 mr-2">✓</span>
                                <span className="text-gray-300">Student interactions</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-gray-400 mr-2">✓</span>
                                <span className="text-gray-300">Faculty meetings</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-gray-400 mr-2">✓</span>
                                <span className="text-gray-300">Accommodation coordination</span>
                            </li>
                            <li className="flex items-center font-semibold">
                                <span className="text-gray-200">Email the visit details at alumninet@iiitm.ac.in</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Student Interaction
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Connect with current students through:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    •
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Informal walks and talks
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    •
                                </span>
                                <span className="ml-3 text-gray-300">
                                    Student club interactions
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-gray-400">
                                    •
                                </span>
                                <span className="ml-3 text-gray-300">
                                    AlumniConnect formal sessions
                                </span>
                            </li>
                            <li className="flex items-center font-semibold">
                                <span className="text-gray-200">Connect with us at alumninet@iiitm.ac.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Campus;
