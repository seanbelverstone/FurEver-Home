import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
// import CharCard from "./datacard.js";
import CardBodyInfo from "./CardBodyInfo.js";

// Look into React REDUX as a way to make this whole architecture more efficient and streamlined.

class Collapser extends Component {    
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
        collapse: false,
        // animal:animal
    };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>More info</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
                <CardBodyInfo animal={this.props.animal}/>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Collapser;