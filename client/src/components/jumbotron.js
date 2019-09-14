import React from "react";
import {Jumbotron, Button, Container} from "reactstrap";
import "../App.css";

const mainJumbotron = (props) => {
    return(
        // Jumbotron
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            <Button id="login" color="primary">Learn More</Button>
          </Container>
        </Jumbotron>
      </div>
    );
}

export default mainJumbotron;