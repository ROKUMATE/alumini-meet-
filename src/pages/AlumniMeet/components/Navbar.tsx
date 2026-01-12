import { useState } from 'react';
import { Link } from 'react-router-dom';

const AlumniMeetNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo / Back Link */}
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="font-semibold">Back to Main</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {[
                            ['Home', '#hero'],
                            ['Timelines', '#timeline'],
                            ['Contact', '#contact'],
                        ].map(([label, link]) => (
                            <a
                                key={label}
                                href={link}
                                onClick={handleLinkClick}
                                className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition
                                           after:absolute after:-bottom-1 after:left-0
                                           after:h-[2px] after:w-0 after:bg-blue-600
                                           hover:after:w-full after:transition-all">
                                {label}
                            </a>
                        ))}

                        <a
                            href="https://forms.gle/kV4GqQhJKNKFP7QP6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 rounded-md bg-blue-600 px-5 py-2 text-white
                                       hover:bg-blue-700 transition shadow-sm">
                            Express Interest
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isOpen
                                            ? 'M6 18L18 6M6 6l12 12'
                                            : 'M4 6h16M4 12h16M4 18h16'
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
                    <div className="px-6 py-5 space-y-4 text-sm font-medium">
                        <Link
                            to="/"
                            onClick={handleLinkClick}
                            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            ← Back to Main Site
                        </Link>
                        {[
                            ['Home', '#hero'],
                            ['Timelines', '#timeline'],
                            ['Contact', '#contact'],
                        ].map(([label, link]) => (
                            <a
                                key={label}
                                href={link}
                                onClick={handleLinkClick}
                                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                                {label}
                            </a>
                        ))}

                        <a
                            href="https://forms.gle/3uHB9GgVaZDCNdUC6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 transition">
                            Express Interest
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default AlumniMeetNavbar;
