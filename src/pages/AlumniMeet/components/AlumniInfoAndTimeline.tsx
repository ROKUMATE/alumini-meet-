const AlumniInfoAndTimeline = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-[1500px] mx-auto">

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Timeline Card */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10 flex flex-col justify-between transition-colors duration-300">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Event Timeline
                            </h3>

                            <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-8 text-center transition-colors duration-300">
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                                    Timeline To Be Announced Soon
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Session details, activity flow, and timings
                                    will be shared shortly. We appreciate your
                                    patience and look forward to welcoming you
                                    back to campus.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Alumni Association Card */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10 flex flex-col justify-between transition-colors duration-300">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                ABV-IIITM Gwalior Alumni Association
                            </h3>

                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                The ABV-IIITM Gwalior Alumni Association conducts
                                multiple initiatives and events to foster strong
                                connections among alumni and with the institute.
                            </p>

                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                Alumni frequently visit the campus, participate
                                in institute activities, and organize batch-wise
                                mini alumni meets, strengthening lifelong bonds
                                with their alma mater.
                            </p>
                        </div>

                        <div className="text-right">
                            <a
                                href="http://alumni.iiitm.ac.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md
                                           hover:bg-blue-700 transition shadow-md"
                            >
                                Visit Alumni Website
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AlumniInfoAndTimeline;
