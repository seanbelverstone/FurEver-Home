import React, { Component } from "react";
import Jumbotron from "./components/jumbotron";
import "./App.css";
import animal from "../src/animals.json";
import CharCard from "./components/datacard.js";

const apiUser = process.env.apiUser;
const apiKey = process.env.apiKey;
const API_KEY = process.env.REACT_APP_FUREVER_HOME_API_KEY;

const url = "https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=" + apiUser + "&client_secret=" + apiKey + "4pcDx02VBYwJBPWpTFmC4H9iPE9k39YSjUEVffDY";
console.log("Query url is: " + url);
console.log("apiUser is: " + apiUser);
console.log("apiKey is: " + apiKey);
console.log("API_KEY IS: " + API_KEY);

class App extends Component {
  // Setting this.state.chars to the chars json array
  state = {
    // Initialize and import the chars array
    animal: animal,
    // Create an array storing the ID of Favorites
    favArray: []
  };

  //  ================================================================
  //  ================================================================
  // var movie = "Mr. Nobody";
  // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";


  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {
  //   // Create a new table row element
  //   console.log(response);
  // });
  //  ================================================================
  //  ================================================================




  render() {


    return (

      
      
      <React.Fragment>
        <Jumbotron />
        <div className="charCard">
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


      {/* <div classNameName="App">
        <div classNameName="App-header">
          <img src={logo} classNameName="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p classNameName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */}
      </React.Fragment>
    
    );
  }
}

export default App;

