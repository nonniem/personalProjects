import React from "react";
import {Switch, Route} from "react-router-dom";

import Contact from "./views/Contact";
import Projects from "./views/Projects";
import Education from "./views/Education";
import Resume from "./views/Resume";

function Body(props){
    return(
        <div>
            <Switch>
                <Route path="/projects" component={Projects}/>
                <Route path="/education" component={Education}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/" component={Contact}/>
            </Switch>
            <div className="rocket">
   <div className="rocket-body">
     <div className="body"></div>
     <div className="fin fin-left"></div>
     <div className="fin fin-right"></div>
     <div className="window"></div>
   </div>
   <div className="exhaust-flame"></div>
   <ul className="exhaust-fumes">
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
   </ul>
   <ul className="star">
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
   </ul>
 </div>
        </div>
    )
}

export default Body;
