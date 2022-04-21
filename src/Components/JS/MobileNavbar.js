// The Navbar on smaller screen sizes
import React, {useState} from 'react';
import CSUSLogo from '../../Assets/CSUS_logo.png';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import '../Styles/MobileNavbar.css';

const MobileNavbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    let menu
    let menuMask

    if(showMenu){
        menu = 
        <div className="menu">
            <Link onClick={() => setShowMenu(false)}className="mobile_navbar_link" to="/">ABOUT</Link>
            <Link onClick={() => setShowMenu(false)} className="mobile_navbar_link"  to="/Events">EVENTS</Link>
            <Link onClick={() => setShowMenu(false)} className="mobile_navbar_link"  to="/Documents">CONSTITUTION</Link>
            <Link onClick={() => setShowMenu(false)} className="mobile_navbar_link"  to="/Contact">CONTACT</Link>
        </div>

        menuMask = 
        <div className="menu_mask" onClick={() => setShowMenu(false)}>

        </div>
    }

    return ( 
        <div className="mobile_navbar">
            <img className="mobile_navbar_logo" src={CSUSLogo} alt="CSUS_logo"/>

            <FontAwesomeIcon className='icon' size="xl"
                icon={faBars}
                onClick = {() => setShowMenu(!showMenu)}
            />
            {menuMask}
            {menu}
        </div>
    );
}
 
export default MobileNavbar;
