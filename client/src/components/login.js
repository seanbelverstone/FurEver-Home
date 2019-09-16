/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class Login extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			formControls: {
				email: {
					value: ""
				},
				password: {
					value: ""
				}
			}
		};
  
		this.changeHandler = this.changeHandler.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

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

	onSubmit() {
		const email = this.state.formControls.email.value;
		const password = this.state.formControls.password.value;
		console.log("Email:" + email);
    console.log("Password: "+ password);
    this.props.closeModal();
	}

	render() {
		return (
			<Form>
				<FormGroup>
					<Input 
						type="email" 
						name="email" 
						id="name" 
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

