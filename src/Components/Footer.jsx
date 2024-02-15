import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <nav className="Footer">
       
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/favourites">© 2024 WonderWorld</NavLink>
            </div>
      </nav>
    );
}
 
export default Footer;