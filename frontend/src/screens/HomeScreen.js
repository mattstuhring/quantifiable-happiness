import React, { Component } from 'react';
import { Row, Col, Button, Jumbotron } from 'react-bootstrap';
import intro from '../intro.png';

export class HomeScreen extends Component {
  render() {
    return (
      <div className='home'>
        <Row>
          <Col className='justify-content-center' md='5'>
            <Jumbotron>
              <h1>Quantifiable Happiness</h1>
              <p className='question'>What does your happiness look like?</p>
              <p>
                <Button size='md' variant='primary' href='/register'>
                  LEARN MORE
                </Button>
              </p>
            </Jumbotron>
          </Col>
          <Col className='justify-content-center' md='7'>
            <img src={intro} id='intro-img' alt=''></img>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeScreen;
