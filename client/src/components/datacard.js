import React, {Component} from "react";
import "./cardstyle.css";
// import { Collapse, CardBody, Card } from 'reactstrap';
import Collapser from "./datacardcollapser.js";
// import petData from "__dirname/../../routes/apiRoutes.js";
// import PetData from "

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
		console.log("datacard.js thinks that this.props is", this.props);
		console.log("imported petData function is", petData());
		return (

			<React.Fragment>
				<div className="animalCard">
					{/* <div className="container"> */}
        
					{/* <button src="https://cdn3.iconfinder.com/data/icons/user-interface-48/52/empty-star-512.png" onClick={() => props.addFavorite(props.id)}/> */}

					<div className="img-container">
						<img alt={this.props.animal.name} src={this.props.animal.image} />
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


<<<<<<< HEAD
                </div>
=======
								{/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
								{/* <Collapse>
                    <Card>
                      <CardBody>
                        <p>Card Body Info is about to activated...</p>
                        <CardBodyInfo spayed_neutered= "Hello"/>
                      </CardBody>
                    </Card>
                  </Collapse> */}
							</div>
>>>>>>> 511f237b91b5c391327f811ebde5f47b52f09d49
                
						</ul>        
					</div>
					{/* </div> */}
				</div>
			</React.Fragment>
		);
	}
};
export default CharCard;
