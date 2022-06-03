import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='profile'>
        <Row>
          <Col md={12}>
            <h1>Profile</h1>
            <p>Here is your personal profile.</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProfileScreen;
