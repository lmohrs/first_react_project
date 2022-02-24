import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo.svg'
//import ReorderIcon from '@material-ui/icons/Reorder'
import "./Navbar.css"


function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} className="navbar-logo" alt="Logo for our Navbar" />
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/cocktails"> Cocktails </Link>
                    <Link to="/random"> Random </Link>
                    <Link to="/about"> About </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/cocktails"> Cocktails </Link>
                <Link to="/random"> Random </Link>
                <Link to="/about"> About </Link>
                <button onClick={toggleNavbar}>
                    {/*<ReorderIcon />*/}
                </button>
            </div>
        </div>
    );
}

export default Navbar;