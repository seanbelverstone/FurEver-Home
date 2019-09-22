import React from "react";
import {Jumbotron, Container} from "reactstrap";
import Modal from "./modal";
import "../App.css";

const mainJumbotron = (props) => {
	return(
		<div>
			<Jumbotron fluid id="jumbotron">
				<Container fluid>
					<Modal>Login</Modal>
					<h1 className="display-3">FurEver Home</h1>
					<p className="lead">Find your next best friend</p>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default mainJumbotron;