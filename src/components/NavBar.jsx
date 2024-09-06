import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="pt-8">
            {/* wrap the whole thing in a container to avoid issues with margin top */}
            <div className="relative max-w-screen-lg mx-auto bg-white bg-opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-lg">
                <nav className="flex justify-between items-center p-4">
                    <ul className="flex space-x-4 w-full">
                        <li className="flex-1 text-center">
                            <Link
                                to="portfolio/"
                                className="text-gray-900 hover:text-gray-600"
                            >
                                About
                            </Link>
                        </li>
                        <li className="flex-1 text-center">
                            <Link
                                to="portfolio/skills"
                                className="text-gray-900 hover:text-gray-600"
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="flex-1 text-center">
                            <Link
                                to="portfolio/projects"
                                className="text-gray-900 hover:text-gray-600"
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
                                className="text-gray-900 hover:text-gray-600"
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
