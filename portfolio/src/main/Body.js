import React from "react";
import {Switch, Route} from "react-router-dom";

import Contact from "./views/Contact";
import Projects from "./views/Projects";
import Education from "./views/Education";
import Resume from "./views/Resume";
import Interests from "./views/Interests";

function Body(props){
    return(
        <div>
            <Switch>
                <Route path="/projects" component={Projects}/>
                <Route path="/education" component={Education}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/interests" component={Interests}/>
                <Route path="/" component={Contact}/>
            </Switch>
        </div>
    )
}

export default Body;
