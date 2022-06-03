import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class QuantifyScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='quantify'>
        <Row>
          <Col md={12}>
            <h1>Quantify</h1>
            <p>Let's quantify your happiness!</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default QuantifyScreen;
