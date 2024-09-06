import React from "react";

const SkillsItems = ({ icon }) => {
    return (
        <ul className="hover:animate-ping cursor-pointer">
            <img src={icon} alt="Skill Icon" className="" />
        </ul>
    );
};

export default SkillsItems;
