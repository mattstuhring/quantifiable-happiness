import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { username, email, password, confirmPassword } = this.state;

    console.log('Registering...');

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios
      .post(
        '/api/v1/users',
        { username, email, password, confirmPassword },
        config
      )
      .then((res) => {
        console.log(res);

        this.setState({
          error: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });

        this.props.history.push('/login');
      })
      .catch((err) => {
        console.log(err.response.data);

        this.setState({ error: err.response.data });
      });
  };

  render() {
    const { username, email, password, confirmPassword, error } = this.state;

    return (
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={6}>
            <h1>Sign Up</h1>

            {error ? <Alert variant='danger'>{error}</Alert> : null}

            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter username'
                  name='username'
                  value={username}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  name='email'
                  value={email}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  name='password'
                  value={password}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Register
              </Button>
            </Form>

            <Row className='py-3'>
              <Col>
                Have an account? <a href='/login'>Login</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegisterScreen;
