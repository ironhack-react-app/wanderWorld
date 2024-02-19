import { NavLink } from "react-router-dom";

const Footer = () => {


    return (
        <nav>
       
         <div className="Footer">
                <NavLink onClick={() => {window.scroll(0,0)}}>Back to top </NavLink>
                <NavLink  className="noLink">2024</NavLink>
            </div>
      </nav>
    );
}
 
export default Footer;