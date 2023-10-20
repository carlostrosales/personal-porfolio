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
    marginLeft: '10%',
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
    height: "450px",
    width: "375px",
    marginTop: "3%",
    marginRight: "15%",
    borderTop: "20px solid #e5e5e5",
    boxShadow: "12px 12px 1px #B6D0E2",
    fontFamily: "Monaco,monospace",
  } as React.CSSProperties;

  const rowStyle = {
    display: 'flex',
    marginTop: '0.5%',
  } as React.CSSProperties;

    return (
      <div>
        <div style={mainContainer}>
          <div style={titleStyle}>
            <h1>HELLO, WORLD!</h1>
          </div>
          <div style={rowStyle}>
            <div style={ideStyle}>
              <div style={{float: 'left', paddingLeft: '1%'}}>
                <span style={textStyles.firstColor}>package </span>
                <span style={textStyles.fifthColor}>aboutMe</span>
                <span style={textStyles.secondColor}>;</span>
                <br />
                <br />
                <span style={textStyles.firstColor}>public </span>
              </div>
            </div>
            <img style={imageStyle} src={profilePic} alt="profilePic" />
          </div>
        </div>
      </div>
    );
};

export default About;