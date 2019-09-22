/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class Login extends React.Component {

	constructor(props) {
		super(props);
		// Defines the form's values as a state that will change
		this.state = {
			formControls: {
				username: {
					value: ""
				},
				email: {
					value: ""
				},
				password: {
					value: ""
				}
			}
		};

		// Binding this for the two functions so React knows what 'this' is
		this.changeHandler = this.changeHandler.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	// Setting state for the values
	changeHandler(event) {

		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			formControls: {
				...this.state.formControls,
				[name]: {
					...this.state.formControls[name],
					value
				}
			}

		});
	}

	// Submit button function, which sets the email/password values and closes the modal
	onSubmit() {
		const username = this.state.formControls.username.value;
		const email = this.state.formControls.email.value;
		const password = this.state.formControls.password.value;
		this.props.closeModal();

		//STRETCH GOAL
		// AXIOS call to the api using sequelize
		//if user is in database, don't do anything right now
		//if user is not in the database, create new user 

		const data = {
			name: username,
			email: email,
			password: password
		};

		fetch("/api/users", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json"
			},
			redirect: "follow",
			referrer: "no-referrer",
			body: JSON.stringify(data)
		})
			.then(function(response) {
				return response.text();
			}, function(error) {
				throw (error); //=> String
			});

	}

	render() {
		return ( 
			<Form>

				<FormGroup>
					<Input 
						type="text" 
						name="username" 
						id="username" 
						placeholder="Your Name" 
						value={this.state.formControls.username.value} 
						onChange={this.changeHandler} />
				</FormGroup>

				<FormGroup>
					<Input 
						type="email" 
						name="email" 
						id="email" 
						placeholder="Email" 
						value={this.state.formControls.email.value} 
						onChange={this.changeHandler} />
				</FormGroup>

				<FormGroup>
					<Input 
						type="password" 
						name="password" 
						id="password" 
						placeholder="Password"
						value={this.state.formControls.password.value} 
						onChange={this.changeHandler} />
				</FormGroup>

				<Button onClick={this.onSubmit}>Submit</Button>
	
			</Form>
		);
	}
}