import React from "react";

const CardBodyInfo = (props) => {
    return (
      <React.Fragment>
        <li>
          <strong>Notes:</strong>
          <ul>
          <li>
            <strong>Spayed/Neutrered:</strong> {props.animal.spayed_neutered}
          </li>
          <li>
            <strong>Up to Date on Shots:</strong> {props.animal.shots_current}
          </li>
          <li>
            <strong>Child-Friendly:</strong> {props.animal.children}
          </li>
          
          </ul>
        </li>
  
        <li>
          <strong>Contact Info:</strong>
        </li>
        <ul>
          <li>
            <strong>Email:</strong> {props.animal.email}
          </li>
          <li>
            <strong>Phone Number:</strong> {props.animal.phone}
          </li>
        </ul>
      </React.Fragment>
    )
  };
  export default CardBodyInfo;