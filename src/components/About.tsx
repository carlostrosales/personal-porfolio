import React from 'react';
import profilePic from "../assets/profilePic.JPG";


const About = () => {

  const mainContainer = {
    backgroundColor: '#F0F0F0',
    minHeight: '100vh',
    padding: '50px',
  } as React.CSSProperties;

  const titleStyle = {
    letterSpacing: '2px',
  } as React.CSSProperties;

  const ideStyle = {
    height: "390px",
    width: "550px",
    backgroundColor: "#2a2d34",
    padding: "30px",
    margin: "40px",
    marginTop: "40px",
    borderTop: "20px solid #e5e5e5",
    boxShadow: "12px 12px 1px #B6D0E2",
    fontFamily: 'Monaco,monospace',
  } as React.CSSProperties;

  const textStyles = {
    firstColor: {
      color: "#ac78c2",
    },
    fifthColor: {
      color: "#b5bd68",
    },
    secondColor: {
      color: "#c5c8c6",
    },
  };

  const imageStyle = {
    height: '450px',
  } as React.CSSProperties;

    return (
      <div>
        <div style={mainContainer}>
          <h1 style={titleStyle}>HELLO, WORLD!</h1>
          <div id="container-row">
            <div style={ideStyle}>
              <span style={textStyles.firstColor}>package </span>
              <span style={textStyles.fifthColor}>aboutMe</span>
              <span style={textStyles.secondColor}>;</span>
            </div>
            <img style={imageStyle} src={profilePic} alt="profilePic" />
          </div>
        </div>
      </div>
    );
};

export default About;