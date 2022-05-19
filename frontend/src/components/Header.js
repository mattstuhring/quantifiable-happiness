import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
        return null;
      }
    };

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
            <span className='header-logo'>Quantifiable Happiness</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#metrics'>Metrics</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className='justify-content-end'>
            {username()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
