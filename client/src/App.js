/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Jumbotron from "./components/jumbotron";
import "./App.css";
// import animals from "../src/animals.json";
import CharCard from "./components/datacard.js";
import axios from "axios";
// import CardBodyInfo from "./components/CardBodyInfo.js";
import FilterBar from "./components/sidebar.js";
import FavBar from "./components/favbar.js";

class App extends Component {
  // Setting this.state.chars to the chars json array
  state = {
    // Initialize and import the chars array
    animals: [],
    // Create an array storing the ID of Favorites
    favArray: [],
    users:[]
  }
  componentDidMount() {
    axios.get("api/pets").then(response => response.data)
    .then((data) => {
      this.setState({ animals: data.animals })
      console.log(this.state.animals);
      // console.log(this.state.animals.attributes);
    });
  };


  render() {


    return (
      <React.Fragment>
        <Jumbotron />
        <FilterBar/>
        <FavBar/>
        <div className="charCard">
          {/* Before we even render our animals, we are checking whether the Photos key exists for that animal, AND whether that photos array is populated. If both are true, then display the animal card as normal. */}
          {this.state.animals.filter(animal => animal.photos.length).map(animal => (
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