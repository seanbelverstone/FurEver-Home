/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Jumbotron from "./components/jumbotron";
import Modal from "./components/modal";
import "./App.css";
import animal from "../src/animals.json";
import CharCard from "./components/datacard.js";

class App extends Component {
  // Setting this.state.chars to the chars json array
  state = {
    // Initialize and import the chars array
    animal: animal,
    // Create an array storing the ID of Favorites
    favArray: []
  };


  render() {
    return (
      <React.Fragment>
        <Jumbotron />
      
        <div id="cardarea">
        {this.state.animal.map(animal => (
          <CharCard
           { ...animal }
            // id={animal.id}
            // key={animal.id}
            // name={animal.name}
            // image={animal.image}
            // type={animal.type}
            // gender={animal.gender}
            // description={animal.description}
            // spayed_neutered={animal.spayed_neutered}
            // shots_current={animal.shots_current}
            // children={animal.children}
            // email={animal.email}
            // phone={animal.phone}
            // occupation={char.occupation}
            // location={char.location}
          />
        ))}
        </div>


      {/* <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */}
      </React.Fragment>
    
    );
  }
}

export default App;

