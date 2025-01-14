const Guidelines = () => {
    return (
        <section id="guidelines" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Alumni Guidelines
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Everything you need to know about staying connected with
                        IIITM
                    </p>
                </div>

                <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Getting Started
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    ✓
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Fill out the alumni registration form
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    ✓
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Receive your digital alumni card
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    ✓
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Join the alumni mailing list
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
