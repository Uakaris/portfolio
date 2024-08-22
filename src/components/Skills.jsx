import React from "react";
import skills from "../../data/skills";
import SkillsItems from "./SkillsItems";

const Skills = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center pb-12">
            <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-10 gap-4">
                {skills.map((item) => (
                    <SkillsItems
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;