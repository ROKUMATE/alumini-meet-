// import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactCard = () => {
    const cardRef = useScrollAnimation({ yStart: 80, opacityStart: 0 });
    
    return (
        <section id="contact" className="bg-transparent py-20 px-6 sm:px-8">
            <div className="max-w-md mx-auto bg-gray-900 border border-gray-700 shadow-xl rounded-2xl p-8" ref={cardRef}>
                <h2 className="text-3xl font-bold text-white text-center">
                    Get in Touch
                </h2>
                <p className="mt-4 text-lg text-gray-300 text-center">
                    Have questions or need assistance? Reach out to us anytime!
                </p>
                <div className="mt-8">
                    <div className="flex items-center gap-4 bg-gray-800 rounded-lg p-4">
                        <Mail className="text-gray-400 w-6 h-6" />
                        <a
                            href="mailto:alumninet@iiitm.ac.in"
                            className="text-lg font-medium text-gray-200 hover:text-white transition">
                            alumninet@iiitm.ac.in
                        </a>
                    </div>
                    {/* <div className="mt-4 flex items-center gap-4 bg-gray-800 rounded-lg p-4">
                        <Phone className="text-gray-400 w-6 h-6" />
                        <p className="text-lg font-medium text-gray-200">
                            +91-99XXXXXX97
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default ContactCard;