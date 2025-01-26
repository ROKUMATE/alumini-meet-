const Network = () => {
    return (
        <section id="network" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Alumni Network
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Stay connected with the IIITM community
                    </p>
                </div>

                <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Official Channels
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <span className="block font-medium">
                                    Mailing List:
                                </span>
                                <a
                                    href="mailto:alumni@iiitm.ac.in"
                                    className="text-blue-600 hover:text-blue-800">
                                    alumni@iiitm.ac.in
                                </a>
                            </li>
                            <li>
                                <span className="block font-medium">
                                    Contact Email:
                                </span>
                                <a
                                    href="mailto:alumninet@iiitm.ac.in"
                                    className="text-blue-600 hover:text-blue-800">
                                    alumninet@iiitm.ac.in
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Social Media
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://www.linkedin.com/groups/59379/"
                                    target="_blank"
                                    className="flex items-center text-blue-600 hover:text-blue-800">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                                    </svg>
                                    IIITM Alumni Network
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/groups/1496537263921717/"
                                    target="_blank"
                                    className="flex items-center text-blue-600 hover:text-blue-800">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    Alumni Association
                                </a>
                            </li>
                            <li>
                                <p className="flex items-center text-blue-600">To join IIITM WhatsApp Group, contact Kunal Vardani at +91 99296 46997</p>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Local Chapters
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Coming soon...
                        </p>
                        {/* <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Contact for Details
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Network;
