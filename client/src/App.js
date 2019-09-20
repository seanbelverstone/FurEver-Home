/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Jumbotron from "./components/jumbotron";
import "./App.css";
<<<<<<< HEAD
import animals from "../src/animals.json";
=======
// import animals from "../src/animals.json";
>>>>>>> f37699af5a7479a4c99da4b7f67b0279cb4e014d
import CharCard from "./components/datacard.js";
import axios from "axios";
// import CardBodyInfo from "./components/CardBodyInfo.js";
import FilterBar from "./components/sidebar.js";
<<<<<<< HEAD
import FavBar from "./public/src/components/FavBar.js";
=======
import FavBar from "./components/favbar.js";
>>>>>>> f37699af5a7479a4c99da4b7f67b0279cb4e014d

class App extends Component {
  // Setting this.state.chars to the chars json array
  state = {
    // Initialize and import the chars array
<<<<<<< HEAD
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
=======
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
    });
  };

>>>>>>> f37699af5a7479a4c99da4b7f67b0279cb4e014d

  render() {


    return (
      <React.Fragment>
        <Jumbotron />
<<<<<<< HEAD
        <FilterBar />
        <FavBar />
        <div className="charCard">
          {this.state.animals.map(animal => (
            <div>
              <CharCard animal={animal} />
=======
        <FilterBar/>
        <FavBar/>
        <div className="charCard">
          {this.state.animals.map(animal => (
            <div>
            <CharCard animal={animal} />
>>>>>>> f37699af5a7479a4c99da4b7f67b0279cb4e014d
            </div>
          ))}
        </div>
      </React.Fragment>
<<<<<<< HEAD
=======
    
>>>>>>> f37699af5a7479a4c99da4b7f67b0279cb4e014d
    );
  }
}

export default App;