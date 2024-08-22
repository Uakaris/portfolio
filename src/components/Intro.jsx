import React from "react";
import { useState } from "react";


const Intro = () => {
    return (
        <div className="flex flex-col pt-16 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
                Charlie Jay
            </h1>
            <a 
                className="border-2 dark:border-white rounded-md"
                href="https://www.westwoodpizza.com.au/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="public/assets/me.jpg"
                    alt="Charlie"
                    className="h-36 md:h-48 object-cover cursor-pointer"
                />
            </a>
            <p className="text-base md:text-xl mb-3 font-medium">
                Full-Stack Software Engineer
            </p>
            <p className="flex flex-row space-x-10 md:text-4xl pb-4">
                <a href="https://github.com/Uakaris" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/charlie-jay-848848311/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href=""><i className="fa-solid fa-file fa-sm"></i></a>
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I'm a Sydney based Junior Full-Stack Software engineer with a
                proven track record in roles requiring high-level problem
                resolution and system optimisation.
                <br />
                My professional life before studying at General Assembly spanned
                two very different industries. After finishing high school in
                2012 I worked as a Sail-Making Apprentice before completing my
                Certificate 3 in Textile Fabrication at TAFE NSW to qualify as a
                Sail-Making Tradesman. I completed my Under Graduate degree in
                Social Sciences whilst working as a Sail-Making Tradesman,
                before moving on to begin work at the NSW Teachers Federation
                branch of the Australian Education Union. The majority of my
                time at NSWTF was spent working as a Professional Support
                Advisor.
                <br />
                I have a passion for challenging myself and learning new things,
                which is reflected in my work history, where I have always aimed
                to improve myself through further study and new roles.
                <br />
                I'm currently looking for work as a Junior Software Developer.
                I'm excited to begin applying the skills I have studied at
                General Assembly and am looking for a role that fosters the
                growth and development of their junior developers. I cannot wait
                to establish myself as a valued member of a tech team.
                <br />
                Outside of my professional life I enjoy CrossFit, cooking,
                reading, watching Formula 1, and hanging out with my partner and
                cat.
            </p>
        </div>
    );
};

export default Intro;

