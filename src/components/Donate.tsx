const Donate = () => {
    return (
        <section id="donate" className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Support Your Alma Mater
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Help us nurture the next generation
                    </p>
                </div>

                <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-2">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Bank Details
                        </h3>
                        <div className="space-y-3">
                            <p className="flex justify-between">
                                <span className="font-medium">
                                    Account Name:
                                </span>
                                <span>ABV-IIITM ALUMNI ASSOCIATION</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="font-medium">Bank:</span>
                                <span>
                                    Bank of India (IIITM Campus, Gwalior)
                                </span>
                            </p>
                            <p className="flex justify-between">
                                <span className="font-medium">
                                    Account Number:
                                </span>
                                <span>945210100125037</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="font-medium">IFSC Code:</span>
                                <span>BKID0009462</span>
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Support Initiatives
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Cultural festival (Aurora), technical fest
                                    (Infotsav), sports fest (Urja and Twaran)
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Hostel upgradation and facilities
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Student scholarships and fee support
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                                    •
                                </span>
                                <span className="ml-3 text-gray-600">
                                    Research labs and development activities
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Other Ways to Contribute
                        </h3>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-medium mb-2">
                                    Curriculum Development
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Share your expertise to improve academic
                                    programs
                                </p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-medium mb-2">Mentorship</h4>
                                <p className="text-sm text-gray-600">
                                    Guide students and startups
                                </p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-medium mb-2">
                                    Industry Connect
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Help establish MOUs and placement
                                    opportunities
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
