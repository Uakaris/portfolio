import React from "react";
import skills from "../../data/skills";
import SkillsItems from "./SkillsItems";

const Skills = () => {
    return (
        <div className="">
            {skills.map((item) => (
                <SkillsItems 
                    icon={item.icon}
                />
            ))}
        </div>
    );
};

export default Skills;