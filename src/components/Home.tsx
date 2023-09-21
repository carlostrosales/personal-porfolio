import React from "react";
import profilePic from "../assets/profile-pic.jpeg";
import Typewriter from "typewriter-effect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const mainContainer = {
  display: "flex",
  flexDirection: "row",
  padding: "5%",
} as React.CSSProperties;

const textContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "15%",
  marginLeft: "5%",
} as React.CSSProperties;

const titleStyle = {
  fontSize: '50px',
  fontWeight: '400',
  fontFamily: 'nobel, sans-serif',
  paddingBottom: "0",
} as React.CSSProperties;

const Home = () => {
  return (
    <div>
      <div style={mainContainer}>
        <img src={profilePic} alt="profilePic" />
        <div style={textContainer}>
          <h1 style={titleStyle}>CARLOS ROSALES</h1>
          <Typewriter
            options={{
              strings: [
                "Hey there, welcome!",
                "My name is Carlos",
                "I'm a Software Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <KeyboardArrowDownIcon sx={{marginTop: -10, fontSize: 65}}/>
    </div>
  );
};

export default Home;
