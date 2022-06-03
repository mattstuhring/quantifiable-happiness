import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      username: ''
    };
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!userInfo) {
      this.props.history.push('/login');
    } else {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      };

      axios
        .get(`/api/v1/users/dashboard/${id}`, config)
        .then((res) => {
          console.log(res.data);
          this.setState({
            userId: id,
            username: userInfo.username
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
