/* eslint-disable no-unused-vars */
import React from "react";
import {Jumbotron, Button, Container} from "reactstrap";
import "../App.css";

const mainJumbotron = (props) => {
	return(
	// Jumbotron
		<div>
			<Jumbotron fluid>
				<Container fluid>
					<h1 className="display-3">FurEver Home</h1>
					<p className="lead">Find your next best friend</p>
					<Button id="login" color="primary">Login</Button>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default mainJumbotron;