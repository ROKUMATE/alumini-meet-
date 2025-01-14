import { useState } from "react";
import logo from "../assets/image.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 ">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="IIITM Logo"
                            className="h-12 w-auto"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#guidelines"
                            className="text-gray-600 hover:text-blue-600">
                            Guidelines
                        </a>
                        <a
                            href="#campus"
                            className="text-gray-600 hover:text-blue-600">
                            Campus Visit
                        </a>
                        <a
                            href="#network"
                            className="text-gray-600 hover:text-blue-600">
                            Network
                        </a>
                        <a
                            href="#donate"
                            className="text-gray-600 hover:text-blue-600">
                            Donate
                        </a>
                        <a
                            href="https://forms.gle/jpsTnk42FB8514jE8"
                            target="_blank"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Join Alumni Cell
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600">
                            {/* Hamburger icon */}
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
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#guidelines"
                            className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                            Guidelines
                        </a>
                        <a
                            href="#campus"
                            className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                            Campus Visit
                        </a>
                        <a
                            href="#network"
                            className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                            Network
                        </a>
                        <a
                            href="#donate"
                            className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                            Donate
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
