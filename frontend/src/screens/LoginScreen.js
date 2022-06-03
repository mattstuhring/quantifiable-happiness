import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';
import login from '../images/login.png';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    localStorage.setItem('showHomeNav', true);
    this.props.handleShowHomeNav(true);
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios
      .post('/api/v1/users/login', { email, password }, config)
      .then((res) => {
        this.setState({
          email: '',
          password: ''
        });

        localStorage.setItem('userInfo', JSON.stringify(res.data));

        this.props.handleUserInfo(res.data);

        this.props.history.push(`/dashboard/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div id='login'>
        <Row className='justify-content-center'>
          <Col md={6}>
            <img src={login} id='login-img' alt=''></img>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={12}>
                <h1>Login</h1>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Form onSubmit={this.onSubmit}>
                  <Form.Group controlId='email' className='mb-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter email'
                      name='email'
                      value={email}
                      onChange={this.onChange}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId='password' className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter password'
                      name='password'
                      value={password}
                      onChange={this.onChange}
                    ></Form.Control>
                  </Form.Group>

                  <Button type='submit' variant='primary'>
                    SUBMIT
                  </Button>
                </Form>

                <Row className='py-3'>
                  <Col>
                    New User? <a href='/register'>Sign Up</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginScreen;
