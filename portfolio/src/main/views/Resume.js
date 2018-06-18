import React from "react";
import ResumeImg from "./images/Resume.png/";


export default function Resume(){
    const resumeImgStyle = {
        maxWidth: "100%",
        margin: "auto" ,
        display: "block"
        marginTop: "10px",
        marginBottom: "10px"
    }

    return(
        <div>
            <a href="https://drive.google.com/file/d/1UAiYFfPcUeu1EpRtJaOeWW9wBUoGyMIz/view?usp=sharing">
                <img style={resumeImgStyle} src={ResumeImg} alt="resume"/>
            </a>
        </div>
    )
}
