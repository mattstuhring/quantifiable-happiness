import React, { Component } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import intro from '../images/intro.png';
import analysis from '../images/analysis.png';
import about from '../images/about.png';
import collect from '../images/collect.png';
import process from '../images/process.png';
import examine from '../images/examine.png';
import report from '../images/report.png';
import contact from '../images/contact.png';

export class HomeScreen extends Component {
  componentDidMount() {
    localStorage.removeItem('showGoHomeNav');
  }

  render() {
    return (
      <div className='home'>
        {/* INTRO */}
        <div id='intro-nav'></div>
        <div id='intro'>
          <Row className='justify-content-center'>
            <Col md='5'>
              <Card bsPrefix='intro-card'>
                <Card.Body>
                  <Card.Title>Quantifiable Happiness</Card.Title>
                  <Card.Text className='question'>
                    What does your happiness look like?
                  </Card.Text>
                  <Button size='md' variant='primary' href='#about-nav'>
                    LEARN MORE
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='justify-content-center' md='7'>
              <img src={intro} id='intro-img' alt=''></img>
            </Col>
          </Row>
        </div>

        {/* ABOUT */}
        <div id='about-nav'></div>
        <div id='about'>
          <Row>
            <Col className='justify-content-center' md='7'>
              <img src={about} id='about-img' alt=''></img>
            </Col>
            <Col className='justify-content-center' md='5'>
              <h1>About Us</h1>
              <p>Mental health awareness</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </div>

        {/* HOW IT WORKS */}
        <div id='how-nav'></div>
        <div id='how'>
          <Row>
            <Col className='justify-content-center col-center' md='12'>
              <h1>How it Works</h1>
            </Col>
          </Row>
          <Row>
            <Col className='justify-content-center col-center' md='3'>
              <h3>1. Collect</h3>
              <img src={collect} id='collect-img' alt=''></img>
            </Col>
            <Col className='justify-content-center col-center' md='3'>
              <h3>2. Process</h3>
              <img src={process} id='process-img' alt=''></img>
            </Col>
            <Col className='justify-content-center col-center' md='3'>
              <h3>3. Analyze</h3>
              <img src={examine} id='examine-img' alt=''></img>
            </Col>
            <Col className='justify-content-center col-center' md='3'>
              <h3>4. Report</h3>
              <img src={report} id='report-img' alt=''></img>
            </Col>
          </Row>
          <Row className='how-content'>
            <Col className='justify-content-center' md='12'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </div>

        {/* TOOLS */}
        <div id='tools-nav'></div>
        <div id='tools'>
          <Row>
            <Col className='justify-content-center' md='5'>
              <h1>Tools</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
            <Col className='justify-content-center' md='7'>
              <img src={analysis} id='analysis-img' alt=''></img>
            </Col>
          </Row>
        </div>

        {/* CONTACT */}
        <div id='contact-nav'></div>
        <div id='contact'>
          <Row>
            <Col className='justify-content-center' md='7'>
              <img src={contact} id='contact-img' alt=''></img>
            </Col>
            <Col className='justify-content-center' md='5'>
              <h1>Contact Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul>
                <li>
                  <a href='mailto:whereyouatmatt@gmail.com?subject = Quantifiable Happiness Feedback'>
                    Email
                  </a>
                </li>
                <li>
                  <a href='https://github.com/mattstuhring/quantifiable-happiness'>
                    Github
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/mattstuhring/'>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
