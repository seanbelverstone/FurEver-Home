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
	}

	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}


  render() {
    return (

			<React.Fragment>
				<div className="animalCard">
					{/* <div className="container"> */}
        
            <button id="favButton" src="https://cdn3.iconfinder.com/data/icons/user-interface-48/52/empty-star-512.png" onClick={() => addFavorite(this.props.animal.id)}/>

            <div className="img-container">
              <img alt={this.props.animal.name} src={this.props.animal.photos.medium} />
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
