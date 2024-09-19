import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="pt-8 mx-4">
            {/* wrap the whole thing in a container to avoid issues with margin top */}
            <div className="relative max-w-screen-lg mx-auto bg-white bg-opacity-10 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-lg">
                <nav className="flex justify-between items-center font-bold p-3">
                    <ul className="flex space-x-4 w-full dark:text-white">
                        <li className="flex-1 text-center transition-transform duration-300 transform hover:scale-110">
                            <Link
                                to="portfolio/"
                                className="hover:text-blue-400 cursor-pointer"
                            >
                                About
                            </Link>
                        </li>
                        <li className="flex-1 text-center transition-transform duration-300 transform hover:scale-110">
                            <Link
                                to="portfolio/projects"
                                className="hover:text-blue-400 cursor-pointer"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="flex-1 text-center transition-transform duration-300 transform hover:scale-110">
                            <Link
                                to="portfolio/skills"
                                className="hover:text-blue-400 cursor-pointer"
                            >
                                Skills
                            </Link>
                        </li>
                        {/* <li className="flex-1 text-center">
                            <Link to="portfolio/currentProjects" className="text-gray-900 hover:text-gray-600">Current Projects</Link>
                        </li> */}
                        <li className="flex-1 text-center transition-transform duration-300 transform hover:scale-110">
                            <Link
                                to="portfolio/career"
                                className="hover:text-blue-400 cursor-pointer"
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
