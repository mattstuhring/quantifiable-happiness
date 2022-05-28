import React, { Component } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../logo.png';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      loggedIn: false
    };

    console.log('Header');
    console.log(this.props);
  }

  handleLogout = () => {
    localStorage.removeItem('username');

    this.setState({
      username: '',
      loggedIn: false
    });
  };

  render() {
    const username = () => {
      if (this.props.username) {
        return (
          <Nav>
            <Navbar.Text>
              Hello: <a href='/login'>{this.props.username}</a>
            </Navbar.Text>
            <Nav.Link href='/' onClick={this.handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        );
      } else {
        return (
          <Nav>
            <Button href='/register' variant='primary' size='sm'>
              Sign Up
            </Button>
            <Button
              href='/login'
              className='login-btn'
              variant='outline-primary'
              size='sm'
            >
              Login
            </Button>
          </Nav>
        );
      }
    };

    return (
      <Navbar fixed='top' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=''
              src={logo}
              width='50'
              height='45'
              className='d-inline-block align-top'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'
          >
            <Nav className='me-auto'>
              <Nav.Link href='#intro-nav'>Home</Nav.Link>
              <Nav.Link href='#about-nav'>About</Nav.Link>
              <Nav.Link href='#how-nav'>How it Works</Nav.Link>
              <Nav.Link href='#tools-nav'>Tools</Nav.Link>
              <Nav.Link href='#contact-nav'>Contact</Nav.Link>
            </Nav>

            {username()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
