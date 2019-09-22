import React, { Component } from "react";
import "./cardstyle.css";

/* PSUEDOCODE
Once the datacard data has been stored to local storage or cookies from datacard.js, access this data on
this file and append the name and image to the favorites bar. */

const petName = window.localStorage.getItem("name");
const petImage = window.localStorage.getItem("src");

export function appendAnimals() {

	var favoriteBlock = document.createElement("DIV");
	var name = document.createElement("P");
	var nameText = document.createTextNode(petName);
	name.appendChild(nameText);
	var img = document.createElement("IMG");
	img.setAttribute("src", petImage);
	favoriteBlock.appendChild(name);
	favoriteBlock.appendChild(img);
	document.getElementById("favoriteSection").appendChild(favoriteBlock);
}

class FavoriteAnimals extends Component {
	render() {
		return (
			<div id="favoriteSection">
      
			</div>

		);
	}
}

export default FavoriteAnimals;