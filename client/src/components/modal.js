/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from "reactstrap";
import Login from "./login";
import "../App.css";

class ModalExample extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			backdrop: true
		};

		this.toggle = this.toggle.bind(this);
		this.changeBackdrop = this.changeBackdrop.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	changeBackdrop(e) {
		let value = e.target.value;
		if (value !== "static") {
			value = JSON.parse(value);
		}
		this.setState({ backdrop: value });
	}

	render() {
		return (
			<div>
				<Form inline onSubmit={(e) => e.preventDefault()}>

					<Button id="modalButton" color="primary" onClick={this.toggle}>{this.props.buttonLabel}Login</Button>

				</Form>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
					<ModalHeader toggle={this.toggle}>Login to your account</ModalHeader>
					<ModalBody>
						{/* This login component is the email/password login form */}
						<Login closeModal={() => this.setState({modal: false})}/>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default ModalExample;