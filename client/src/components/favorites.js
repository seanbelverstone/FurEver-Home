import React, { Component } from "react";
import "./cardstyle.css";
// import { addFavorite } from "./datacard.js";

/* PSUEDOCODE
Once the datacard data has been stored to local storage or cookies from datacard.js, access this data on
this file and append the name and image to the favorites bar. */

const petName = window.localStorage.getItem("name");
const petImage = window.localStorage.getItem("src");
// console.log(displayFav);
// const image =  JSON.parse(window.localStorage.getItem[1]);

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
    console.log(favoriteBlock);
}

class FavoriteAnimals extends Component {
render() {
  return (
    <div id="favoriteSection">
      
    </div>
    
    // <div className="favoriteAnimal">
    //   <p> Hello i'm rendering! </p>
    // </div>
  );
  //access local storage

  //.append <img> and <p> containing the src and name
}
}

export default FavoriteAnimals;

// // how can I put the onclick Favstar?
// <Button onClick={() => addFavorite(this.props.animal.id)} />;

//   displayImg = event =>{
//     event.render()
//     this.setState({
//       state = {
//       username: "",
//       photos: "",
//       name: ""
//     }
//     });
//     axios
//     .post("/api/auth", {
//     username: this.state.username,
//     password: this.state.password
//     })
//     .then(response => {
//     this.cookies.set("token", response.data.token);
//     });
//     };

//   //doing cookies here, but how do we connect with sql datbaase instead
//   cookies = new Cookies();

//   constuctor(props) {
//     super(props);

//   render() {
//     return (
//       <React.Fragment>
//         <div className="favBar">
//           <div className="img-container">
//             <img
//               alt={this.props.animal.name}
//               src={this.props.animal.photos[0].small}
//             />
//           </div>

//           <div className="content">
//             <strong>Name:</strong> {this.props.animal.name}
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default FavoriteAnimals;

// /* SHOULD WE USE THE NEXT 3 LINES?
// export const addFavorite = petId => {
//   console.log("HELLO WORLD");
//   console.log("The Pet ID we just clicked on is: ", petId);
// };
// */

// // function addFavorite(props) {
// //   return <div className="filterfav-button">{props.filterOptions}</div>;
// // };

// //-------------------------------------------
