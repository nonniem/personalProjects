import React from "react";
import {Link} from "react-router-dom";

function Navbar(props){
  const footer = {
      color: "black",
      height: "8vh",
      // background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')",
      // opacity: ".65",
      position: "relative",
      zIndex: "1"
  }

  const divd = {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      textShadow: "-1px 0 #19EBFF, 0 1px red, 1px 0 black, 0 -1px blue",
      fontSize: "2em",
  }
    return(
        <div>
            <div>
                <div className="nav" id="breathing-navbarIcons">
                    <Link to="/projects" className="navbarLink">Portfolio</Link>
                    <Link to="/" className="navbarLink">Bio</Link>
                    <Link to="/resume" className="navbarLink">Resume</Link>
                    <Link to="/education" className="navbarLink">Education</Link>

                    <a style={{...divd, ...footer}} href="https://github.com/nonniem"><i className="fa fa-github" aria-hidden="false"></i></a>
                      <a style={{...divd, ...footer}} href="https://www.linkedin.com/in/nonnie-martin-019847149/"><i className="fa fa-linkedin" aria-hidden="false"></i></a>
                    <a style={{...divd, ...footer}} href="https://www.facebook.com/bigcheifmartin"><i className="fa fa-facebook" aria-hidden="false"></i></a>


                </div>

            </div>
        </div>
    )
}

export default Navbar;
