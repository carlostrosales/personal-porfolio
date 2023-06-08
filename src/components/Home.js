import React from "react";

const homeStyle = {
    backgroundColor: 'white'
};

const titleStyle = {
    maxWidth: '100%',
    fontSize: '350%',
    marginTop: '5%',
    marginBottom: '2%',
}

const Home = () => {
    return (
      <div style={homeStyle}>
        <h1 style={titleStyle}>Carlos Rosales</h1>
      </div>
    );
}

export default Home;


