import React from "react";
import {Link} from "react-router-dom";

function Navbar(props){
  const footer = {
      color: "black",
      height: "10vh",
      position: "relative",
      zIndex: "1"
  }

  const divd = {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      textShadow: "-1px 0 #19EBFF, 0 1px red, 1px 0 black, 0 -1px blue",
      fontSize: "3em"
  }

    return(
        <div>
            <div>
                <div className="nav" id="breathing-navbarIcons">
                    <Link to="/projects" className="navbarLink">Portfolio</Link>
                    <Link to="/" className="navbarLink">Bio</Link>
                    <Link to="/resume" className="navbarLink">Resume</Link>
                    <Link to="/education" className="navbarLink">Education</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
