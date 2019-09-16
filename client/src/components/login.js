import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}