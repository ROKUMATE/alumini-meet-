import firstImage from "../assets/FirstImage.png";
import secondImage from "../assets/SecondImage.png";
// import rightImage from "../assets/RightImage.png";
import rightImage from "../assets/RightImage.png";
import Image from "../assets/IntroImage.png";

const StarterImages = () => {
    return (
        <section className="pt-20 p-8 bg-gray-100 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg mb-8">
                <div className="flex flex-col items-center">
                    <img
                        src={firstImage}
                        alt="First"
                        className="w-full h-auto rounded-lg"
                    />
                    <h1 className="text-4xl font-bold mt-4">
                        27<sup>th</sup> Foundation Day
                    </h1>
                    <p className="text-xl mt-2">
                        17<sup>th</sup> Jan' 2025
                    </p>
                    <img
                        src={secondImage}
                        alt="Second"
                        className="w-full h-auto rounded mt-4"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src={rightImage}
                        alt="Right"
                        className="w-full h-auto rounded"
                    />
                    <p className="text-4xl font-bold mt-4">
                        14<sup>th</sup> - 18<sup>th</sup> Feb' 2025
                    </p>
                </div>
            </div>
            <div className="w-full">
                <img
                    src={Image}
                    alt="CollegeIMG"
                    className="w-full h-auto rounded"
                />
            </div>
        </section>
    );
};

export default StarterImages;
