import React, { Component } from 'react';
import think from '../images/think.png';
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
      radioMood: '',
      radioLocation: '',
      radioPeople: '',
      notes: ''
    };
  }

  onChange = (event) => {
    console.log(event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    console.log('Submit happiness');
  };

  render() {
    console.log(this.state);
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
                          name='radioMood'
                          value='excellent'
                          checked={this.state.radioMood === 'excellent'}
                          onChange={this.onChange}
                        >
                          <FontAwesomeIcon icon={faFaceGrinBeam} size='3x' />
                        </ToggleButton>
                        <ToggleButton
                          id='radio-mood-2'
                          className='radio-mood shadow-sm'
                          type='radio'
                          variant='secondary'
                          name='radioMood'
                          value='happy'
                          checked={this.state.radioMood === 'happy'}
                          onChange={this.onChange}
                        >
                          <FontAwesomeIcon icon={faFaceSmile} size='3x' />
                        </ToggleButton>
                        <ToggleButton
                          id='radio-mood-3'
                          className='radio-mood shadow-sm'
                          type='radio'
                          variant='secondary'
                          name='radioMood'
                          value='neutral'
                          checked={this.state.radioMood === 'neutral'}
                          onChange={this.onChange}
                        >
                          <FontAwesomeIcon icon={faFaceMeh} size='3x' />
                        </ToggleButton>
                        <ToggleButton
                          id='radio-mood-4'
                          className='radio-mood shadow-sm'
                          type='radio'
                          variant='secondary'
                          name='radioMood'
                          value='sad'
                          checked={this.state.radioMood === 'sad'}
                          onChange={this.onChange}
                        >
                          <FontAwesomeIcon icon={faFaceFrown} size='3x' />
                        </ToggleButton>
                        <ToggleButton
                          id='radio-mood-5'
                          className='radio-mood shadow-sm'
                          type='radio'
                          variant='secondary'
                          name='radioMood'
                          value='terrible'
                          checked={this.state.radioMood === 'terrible'}
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
                            name='radioLocation'
                            value='home'
                            checked={this.state.radioLocation === 'home'}
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
                            name='radioLocation'
                            value='work'
                            checked={this.state.radioLocation === 'work'}
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
                            name='radioLocation'
                            value='nature'
                            checked={this.state.radioLocation === 'nature'}
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
                            name='radioLocation'
                            value='travel'
                            checked={this.state.radioLocation === 'travel'}
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
                            name='radioLocation'
                            value='public'
                            checked={this.state.radioLocation === 'public'}
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
                            name='radioPeople'
                            value='myself'
                            checked={this.state.radioPeople === 'myself'}
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
                            name='radioPeople'
                            value='partner'
                            checked={this.state.radioPeople === 'partner'}
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
                            name='radioPeople'
                            value='friend'
                            checked={this.state.radioPeople === 'friend'}
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
                            name='radioPeople'
                            value='family'
                            checked={this.state.radioPeople === 'family'}
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
                            name='radioPeople'
                            value='coworker'
                            checked={this.state.radioPeople === 'coworker'}
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
                            name='radioPeople'
                            value='other'
                            checked={this.state.radioPeople === 'other'}
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
