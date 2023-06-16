import React from "react";
import profilePic from '../assets/profile-pic.jpeg'

const homeStyle = {
    backgroundColor: 'white',
}

const titleStyle = {
    maxWidth: '100%',
    fontSize: '350%',
    marginTop: '5%',
    marginBottom: '2%',
    float: 'left',
}

const imageStyle = {
  float: 'right',
}

const Home = () => {
    return (
      <div style={homeStyle}>
        <h1 style={titleStyle}>Carlos Rosales</h1>
        <img style={imageStyle} src={profilePic} alt="profilePic" />
      </div>
    );
}

export default Home;