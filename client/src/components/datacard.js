import React, {Component} from "react";
import "./cardstyle.css";
// import { Collapse, CardBody, Card } from 'reactstrap';
import Collapser from "./datacardcollapser.js";
import {addFavorite} from "./favorites.js";

// function CharCard(props) {
class CharCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
        collapse: false
        // animal:props.animal
    };
    console.log(props.animal);
    console.log(props.animal.photos);
  }

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}


  render() {
    return (

			<React.Fragment>
				<div className="animalCard">
					{/* <div className="container"> */}
        
            <input alt="favstar" type="image" id="favButton" src="https://cdn.icon-icons.com/icons2/54/PNG/256/favorite_favorite_favorite_star_10835.png" onClick={() => addFavorite(this.props.animal.id)}/>

            <div className="img-container">
              <img alt={this.props.animal.name} src={this.props.animal.photos[0].medium}/> 
            </div>
            {/* <favorite-star></favorite-star> */}
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {this.props.animal.name}
                </li>
                <li>
                  <strong>Type:</strong> {this.props.animal.type}
                </li>
                <li>
                  <strong>Gender:</strong> {this.props.animal.gender}
                </li>
                <li>
                  <strong>Description:</strong> {this.props.animal.description}
                </li>
                <div className="collapseDiv">
                  
								<Collapser animal={this.props.animal}/>

                </div>

                
						</ul>        
					</div>
					{/* </div> */}
				</div>
			</React.Fragment>
		);
	}
};
export default CharCard;
