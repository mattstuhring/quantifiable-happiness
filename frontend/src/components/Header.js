import React, { Component } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../images/logo.png';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      isLoggedIn: false
    };
  }

  handleLogout = () => {
    localStorage.removeItem('username');

    this.setState({
      username: '',
      loggedIn: false
    });
  };

  render() {
    const showHomeNav = () => {
      if (this.props.showHomeNav) {
        return (
          <Nav>
            <Button href='/' variant='primary'>
              HOME
            </Button>
          </Nav>
        );
      } else {
        return (
          <Nav>
            <Nav.Link href='#intro-nav'>Home</Nav.Link>
            <Nav.Link href='#about-nav'>About</Nav.Link>
            <Nav.Link href='#how-nav'>How it Works</Nav.Link>
            <Nav.Link href='#tools-nav'>Tools</Nav.Link>
            <Nav.Link href='#contact-nav'>Contact</Nav.Link>
            <Button href='/login' variant='primary'>
              GET STARTED
            </Button>
          </Nav>
        );
      }
    };

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
      }
    };

    return (
      <div>
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
              {showHomeNav()}

              {username()}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
