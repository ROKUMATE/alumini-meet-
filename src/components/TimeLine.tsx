// import Image from "next/image";
import React from 'react';
import { Timeline } from './ui/TimeLine';

// Import Images
import College1 from '../assets/College1.png';
import College2 from '../assets/College2.png';
import College3 from '../assets/College3.png';

function TimelineDemo() {
    const data = [
        {
            title: 'Day 1 - Sports Competitions',
            content: (
                <div>
                    <p className="text-gray-800 text-xs md:text-sm font-normal mb-8">
                        We will organize the sports competitions here.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={College1}
                            alt="Sports Competitions"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: 'Early 2023',
            content: (
                <div>
                    <p className="text-gray-800 text-xs md:text-sm font-normal mb-8">
                        I usually run out of copy, but when I see content this
                        big, I try to integrate lorem ipsum.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={College2}
                            alt="Hero Template"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: 'Changelog',
            content: (
                <div>
                    <p className="text-gray-800 text-xs md:text-sm font-normal mb-4">
                        presentation and student meet
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={College3}
                            alt="Hero Template"
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full bg-white">
            <Timeline data={data} />
        </div>
    );
}

export default TimelineDemo;
