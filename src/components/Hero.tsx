// import Image from "../assets/Poster.png";

const Hero = () => {
    return (
        <div className="pt-16 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center min-h-screen">
            <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Welcome to</span>

                        <span className="block text-customBlue">
                            ABV-IIITM Alumni Network
                        </span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Connect with your alma mater, network with fellow
                        alumni, and stay involved with the IIITM community.
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:justify-center md:mt-8">
                        <div className="rounded-md shadow">
                            <a
                                href="https://forms.gle/jpsTnk42FB8514jE8"
                                target="_blank"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                Join Alumni Network
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="flex justify-center items-center py-8 md:w-1/2">
                    <img
                        src={Image}
                        alt="CollegeIMG"
                        className="w-full p-10 max-w-2xl h-full rounded-3xl "
                    />
                </div> */}
            </div>
        </div>
    );
};

export default Hero;
