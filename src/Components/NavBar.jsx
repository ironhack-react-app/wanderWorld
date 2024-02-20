import { useState } from "react";

import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ handleSearch }) => {
  const [searchKey, setSearchKey] = useState("");
  
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setSearchKey(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#">
          WanderWorld
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              WanderWorld
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <input type="text" onChange={handleChange} />
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/destinations/create"
                  className="nav-link"
                  href="#"
                >
                  Create Destination
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/destinations/favorites"
                  className="nav-link"
                  href="#"
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


