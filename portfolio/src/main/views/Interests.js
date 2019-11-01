import React from "react";
import flowarts from "./images/flowarts.png";


function Interests(){
  const interestStyles= {
    position: "relative",
    textAlign: "center"
  }

  const imageStyle={
    maxWidth:"80%"
  }
    return(

    <div style={interestStyles}>
       <div>
             <h2>Juggling</h2>
             <img style={imageStyle} src={flowarts}></img>
       </div>
       <div>
             <h2>Snowboarding</h2>
       </div>
       <div>
            <h2>Oldschool Runescape</h2>
       </div>
       <div>
            <h2>Dancing</h2>
       </div>
    </div>
    )
}

export default Interests;
