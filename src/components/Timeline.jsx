import React, { useEffect, useState } from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./title";

const Timeline = () => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`flex flex-col md:flex-row items-center justify-center my-12 px-4 ${
                fade ? "animate-fade-in-blur" : "opacity-0"
            }`}
        >
            <div className="w-full md:w-7/12">
                <p className="flex justify-center pb-6">
                    <Title>Timeline</Title>
                </p>
                {timeline.map((item) => (
                    <TimelineItem
                        key={item.year} // It's a good practice to add a unique key prop
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
