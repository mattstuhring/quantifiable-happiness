import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='dashboard'>
        <Row>
          <Col md={12}>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>Hello {this.props.username}.</Col>
        </Row>
        <Row>
          <Col md={12}>
            Welcome to your personal dashboard where we help you quantify your
            happiness.
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardScreen;
