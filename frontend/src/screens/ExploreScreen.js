import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ExploreScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='explore'>
        <Row>
          <Col md={12}>
            <h1>Explore</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ExploreScreen;
