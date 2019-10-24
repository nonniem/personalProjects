import React from "react";
import {Link} from "react-router-dom";

function Navbar(props){
    return(
        <div>
            <div>
                <div className="nav">
                    <Link to="/projects" className="navbarLink">Portfolio</Link>
                    <Link to="/" className="navbarLink">Bio</Link>
                    <Link to="/resume" className="navbarLink">Resume</Link>
                    <Link to="/education" className="navbarLink">Education</Link>
                    <Link to="/interests" className="navbarLink">Interests</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
