// import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactCard = () => {
    return (
        <section className="bg-blue-50 py-20 px-6 sm:px-8">
            <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Get in Touch
                </h2>
                <p className="mt-4 text-lg text-gray-700 text-center">
                    Have questions or need assistance? Reach out to us anytime!
                </p>
                <div className="mt-8">
                    <div className="flex items-center gap-4 bg-blue-50 rounded-lg p-4">
                        <Mail className="text-blue-600 w-6 h-6" />
                        <a
                            href="mailto:alumninet@iiitm.ac.in"
                            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">
                            alumninet@iiitm.ac.in
                        </a>
                    </div>
                    <div className="mt-4 flex items-center gap-4 bg-blue-50 rounded-lg p-4">
                        <Phone className="text-blue-600 w-6 h-6" />
                        <p className="text-lg font-medium text-gray-800">
                            +91-99XXXXXX97
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCard;