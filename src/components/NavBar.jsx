import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <nav className="navbar navbar-expand-md py-0 navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand fs-2" to="/">
                    <img id='logo-img' src='wd-logo.svg' alt='' className='mx-1 mb-2'></img> Wikidata Atlas <i class="bi bi-globe-americas"></i>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto flex-nowrap">
                        <li className="nav-item">
                            <Link className="nav-link m-2 menu-item fs-5" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-2 menu-item fs-5" to="/about">About</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link m-2 menu-item fs-5" to="/contact">Contact</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
     );
}

export default NavBar;