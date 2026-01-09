import { useState } from "react";
import logo from "../assets/image.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center text-white">
                    {/* Left side - Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="IIITM Logo" className="h-16 w-auto" />
                    </div>

                    {/* Right side - Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="#gallery"
                            className="text-gray-200 hover:text-white transition-colors">
                            Gallery
                        </a>
                        <a
                            href="#guidelines"
                            className="text-gray-200 hover:text-white transition-colors">
                            Guidelines
                        </a>
                        <a
                            href="#campus"
                            className="text-gray-200 hover:text-white transition-colors">
                            Campus Visit
                        </a>
                        <a
                            href="/directory"
                            className="text-gray-200 hover:text-white transition-colors">
                            Network
                        </a>
                        <a
                            href="#donate"
                            className="text-gray-200 hover:text-white transition-colors">
                            Donate
                        </a>
                        <a
                            href="https://forms.gle/jpsTnk42FB8514jE8"
                            target="_blank"
                            className="px-4 py-2 rounded-md bg-blue-600/40 hover:bg-blue-600/60 border border-blue-400/30 backdrop-blur transition-all">
                            Join Alumni Cell
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white">
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
                <div className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <a
                            href="#gallery"
                            onClick={handleLinkClick}
                            className="block px-3 py-2 text-gray-100 hover:text-white">
                            Gallery
                        </a>
                        <a
                            href="#guidelines"
                            onClick={handleLinkClick}
                            className="block px-3 py-2 text-gray-100 hover:text-white">
                            Guidelines
                        </a>
                        <a
                            href="#campus"
                            onClick={handleLinkClick}
                            className="block px-3 py-2 text-gray-100 hover:text-white">
                            Campus Visit
                        </a>
                        <a
                            href="/directory"
                            onClick={handleLinkClick}
                            className="block px-3 py-2 text-gray-100 hover:text-white">
                            Network
                        </a>
                        <a
                            href="#donate"
                            onClick={handleLinkClick}
                            className="block px-3 py-2 text-gray-100 hover:text-white">
                            Donate
                        </a>
                        <a
                            href="https://forms.gle/jpsTnk42FB8514jE8"
                            onClick={handleLinkClick}
                            className="block px-3 py-2 text-white bg-blue-600/40 rounded-md mt-2">
                            Join Alumni Cell
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
