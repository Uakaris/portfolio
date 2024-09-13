import React, { useEffect, useState } from "react";
import profilePic from "../assets/canvaMe.png";

const Intro = ({ handleThemeSwitch }) => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`flex flex-col items-center my-16 px-4 ${
                fade ? "animate-fade-in-blur" : "opacity-0"
            }`}
        >
            <div className="pt-12 pb-12 px-24 bg-white bg-opacity-10 group-hover:opacity-100 transition-opacity duration-300 rounded-md overflow-hidden">
                <div className="flex flex-col md:flex-row items-center mb-4">
                    <div className="relative group">
                        <img
                            src={profilePic}
                            alt="Charlie"
                            className="h-36 md:h-48 w-36 md:w-48 rounded-full cursor-pointer mb-4 md:mb-0 md:mr-8 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                            onClick={handleThemeSwitch}
                        />
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Click to toggle theme
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-4xl text-center md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
                            Charlie Jay
                        </h1>
                        <p className="text-base text-center md:text-xl mb-3 font-medium transition-all">
                            <a
                                href="https://github.com/Uakaris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-4"
                            >
                                <i className="fa-brands fa-square-github transition-transform duration-300 transform hover:scale-150 hover:shadow-lg"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/charlie-jay-848848311/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-4"
                            >
                                <i className="fa-brands fa-linkedin transition-transform duration-300 transform hover:scale-150 hover:shadow-lg"></i>
                            </a>
                            <a
                                href="mailto:charliejbjay@gmail.com"
                                target="blank"
                                rel="noopener noreferrer"
                                className="mr-4"
                            >
                                <i className="fa-solid fa-envelope transition-transform duration-300 transform hover:scale-150 hover:shadow-lg"></i>
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1xlpJrkQ6c5Jp85Ul4ms8SnAGGhyIWmLd/view?usp=sharing"
                                target="blank"
                                rel="noopener noreferrer"
                                className="mr-4"
                            >
                                <i className="fa-solid fa-file transition-transform duration-300 transform hover:scale-150 hover:shadow-lg"></i>
                            </a>
                            <span className="text-base">
                                Full-Stack Software Engineer
                            </span>
                        </p>
                    </div>
                </div>
                <p className="text-m max-w-xl mx-auto xl:text-justify md:text-justify text-justify mb-6">
                    <span className="font-bold">
                        I love creating simple and functional applications that
                        are fun to interact with.
                    </span>{" "}
                    I recently graduated from General Assembly's Software
                    Engineering Bootcamp and am on the lookout for my first role
                    as a software engineer. I'm excited to begin applying the
                    skills I have studied at General Assembly and am looking for
                    a role that fosters the growth and development of their
                    junior developers. I cannot wait to establish myself as a
                    valued member of a tech team. If you would like to get in
                    touch you can do so by clicking the{" "}
                    <span className="font-bold">mail</span> or{" "}
                    <span className="font-bold">LinkedIn</span> icon above.
                </p>
            </div>
        </div>
    );
};

export default Intro;
