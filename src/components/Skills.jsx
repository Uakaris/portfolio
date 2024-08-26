import React from "react";
import skills from "../data/skills";
import SkillsItems from "./SkillsItems";
import Title from "./title";

const Skills = () => {
    return (
        <div className="pt-12">
            <p className="flex justify-center pb-4">
                <Title>Technical Skillset</Title>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center pb-12">
                <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-10 gap-4 ">
                    {skills.map((item) => (
                        <SkillsItems icon={item.icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
