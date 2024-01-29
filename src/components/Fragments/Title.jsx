import React from "react";

const Title = ({text}) =>{
    const TitleStyles = {
        backgroundColor: '#C9ccd6',
        marginBottom: '5px',
        display: 'flex',
        alignItems: 'center'
    }
    const TitlePage= {
        fontFamily: "Jost-ExtraBold, Helvetica",
        fontWeight: '800',
        color: '#284b63',
        fontSize: '32px',
        marginLeft: '20px'
    }
    return (
        <div style={TitleStyles}>
            <img src="./assets/title-pattern.png" alt="" />
            <h1 style ={TitlePage}>{text}</h1>
        </div>
    );
}
export default Title;