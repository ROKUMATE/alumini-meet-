import Image from '../assets/Poster.png';

const Hero = () => {
    return (
        <div className="pt-16 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center min-h-screen">
            <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Welcome to</span>
                        <span className="block text-customBlue">
                        <span className="block text-customBlue">
                            ABV-IIITM Alumni Network
                        </span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        {
                            // Connect with your alma mater, network with fellow
                            // alumni, and stay involved with the IIITM community.
                        }
                        As we go about our daily routines, it is all too easy to
                        become so focused on the present that we forget to take
                        a moment to appreciate the beauty that surrounds us. We
                        may not realize it at the time, but there are so many
                        little things that bring joy and wonder to our lives on
                        a daily basis. Unfortunately, it is often not until much
                        later, when these things are no longer a part of our
                        daily experience, that we come to truly appreciate them.
                        This is where the Annual Alumni Meet comes in. It offers
                        alumni the chance to reconnect with their Alma Mater,
                        providing an opportunity to revisit the places and
                        experiences of their college years. As they stroll down
                        the revered streets of their youth, nostalgia envelops
                        them as they are transported back to those carefree
                        days. It is a chance for all of our dear alumni to
                        relive those memories and fully appreciate all that
                        their College life, or life in general has given them.
                        Whether it is the friendships formed, the lessons
                        learned, or the growth experienced, the Annual Alumni
                        Meet is an occasion just for you to recall all that
                        series of events that still are packed deep inside your
                        heart, labelled - "The College Diaries"
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:justify-center md:mt-8">
                        <div className="rounded-md shadow">
                            <a
                                href="https://forms.gle/jpsTnk42FB8514jE8"
                                target="_blank"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                Get Alumni Card
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center py-8 md:w-1/2">
                    <img
                        src={Image}
                        alt="CollegeIMG"
                        className="w-full p-10 max-w-2xl h-full rounded-3xl "
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
