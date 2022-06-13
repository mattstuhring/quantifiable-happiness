import React, { Component } from 'react';
import think from '../images/think.png';
import axios from 'axios';
import {
  Button,
  Row,
  Col,
  ToggleButton,
  ButtonGroup,
  Form,
  Card,
  ListGroup
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faFaceTired,
  faFaceMeh,
  faFaceFrown,
  faFaceGrinBeam
} from '@fortawesome/free-regular-svg-icons';
import {
  faHouseChimneyWindow,
  faPlaneUp,
  faTree,
  faCity,
  faStore,
  faUser,
  faUserGroup,
  faUsers,
  faPeopleRoof,
  faUserTie,
  faPersonCircleQuestion,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

class QuantifyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: '',
      location: '',
      people: '',
      notes: ''
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    console.log('Submitting happiness...');

    const { mood, location, people, notes } = this.state;
    const payload = { mood, location, people, notes };

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    axios
      .post('/api/v1/snapshots', payload, config)
      .then((res) => {
        console.log(res);
        // this.setState({
        //   email: '',
        //   password: ''
        // });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div id='quantify'>
        <Row>
          <Col md={12} className='justify-content-center'>
            <h1>Let's quantify your happiness!</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <img src={think} id='think-img' alt=''></img>
          </Col>
          <Col md={6} className='quantify-form'>
            <Card>
              <Card.Header>
                <FontAwesomeIcon icon={faChartLine} size='lg' />
              </Card.Header>
              <form onSubmit={this.onSubmit}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row className='mb-2 mt-2'>
                      <Col md={12}>
                        <p>1. Mood</p>
                        <ToggleButton
                          id='radio-mood-1'
                          className='radio-mood shadow-sm'
                          type='radio'
                          variant='secondary'
                          name='mood'
                          value='excellent'
                          checked={this.state.mood === 'excellent'}
                          onChange={this.onChange}
                        >
                          <FontAwesomeIcon icon={faFaceGrinBeam} size='3x' />
                        </ToggleButton>
                        <ToggleButton
                          id='radio-mood-2'
                          className='radio-mood shadow-sm'
                          type='radio'
                          variant='secondary'
                          name='mood'
                          value='happy'
                          checked={this.state.mood === 'happy'}
                          onChange={this.onChange}
                        >
                          <FontAwesomeIcon icon={faFaceSmile} size='3x' />
                        </ToggleButton>
                        <ToggleButton
                          id='radio-mood-3'
                          className='radio-mood shadow-sm'
                          type='radio'
                          variant='secondary'
                          name='mood'
                          value='neutral'
                          checked={this.state.mood === 'neutral'}
                          onChange={this.onChange}
                        >
                          <FontAwesomeIcon icon={faFaceMeh} size='3x' />
                        </ToggleButton>
                        <ToggleButton
                          id='radio-mood-4'
                          className='radio-mood shadow-sm'
                          type='radio'
                          variant='secondary'
                          name='mood'
                          value='sad'
                          checked={this.state.mood === 'sad'}
                          onChange={this.onChange}
                        >
                          <FontAwesomeIcon icon={faFaceFrown} size='3x' />
                        </ToggleButton>
                        <ToggleButton
                          id='radio-mood-5'
                          className='radio-mood shadow-sm'
                          type='radio'
                          variant='secondary'
                          name='mood'
                          value='terrible'
                          checked={this.state.mood === 'terrible'}
                          onChange={this.onChange}
                        >
                          <FontAwesomeIcon icon={faFaceTired} size='3x' />
                        </ToggleButton>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row className='mb-3'>
                      <Col md={12}>
                        <p>2. Location</p>
                        <ButtonGroup>
                          <ToggleButton
                            id='radio-location-1'
                            className='radio-location shadow-sm'
                            type='radio'
                            variant='secondary'
                            name='location'
                            value='home'
                            checked={this.state.location === 'home'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon
                              icon={faHouseChimneyWindow}
                              size='lg'
                            />
                            <p>Home</p>
                          </ToggleButton>
                          <ToggleButton
                            id='radio-location-2'
                            className='radio-location shadow-sm'
                            type='radio'
                            variant='secondary'
                            name='location'
                            value='work'
                            checked={this.state.location === 'work'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon icon={faCity} size='lg' />
                            <p>Work</p>
                          </ToggleButton>
                          <ToggleButton
                            id='radio-location-3'
                            className='radio-location shadow-sm'
                            type='radio'
                            variant='secondary'
                            name='location'
                            value='nature'
                            checked={this.state.location === 'nature'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon icon={faTree} size='lg' />
                            <p>Nature</p>
                          </ToggleButton>
                          <ToggleButton
                            id='radio-location-4'
                            className='radio-location shadow-sm'
                            type='radio'
                            variant='secondary'
                            name='location'
                            value='travel'
                            checked={this.state.location === 'travel'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon icon={faPlaneUp} size='lg' />
                            <p>Travel</p>
                          </ToggleButton>
                          <ToggleButton
                            id='radio-location-5'
                            className='radio-location shadow-sm'
                            type='radio'
                            variant='secondary'
                            name='location'
                            value='public'
                            checked={this.state.location === 'public'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon icon={faStore} size='lg' />
                            <p>Public</p>
                          </ToggleButton>
                        </ButtonGroup>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row className='mb-3'>
                      <Col md={12}>
                        <p>3. People</p>
                        <ButtonGroup className='shadow-sm'>
                          <ToggleButton
                            id='radio-people-1'
                            className='radio-people'
                            type='radio'
                            variant='secondary'
                            name='people'
                            value='myself'
                            checked={this.state.people === 'myself'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon icon={faUser} size='lg' />
                            <p>Myself</p>
                          </ToggleButton>
                          <ToggleButton
                            id='radio-people-2'
                            className='radio-people'
                            type='radio'
                            variant='secondary'
                            name='people'
                            value='partner'
                            checked={this.state.people === 'partner'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon icon={faUserGroup} size='lg' />
                            <p>Partner</p>
                          </ToggleButton>
                          <ToggleButton
                            id='radio-people-3'
                            className='radio-people'
                            type='radio'
                            variant='secondary'
                            name='people'
                            value='friend'
                            checked={this.state.people === 'friend'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon icon={faUsers} size='lg' />
                            <p>Friend</p>
                          </ToggleButton>
                          <ToggleButton
                            id='radio-people-4'
                            className='radio-people'
                            type='radio'
                            variant='secondary'
                            name='people'
                            value='family'
                            checked={this.state.people === 'family'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon icon={faPeopleRoof} size='lg' />
                            <p>Family</p>
                          </ToggleButton>
                          <ToggleButton
                            id='radio-people-5'
                            className='radio-people'
                            type='radio'
                            variant='secondary'
                            name='people'
                            value='coworker'
                            checked={this.state.people === 'coworker'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon icon={faUserTie} size='lg' />
                            <p>Coworker</p>
                          </ToggleButton>
                          <ToggleButton
                            id='radio-people-6'
                            className='radio-people'
                            type='radio'
                            variant='secondary'
                            name='people'
                            value='other'
                            checked={this.state.people === 'other'}
                            onChange={this.onChange}
                          >
                            <FontAwesomeIcon
                              icon={faPersonCircleQuestion}
                              size='lg'
                            />
                            <p>Other</p>
                          </ToggleButton>
                        </ButtonGroup>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row className='mb-3'>
                      <Col md={12}>
                        <Form.Group controlId='notes'>
                          <Form.Label>4. Notes</Form.Label>
                          <Form.Control
                            as='textarea'
                            rows={3}
                            type='text'
                            placeholder='Optional notes go here... '
                            name='notes'
                            value={this.state.notes}
                            onChange={this.onChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={12} className='mt-1 d-grid'>
                        <Button type='submit' variant='primary'>
                          SUBMIT
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default QuantifyScreen;
