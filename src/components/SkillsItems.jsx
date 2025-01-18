import React from "react";

const SkillsItems = ({ icon, title }) => {
    return (
        <ul className="hover:animate-ping cursor-pointer">
            <img 
                src={icon} 
                alt={title} 
            />
            {/* <div className="flex justify-center my-2 group">
                <p className="hidden group-hover:block text-lg">{title}</p>
            </div> */}
        </ul>
    );
};

export default SkillsItems;
