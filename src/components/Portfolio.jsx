import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./title";

const Portfolio = () => {
    return (
        <div>
            <p className="flex justify-center pt-8 pb-6">
                <Title>Recent Projects</Title>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    {portfolio.map((project) => (
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                            repo={project.repo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
