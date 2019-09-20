import React from "react";

const CardBodyInfo = (props) => {
    return (
      <React.Fragment>
        <li>
          <strong>Notes:</strong>
          <ul>
          <li>
            <strong>Spayed/Neutrered:</strong> {props.animal.attributes.spayed_neutered}
          </li>
          <li>
            <strong>Up to Date on Shots:</strong> {props.animal.attributes.shots_current}
          </li>
          <li>
            <strong>House-Trained:</strong> {props.animal.attributes.house_trained}
          </li>
          
          </ul>
        </li>
  
        <li>
          <strong>Contact Info:</strong>
        </li>
        <ul>
          <li>
            <strong>Email:</strong> {props.animal.contact.email}
          </li>
          <li>
            <strong>Phone Number:</strong> {props.animal.contact.phone}
          </li>
        </ul>
      </React.Fragment>
    )
  };
  export default CardBodyInfo;