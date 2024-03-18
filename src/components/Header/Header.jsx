import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="nav">
            <nav>
                <Link to="/"><img src="logo.png" alt="Logo" /></Link>
                <Link to="/table">Table</Link>
                <Link to="/game">WordCarousel</Link>
            </nav>
        </div>
    );
};

export default Header;