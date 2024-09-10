import React, { useEffect, useState } from "react";
import profilePic from "../assets/canvaMe.png";

const Intro = ({ handleThemeSwitch }) => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // Trigger the fade-in effect after the component mounts
        const timer = setTimeout(() => {
            setFade(true);
        }, 100); // Delay to ensure fade-in effect is visible

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div
            className={`flex flex-col items-center my-16 px-4 ${
                fade ? "animate-fade-in-blur" : "opacity-0"
            }`}
        >
            <div className="pt-12 pb-12 px-24  bg-white bg-opacity-10 group-hover:opacity-100 transition-opacity duration-300 rounded-md overflow-hidden">
                <div className="flex flex-col md:flex-row items-center mb-4">
                    <img
                        src={profilePic}
                        alt="Charlie"
                        className="h-36 md:h-48 cursor-pointer mb-4 md:mb-0 md:mr-8"
                        onClick={handleThemeSwitch}
                        title="Click to toggle theme"
                    />
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
                                <i className="fa-brands fa-square-github hover:animate-bounce"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/charlie-jay-848848311/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-4"
                            >
                                <i className="fa-brands fa-linkedin hover:animate-bounce"></i>
                            </a>
                            <a
                                href="mailto:charliejbjay@gmail.com"
                                target="blank"
                                rel="noopener noreferrer"
                                className="mr-4"
                            >
                                <i className="fa-solid fa-envelope hover:animate-bounce"></i>
                            </a>
                            <span className="text-base">
                                Full-Stack Software Engineer
                            </span>
                        </p>
                    </div>
                </div>
                <p className="text-m max-w-xl mx-auto xl:text-left md:text-left text-center mb-6">
                    Hi, I'm Charlie. A Full-Stack Software engineer based in
                    Sydney, Australia. I love creating simple and functional
                    applications that are fun to interact with. I recently
                    graduated from General Assembly's Software Engineering
                    Bootcamp and am on the lookout for my first role as a
                    software engineer. I'm excited to begin applying the skills
                    I have studied at General Assembly and am looking for a role
                    that fosters the growth and development of their junior
                    developers. I cannot wait to establish myself as a valued
                    member of a tech team. If you would like to get in touch you
                    can do so by clicking the mail or LinkedIn icon above.
                </p>
            </div>
        </div>
    );
};

export default Intro;
