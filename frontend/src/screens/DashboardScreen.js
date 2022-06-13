import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!userInfo) {
      this.handleRedirectToLogin();
    } else {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      };

      axios
        .get('/api/v1/snapshots/mysnapshots', config)
        .then((res) => {
          console.log(res);
          this.setState({
            username: userInfo.username
          });
        })
        .catch((err) => {
          console.error(err);

          this.handleRedirectToLogin();
        });
    }
  }

  handleRedirectToLogin = () => {
    localStorage.removeItem('userInfo');

    this.props.history.push('/login');
  };

  render() {
    return (
      <div id='dashboard'>
        <Row>
          <Col md={12}>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>Welcome {this.state.username}.</h5>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            This is your personal dashboard where we help you quantify your
            happiness.
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardScreen;
