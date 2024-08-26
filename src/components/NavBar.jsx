import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/career">Career</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;