import { Mail } from "lucide-react";

const ContactCard = () => {
    return (
        <section id="contact" className="bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Contact Us
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* Contact Card */}
                <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                        Get in Touch
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-center mb-8 leading-relaxed">
                        For any queries related to the Alumni Meet 2026 or alumni
                        initiatives, please feel free to contact us using the
                        details below.
                    </p>

                    {/* Email */}
                    <div className="flex items-center justify-center gap-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-5 transition-colors duration-300">
                        <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                        <a
                            href="mailto:alumninet@iiitm.ac.in"
                            className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            alumninet@iiitm.ac.in
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCard;
