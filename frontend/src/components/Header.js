import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../logo.png';

export class Header extends Component {
  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=''
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Quantifiable Happiness
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#metrics'>Metrics</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              Hello: <a href='/login'>User</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
