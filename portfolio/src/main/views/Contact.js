import React from "react";

function Contact(props){
    const titleStyle = {
        padding: "10px",
        paddingTop: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: "1.2em",
        textAlign: "center",
        letterSpacing: "1.3px",
        wordSpacing: "1px",
        background: "linear-gradient(65deg, rgba(0,128,0,.1) 1%, rgba(0,128,0,.3) 5%, rgba(5,184,189,.7) 28%, rgba(116,166,236,.7) 92%, rgba(116,166,236,.1) 100%)",
        color: "snow",
        width: "80%",
        margin: "auto",
        marginTop: "10px",
        marginBottom: "10px",
        borderRadius: "15%",
        borderTop: "snow 1px solid",
        borderBottom: "snow 1px solid",
        maxWidth: "600px"
    }

    const contactMethods = {
        // height: "50px",
        maxWidth: "350px",
        background: "linear-gradient(65deg, rgba(0,128,0,.1) 1%, rgba(0,128,0,.3) 5%, rgba(5,184,189,.7) 28%, rgba(116,166,236,.7) 92%, rgba(116,166,236,.1) 100%)",
        color: "snow",
        position: "relative",
        margin: "auto",
        borderLeft: "solid white 1px",
        letterSpacing: "1.3px",
        wordSpacing: "1px",
        padding: "5px"
    }

    const personalBio = {
        padding: "10px",
        paddingTop: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: "1.3em",
        textAlign: "center",
        background: "linear-gradient(65deg, rgba(0,128,0,.1) 1%, rgba(0,128,0,.3) 5%, rgba(5,184,189,.7) 28%, rgba(116,166,236,.7) 92%, rgba(116,166,236,.1) 100%)",
        color: "snow",
        width: "90%",
        margin: "auto",
        borderRight: "solid white 1px",
        borderLeft: "solid white 1px",
        letterSpacing: "1.3px",
        wordSpacing: "1px",
        maxWidth: "666px",
        borderRadius: "2%",
    }

    const indentd = {
        paddingLeft: "15px"
    }

    return(

    <div>
        <div>
            <h2 style={titleStyle}>Personal Biography</h2>
            <div style={personalBio}>
                <span style={indentd}>
                Hello, welcome to my digital portfolio. My name is Nonnie Martin.
                 I grew up in Appleton, Wisconsin I have recently relocated from Salt Lake City,
                 Utah where I excelled as a recent graduate of a Coding Bootcamp.
                  I have mastered developing web applications such as front-end user
                   interface, database management, liaising with customers
                   and internal team and assisting with help desk tickets.
                   I have the required skills outlined in the job description.
                    I have advanced proficiencies in HTML, CSS, JavaScript and
                    excellent customer service skills. I also have a solid foundation
                    in MongoDB, Express, React, and Node.JS.
                     In addition to four years work experience,
                     I hold a Certificate of proficiency for Full Stack Website Development.
                </span>
            </div>

        </div>

        <div className="contactInfo">
                <h3 style={titleStyle}>Contact information</h3>
            <div style={contactMethods}>
                <li>Email: martin.nonnie@gmail.com</li>
                <li>Phone #: 920-740-3262</li>
            </div>
        </div>
    </div>
    )
}

export default Contact;
