import React from "react";

const NewSkillsItems = ({ icon }) => {
    return (
        <ul className="hover:animate-ping cursor-pointer">
            <img src={icon} alt="Skill Icon" className="" />
        </ul>
    );
};

export default NewSkillsItems;
