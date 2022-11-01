import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <nav className="nav">
            <Link to="/" className="site-title">
                    <img id='logo-img' src='wd-logo.svg' alt='' className='mx-1 mb-2'></img> Wikidata Atlas
            </Link>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
     );
}

export default NavBar;