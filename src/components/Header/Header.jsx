import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <Link to="/"><img src="logo.png" alt="Logo" />Home</Link>
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