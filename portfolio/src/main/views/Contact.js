import React from "react";

function Contact(props){
    const titleStyle = {
        padding: "10px",
        paddingTop: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: "1.5em",
        textAlign: "center",
        letterSpacing: "1.3px",
        wordSpacing: "1px",
        // background: "linear-gradient(65deg, rgba(0,128,0,.1) 1%, rgba(0,128,0,.3) 5%, rgba(5,184,189,.7) 28%, rgba(116,166,236,.7) 92%, rgba(116,166,236,.1) 100%)",
        background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')",
        opacity: ".65",
        color: "snow",
        width: "80%",
        margin: "auto",
        marginTop: "10px",
        marginBottom: "10px",
        borderRadius: "15%",
        borderTop: "snow 1px solid",
        borderBottom: "snow 1px solid",
        maxWidth: "600px",
        fontFamily: "'Lobster', Georgia, Times, serif"
    }

    const contactMethods = {
        // height: "50px",
        maxWidth: "350px",
        // background: "linear-gradient(65deg, rgba(0,128,0,.1) 1%, rgba(0,128,0,.3) 5%, rgba(5,184,189,.7) 28%, rgba(116,166,236,.7) 92%, rgba(116,166,236,.1) 100%)",
        background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')",
        opacity: ".65",
        color: "snow",
        position: "relative",
        margin: "auto",
        borderLeft: "solid white 1px",
        letterSpacing: "1.3px",
        wordSpacing: "1px",
        padding: "5px",
        fontFamily: "'Lato', sans-serif"
    }

    const personalBio = {
        padding: "10px",
        paddingTop: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: "1.3em",
        textAlign: "center",
        background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')",
        opacity: ".65",
        // background: "linear-gradient(65deg, rgba(0,128,0,.1) 1%, rgba(0,128,0,.3) 5%, rgba(5,184,189,.7) 28%, rgba(116,166,236,.7) 92%, rgba(116,166,236,.1) 100%)",
        color: "snow",
        width: "90%",
        margin: "auto",
        borderRight: "solid white 1px",
        borderLeft: "solid white 1px",
        letterSpacing: "1.3px",
        wordSpacing: "1px",
        maxWidth: "666px",
        borderRadius: "2%",
        fontFamily: "'Lato', sans-serif"
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

                Welcome to my portfolio, my name is Nonnie Martin and I'm a Full-Stack JavaScript Developer
                and E-commerce Management specialist. Graduating from V-Schools coding academy,
                and the frontier of new development technologies. I want to build you a faster
                and more efficient website for you and your team. With advanced skills in building
                full stack websites to simple WordPress sites that you could even manage yourself.
                If your interested in working with me please contact through email.


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
