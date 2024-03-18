import { Link } from "react-router-dom";

function Header() {

    return (
        <header>
            <nav>
                <Link to="/"><img src="logo.png" alt="Logo" /></Link>
                <Link to="/table">Table</Link>
                <Link to="/game">WordCarousel</Link>
            </nav>
        </header>
    );
}

export default Header;