const Campus = () => {
    return (
        <section id="campus" className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Campus Visit Guide
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Welcome back to your alma mater
                    </p>
                </div>

                <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-2">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Visitor Gate Pass
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    No gate pass needed with digital/physical
                                    alumni card
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Email your visit details to
                                    alumninet@iiitm.ac.in
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Accommodation
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-600">
                                Stay at our Visitor Hostel with special alumni
                                discount
                            </p>
                            <a
                                href="https://iiitm.ac.in/images/2024/July_2024/Visitor-Hostel-Guest-House-Booking-Form-1.pdf"
                                target="_blank"
                                className="inline-block text-blue-600 hover:text-blue-800">
                                Download Booking Form →
                            </a>
                            <p className="text-sm text-gray-500 mt-2">
                                Pro Tip: No need to print the form. Fill it at
                                check-in. Digital payments accepted.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Group Visits
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Planning to visit with your batch? We'll arrange:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">✓</span>
                                Campus tours
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">✓</span>
                                Student interactions
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">✓</span>
                                Faculty meetings
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">✓</span>
                                Accommodation coordination
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Student Interaction
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Connect with current students through:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Informal walks and talks
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Student club interactions
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    AlumniConnect formal sessions
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Campus;
