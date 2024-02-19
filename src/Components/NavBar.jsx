import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#">WanderWorld</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">WanderWorld</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page" href="#">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/destinations/create" className="nav-link" href="#">Create Destination</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/destinations/favorites" className="nav-link" href="#">Favorites</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

/*  <NavLink to="/destinations/favorites">Favorites</NavLink> */
{/* <nav classNameName="NavBar">
        <h1>WanderWorld</h1>
            <div classNameName="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Add Destination</NavLink>
                <NavLink to="/favourites">Favourites</NavLink>
            </div>
      </nav> */}


/*

 <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="#">Navbar</a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="#">Link</a>
        </li>
        <li classNameName="nav-item dropdown">
          <a classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classNameName="dropdown-menu">
            <li><a classNameName="dropdown-item" href="#">Action</a></li>
            <li><a classNameName="dropdown-item" href="#">Another action</a></li>
            <li><hr classNameName="dropdown-divider"/></li>
            <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

*/