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
            <p>Learn how to improve your happiness.</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ExploreScreen;
