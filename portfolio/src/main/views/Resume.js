import React from "react";
import ResumeImg from "./images/Resume.png";
import ResumeImg1 from "./images/Resume1.png";


export default function Resume(){
    const resumeImgStyle = {
        maxWidth: "1150px",
        margin: "auto" ,
        display: "inline-block",
        marginTop: "10px",
        marginBottom: "10px",
        minWidth: "240px",
        padding: "10px",
        width: "65%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const resumeDiv = {
      justifyContent: "space-between",
      padding: "20px",
      maxWidth: "100vw",
      paddingLeft: "20px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }


    return(
        <div style={resumeDiv}>
            <a href="https://drive.google.com/file/d/1UAiYFfPcUeu1EpRtJaOeWW9wBUoGyMIz/view?usp=sharing">
                <img style={resumeImgStyle} src={ResumeImg} alt="resume"/>
            </a>
            <a href="https://drive.google.com/file/d/1UAiYFfPcUeu1EpRtJaOeWW9wBUoGyMIz/view?usp=sharing">
                <img style={resumeImgStyle} src={ResumeImg1} alt="resume"/>
            </a>
          </div>

    )
}
