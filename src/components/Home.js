import React from "react";
import profilePic from '../assets/profile-pic.jpeg'
import Typewriter from "typewriter-effect";

const homeStyle = {
    backgroundColor: 'white',
}

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
}

const imageStyle = {
  float: 'left',
  width: '500px',
  paddingTop: '10%',
  paddingLeft: '10%',
}

const typewriterStyle = {
  paddingRight: '35%',
  float: 'right',
}

const Home = () => {
    return (
      <div style={homeStyle}>
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
      </div>
    );
}

export default Home;