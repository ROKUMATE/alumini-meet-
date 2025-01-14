const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">
                            ABV-IIITM Alumni Association
                        </h3>
                        <p className="text-sm">
                            Stay connected with your alma mater
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="https://www.linkedin.com/in/abviiitmalumni/"
                            target="_blank"
                            className="hover:text-blue-400">
                            LinkedIn
                        </a>
                        <a
                            href="https://x.com/ABVIIITM_alumni"
                            target="_blank"
                            className="hover:text-blue-400">
                            X
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    &copy; 2024 ABV-IIITM Alumni Association. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
