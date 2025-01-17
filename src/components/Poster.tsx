import React from "react";
import Image from "../assets/Poster.png";

const Poster = () => {
    return (
        <div className="flex justify-center items-center py-8 bg-white">
            <img
                src={Image}
                alt="CollegeIMG"
                className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
            />
        </div>
    );
};

export default Poster;
