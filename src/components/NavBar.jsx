import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="pt-8">
            {/* wrap the whole thing in a container to avoid issues with margin top */}
            <div className="relative max-w-screen-lg mx-auto border-2 border-stone-900 dark:border-white bg-white bg-opacity-10 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-lg">
                <nav className="flex justify-between items-center font-bold p-4">
                    <ul className="flex space-x-4 w-full dark:text-white">
                        <li className="flex-1 text-center">
                            <Link
                                to="portfolio/"
                                className="hover:text-blue-400"
                            >
                                About
                            </Link>
                        </li>
                        <li className="flex-1 text-center">
                            <Link
                                to="portfolio/skills"
                                className="hover:text-blue-400"
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="flex-1 text-center">
                            <Link
                                to="portfolio/projects"
                                className="hover:text-blue-400"
                            >
                                Projects
                            </Link>
                        </li>
                        {/* <li className="flex-1 text-center">
                            <Link to="portfolio/currentProjects" className="text-gray-900 hover:text-gray-600">Current Projects</Link>
                        </li> */}
                        <li className="flex-1 text-center">
                            <Link
                                to="portfolio/career"
                                className="hover:text-blue-400"
                            >
                                Career
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
