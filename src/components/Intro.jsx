import React from "react";
import profilePic from "../assets/canvaMe.png";

const Intro = () => {
    return (
        <div className="flex flex-col items-center pt-16 pb-6">
            <div className="pt-12 pb-12 pl-24 pr-24 border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
                <div className="flex flex-col md:flex-row items-center mb-4">
                    <img
                        src={profilePic}
                        alt="Charlie"
                        className="h-36 md:h-48 cursor-pointer mb-4 md:mb-0 md:mr-8"
                    />
                    <div className="flex flex-col items-start">
                        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
                            Charlie Jay
                        </h1>
                        <p className="text-base md:text-xl mb-3 font-medium transition-all">
                            <a
                                href="https://github.com/Uakaris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 mr-4"
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
                            {/* <a
                                href="https://drive.google.com/file/d/1S2aJSux8AjyaTTlR3Te-HsJVDVqMRI51/view?usp=sharing"
                                target="blank"
                                rel="noopener noreferrer"
                                className="mr-6"
                            >
                                <i className="fa-solid fa-file hover:animate-bounce"></i>
                            </a> */}
                            <span className="text-base">Full-Stack Software Engineer</span>
                        </p>
                    </div>
                </div>
                <p className="text-m max-w-xl mx-auto text-left mb-6">
                    Hi, I'm Charlie. A Full-Stack Software engineer based in
                    Sydney, Australia. I love creating simple and functional
                    applications that are fun to interact with. I recently
                    graduated from General Assembly's Software Engineering
                    Bootcamp and am on the lookout for my first role as a
                    software engineer. I'm excited to begin applying the skills
                    I have studied at General Assembly and am looking for a role
                    that fosters the growth and development of their junior
                    developers. I cannot wait to establish myself as a valued
                    member of a tech team.
                </p>
            </div>
        </div>
    );
};

export default Intro;
