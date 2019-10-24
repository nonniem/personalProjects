import React from "react";
import Flowarts from "./images/flowarts.png";
import TodoList from "./images/todolist.png";
import Chatter from "./images/chatter.png";
import Cjmchiro from "./images/cjmchiro.png";
import Nestwi from "./images/nestwi.png";
import Surfinbird from "./images/surfinbird.png";
import Dpfguys from "./images/dpfguys.png";
import Rossvanhandel from "./images/rossvanhandel.png";
import Fantasydreamhomes from "./images/fantasydreamhomes.png";
import Agscbddispensary from "./images/agscbddispensary.png";



function Projects(){
    const styles = {
        height: "100vh",
        marginBottom: "20px",
        borderTop: "solid black 1px ",
        size: "2em",
        overflowY: "auto",
        display: "block",
        margin: "auto"
    }

    const imageContainer = {
        maxWidth: "80%",
        maxHeight: "500px",
        float: "right",
        border: "1px black solid",
        minHeight: "205.5px"
    }

    const hrefLink = {
        fontSize: "1.5em",
        color: "snow",
        letterSpacing: "1px",
        textShadow: "-1px 0 black, 0 1px black, 0 0 black, 0 0 black"
    }

    return(

        <div style={styles}>

            <div className="style">
              <a style={hrefLink} href="http://dpfguys.com/">DPF Guys</a>
              <a href="http://dpfguys.com/"><img style={imageContainer} src={Dpfguys} alt=""/></a>
            </div>

            <div className="style">
              <a style={hrefLink} href="http://agscbddispensary.com/">A&Gs CBD Dispensary</a>
              <a href="http://agscbddispensary.com/"><img style={imageContainer} src={Agscbddispensary} alt=""/></a>
            </div>

            <div className="style">
              <a style={hrefLink} href="http://cjmartinchiropractic.com/">C.J. Martin Chiropractic</a>
              <a href="http://cjmartinchiropractic.com/"><img style={imageContainer} src={Cjmchiro} alt=""/></a>
            </div>

            <div className="style">
              <a style={hrefLink} href="http://fantasydreamhomes.com/">Fantasy Dream Homes</a>
              <a href="http://fantasydreamhomes.com/"><img style={imageContainer} src={Fantasydreamhomes} alt=""/></a>
            </div>

            <div className="style">
              <a style={hrefLink} href="http://rossvanhandel.insure/">Ross VanHandel Insurance</a>
              <a href="http://rossvanhandel.insure/"><img style={imageContainer} src={Rossvanhandel} alt=""/></a>
            </div>

            <div className="style">
              <a style={hrefLink} href="http://surfinbirdskateshop.com/">Surfin Bird Skateshop</a>
              <a href="http://surfinbirdskateshop.com/"><img style={imageContainer} src={Surfinbird} alt=""/></a>
            </div>

            <div className="style">
                <a style={hrefLink} href="http://nestwi.org/">N.E.S.T</a>
                <a href="http://nestwi.org/"><img style={imageContainer} src={Nestwi} alt=""/></a>
            </div>

            <div className="style">
                <a style={hrefLink} href="https://chatterin.herokuapp.com">Chatter</a>
                <a href="https://chatterin.herokuapp.com"><img style={imageContainer} src={Chatter} alt=""/></a>
            </div>

            <div className="style">
                <a style={hrefLink} href="https://flowarts.herokuapp.com/">Flowarts</a>
                <a href="https://flowarts.herokuapp.com/"><img style={imageContainer} src={Flowarts} alt="flowarts"/></a>
            </div>

            <div className="style">
                <a style={hrefLink} href="http://nonniestodolist.surge.sh">Todo List</a>
                <a href="http://nonniestodolist.surge.sh"><img style={imageContainer} src={TodoList} alt=""/></a>
            </div>

        </div>
    )
}

export default Projects;
