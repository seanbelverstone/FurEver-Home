import React from "react";
import "./cardstyle.css";
// import animal from "../../src/animals.json";



function CharCard(props) {
  return (

    <React.Fragment>
      {/* Inserting props.id as an argument for the RemoveChar function, so we can specifically tell it which ID to be removing, i.e. the thing we just clicked on */}

    <div className="animalCard">
    
      {/* <button src="https://cdn3.iconfinder.com/data/icons/user-interface-48/52/empty-star-512.png" onClick={() => props.addFavorite(props.id)}/> */}

      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <favorite-star></favorite-star>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Type:</strong> {props.type}
          </li>
          <li>
            <strong>Gender:</strong> {props.gender}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
              <strong>Notes:</strong>
              <ul>
              <li>
                <strong>Spayed/Neutrered:</strong> {props.spayed_neutered}
              </li>
              <li>
                <strong>Up to Date on Shots:</strong> {props.shots_current}
              </li>
              <li>
                <strong>Child-Friendly:</strong> {props.children}
              </li>
              
              </ul>
          </li>

          <li>
            <strong>Contact Info:</strong>
          </li>
          <ul>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            <li>
              <strong>Phone Number:</strong> {props.phone}
            </li>
          </ul>
        </ul>        
      </div>

      {/* <span onClick={() => props.removeChar(props.id)} className="remove">𝘅</span> */}
    </div>
    </React.Fragment>
  );
}

export default CharCard;
