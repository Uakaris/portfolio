import React from "react";

const PortfolioItem = ({ title, imgUrl, stack, link, repo }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white bg-white bg-opacity-10 group-hover:opacity-100 transition-opacity duration-300 rounded-md overflow-hidden"
        >
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                {" "}
                {/* 16:9 Aspect Ratio */}
                <img
                    src={imgUrl}
                    alt="portfolio"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="w-full p-4">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                    <h3 className="text-lg md:text-xl dark:text-white font-semibold">
                        {title}
                    </h3>
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-square-github text-lg md:text-3xl dark:text-white animate-pulse transition-transform duration-300 transform hover:scale-110"></i>
                    </a>
                </div>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
                    {stack.map((item, index) => (
                        <span
                            key={index}
                            className="inline-block px-2 py-1 font-semibold bg-black bg-opacity-20 rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    );
};

export default PortfolioItem;
