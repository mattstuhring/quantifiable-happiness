import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Row className='justify-content-center'>
          <Col md='auto'>
            <h1>Welcome</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md='auto'>
            <p>What does your happiness look like?</p>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md='auto'>
            <a href='/login'>Login</a> / <a href='/register'>Sign Up</a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeScreen;
