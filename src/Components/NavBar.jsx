import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
        <h1>WanderWorld</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Add Destination</NavLink>
                <NavLink to="/favourites">Favourites</NavLink>
            </div>
      </nav>
    );
}
 
export default NavBar;


{/* <nav className="NavBar">
        <h1>WanderWorld</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Add Destination</NavLink>
                <NavLink to="/favourites">Favourites</NavLink>
            </div>
      </nav> */}