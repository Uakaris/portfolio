import React, { useEffect, useState } from "react";
import skills from "../data/skills";
import newSkills from "../data/newSkills";
import SkillsItems from "./SkillsItems";
import NewSkillsItems from "./newSkillsItems";
import Title from "./title";

const Skills = () => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`pt-12 mx-16 ${fade ? "animate-fade-in-blur" : "opacity-0"}`}>
            <p className="flex justify-center pb-12">
                <Title>Current Technical Skillset</Title>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center pb-32">
                <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-10 gap-4 ">
                    {skills.map((item) => (
                        <SkillsItems icon={item.icon} />
                    ))}
                </div>
            </div>
            <p className="flex justify-center pb-12">
                <Title>Technical Skills I'm Working On</Title>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center pb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
                    {newSkills.map((item) => (
                        <NewSkillsItems icon={item.icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
