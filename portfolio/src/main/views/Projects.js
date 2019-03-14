import React from "react";
import Meme from "./images/meme.png";
import Flowarts from "./images/flowarts.png";
import Mario from "./images/mario.png";
import TodoList from "./images/todolist.png";
import Stopwatch from "./images/stopwatch.png";
import Chatter from "./images/chatter.png";
import Cjmchiro from "./images/cjmchiro.png";


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
                <a style={hrefLink} href="http://cjmartinchiropractic.com/">C.J. Martin Chiropractic</a>
                <a href="http://cjmartinchiropractic.com/"><img style={imageContainer} src={Cjmchiro} alt=""/></a>
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

            <div className="style">
                <a style={hrefLink} href="http://nonniesmemese.surge.sh">Memes</a>
                <a href="http://nonniesmemese.surge.sh"><img style={imageContainer} src={Meme} alt=""/></a>
            </div>

            <div className="style">
                <a style={hrefLink} href="http://nonniestopwatch.surge.sh">Stopwatch</a>
                <a href="http://nonniestopwatch.surge.sh"><img style={imageContainer} src={Stopwatch} alt=""/></a>
            </div>

            <div className="style">
                <a style={hrefLink} href="http://nonniemarion.surge.sh">Mario Calculator</a>
                <a href="http://nonniemarion.surge.sh"><img style={imageContainer} src={Mario} alt="Meme Making website"/></a>
            </div>

        </div>
    )
}

export default Projects;
