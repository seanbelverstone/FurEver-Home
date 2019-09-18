/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Jumbotron from "./components/jumbotron";
import "./App.css";
import animals from "../src/animals.json";
import CharCard from "./components/datacard.js";
import axios from "axios";
// import CardBodyInfo from "./components/CardBodyInfo.js";
import FilterBar from "./components/sidebar.js";
import FavBar from "./public/src/components/FavBar.js";

class App extends Component {
  // Setting this.state.chars to the chars json array
  state = {
    // Initialize and import the chars array
    animals: animals,
    // Create an array storing the ID of Favorites
    favArray: [],
    users: []
  };
  componentDidMount() {
    axios
      .get("api/pets")
      .then(response => response.data)
      .then(data => {
        this.setState({ users: data });
        // console.log(this.state.users)
        // console.log(data)
      });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <FilterBar />
        <FavBar />
        <div className="charCard">
          {this.state.animals.map(animal => (
            <div>
              <CharCard animal={animal} />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
