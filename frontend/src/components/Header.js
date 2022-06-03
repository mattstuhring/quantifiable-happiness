import React, { Component } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../images/logo.png';

class Header extends Component {
  render() {
    const showNav = () => {
      if (this.props.userInfo) {
        return (
          <Nav>
            <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
            <Nav.Link href='/quantify'>Quantify</Nav.Link>
            <Nav.Link href='/explore'>Explore</Nav.Link>
            <Nav.Link href='/profile'>Profile</Nav.Link>
            <Button
              className='logout-btn'
              href='/'
              onClick={this.props.handleLogout}
              variant='primary'
            >
              LOGOUT
            </Button>
          </Nav>
        );
      } else {
        if (this.props.showHomeNav) {
          return (
            <Nav>
              <Button
                href='/'
                variant='primary'
                onClick={this.props.handleLogout}
              >
                GO HOME
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
              {showNav()}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
