import { Link } from "react-router-dom";
import "./Header.css";


function Header() {

    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <Link to="/"><img src="../../book_logo.svg" alt="Logo" /></Link>
                    </li>
                    <li>
                        <Link to="/table">Table</Link>
                    </li>
                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;