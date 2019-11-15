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
        opacity: ".85",
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
        opacity: ".85",
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
        background: "black",
        // background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')",
        opacity: ".85",
        // background: "linear-gradient(65deg, rgba(0,128,0,.1) 1%, rgba(0,128,0,.3) 5%, rgba(5,184,189,.7) 28%, rgba(116,166,236,.7) 92%, rgba(116,166,236,.1) 100%)",
        color: "snow",
        width: "90%",
        margin: "auto",
        borderRight: "solid white 1px",
        borderLeft: "solid white 1px",
        letterSpacing: "1.3px",
        wordSpacing: "1px",
        maxWidth: "666px",
        borderRadius: "2%"
    }

    const indentd = {
        paddingLeft: "15px"
    }

    return(

    <div>
        <div>
            <h2 style={titleStyle}>Personal Biography</h2>
            <div style={personalBio}>
                <span style={indentd} className="bioParagraph">

                Welcome to my portfolio - my name is Nonnie Martin,
                and I'm a Full-Stack JavaScript Developer and
                 E-commerce Management Specialist. I graduated
                  from V-Schools Coding Academy which taught me
                  the frontier of new development technologies.
                  I want to build you a faster and more efficient
                   website for your team or your business.
                   My skills include a range from building
                   full stack websites with multiple features
                   to simple WordPress sites that you could
                   even manage yourself. If you’re interested
                    in working with me please contact me through email. Thank you!


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
