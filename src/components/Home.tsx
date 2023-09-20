import React from "react";
import profilePic from '../assets/profile-pic.jpeg'
import Typewriter from "typewriter-effect";
import "./Home.css"


const titleStyle = {
    maxWidth: '100%',
    fontSize: '350%',
    marginTop: '5%',
    marginBottom: '2%',
    float: 'right',
    paddingTop: '15%',
    paddingRight: '20%',
    fontFamily: 'nobel',
    fontWeight: '300',
    fontStyle: 'normal',
} as React.CSSProperties;

const imageStyle = {
  float: 'left',
  width: '500px',
  paddingTop: '10%',
  paddingLeft: '10%',
} as React.CSSProperties;

const typewriterStyle = {
  paddingRight: '35%',
  float: 'right',
} as React.CSSProperties;

const Home = () => {
    return (
      <div>
        <h1 style={titleStyle}>CARLOS ROSALES</h1>
        <img style={imageStyle} src={profilePic} alt="profilePic" />
        <div style={typewriterStyle}>
          <Typewriter
            options={{
              strings: ["hey there!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <a className="arrow" href='!#'> </a>
      </div>
    );
}

export default Home;