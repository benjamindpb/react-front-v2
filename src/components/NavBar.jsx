import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img id='logo-img' src='wd-logo.svg' alt='' className='mx-1 mb-2'></img> Wikidata Atlas <i class="bi bi-globe"></i>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="col collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                        <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}

export default NavBar;