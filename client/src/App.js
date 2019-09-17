/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Jumbotron from "./components/jumbotron";
import "./App.css";
import animals from "../src/animals.json";
import CharCard from "./components/datacard.js";
// import CardBodyInfo from "./components/CardBodyInfo.js";

// const apiUser = process.env.apiUser;
// const apiKey = process.env.apiKey;
// const API_KEY = process.env.REACT_APP_FUREVER_HOME_API_KEY;

// const url = "https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=" + apiUser + "&client_secret=" + apiKey + "4pcDx02VBYwJBPWpTFmC4H9iPE9k39YSjUEVffDY";
// console.log("Query url is: " + url);
// console.log("apiUser is: " + apiUser);
// console.log("apiKey is: " + apiKey);
// console.log("API_KEY IS: " + API_KEY);

class App extends Component {
  // Setting this.state.chars to the chars json array
  state = {
    // Initialize and import the chars array
    animals: animals,
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
  //  ================================================================ HELLO
  //  ================================================================




  render() {


    return (
      <React.Fragment>
        <Jumbotron />
        <div className="charCard">
          {this.state.animals.map(animal => (
            <div>
            <CharCard animal={animal} />
            {/* <CardBodyInfo {...animal} /> */}
            </div>
          ))}
        </div>
      </React.Fragment>
    
    );
  }
}

export default App;


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