import React from "react";
import ResumeImg from "./images/Resume.png";


export default function Resume(){
    const resumeImgStyle = {
        maxWidth: "1150px",
        margin: "auto" ,
        marginTop: "10px",
        marginBottom: "10px",
        minWidth: "240px",
        padding: "10px",
        width: "65%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "black solid 1px",
        background: "black",
        opacity: ".95"
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
            <a href="https://docs.google.com/document/d/1ufqMJC3akQEYZ7W3wQowUsxaQFpfJDjF5OeJ__Cr1uM/edit?usp=sharing">
                <img style={resumeImgStyle} id="breathing-image" src={ResumeImg} alt="resume"/>
            </a>
        </div>

    )
}
