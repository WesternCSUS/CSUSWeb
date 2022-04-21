// The navbar on larger screen sizes
import React from 'react';
import CSUSLogo from '../../Assets/CSUS_logo.png';
import {Link} from 'react-router-dom';
import '../Styles/DesktopNavbar.css';

const DesktopNavbar = () => {
    return ( 
        <nav className="desktop_navbar">
            <Link className="desktop_navbar_link" to="/">ABOUT</Link>
            <Link className="desktop_navbar_link"  to="/Events">EVENTS</Link>
            <div className="desktop_navbar_logo_div"><img className="desktop_navbar_logo" src={CSUSLogo} alt="CSUS_logo"/></div>
            <Link className="desktop_navbar_link"  to="/Documents">CONSTITUTION</Link>
            <Link className="desktop_navbar_link"  to="/Contact">CONTACT</Link>
        </nav>
    );
}
 
export default DesktopNavbar;
