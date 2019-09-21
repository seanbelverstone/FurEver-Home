// import React, { Component } from "react";
// import "./cardtyle.css";
// import { addFavorite } from "./datacard.js";

// class FavoriteAnimals extends Component {
  
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

