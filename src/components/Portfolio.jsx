import React, { useEffect, useState } from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import projectsInDevelopment from "../data/projectsInDevelopment";
// import ProjectsInDevelopmentItems from "./ProjectsInDevelopmentItems";
import Title from "./title";

const Portfolio = () => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`pt-4 mx-8 ${fade ? "animate-fade-in-blur" : "opacity-0"}`}>
            <p className="flex justify-center text-center pt-8 pb-6">
                <Title>Recent Projects</Title>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
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
            {/* <p className="flex justify-center text-center pt-8 pb-6">
                <Title>Projects In Development</Title>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
                    {projectsInDevelopment.map((project) => (
                        <ProjectsInDevelopmentItems
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                            repo={project.repo}
                        />
                    ))}
                </div>
             </div>    */}
        </div>
    );
};

export default Portfolio;
