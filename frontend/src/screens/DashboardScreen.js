import React, { Component } from 'react';
import { Row, Col, ListGroup, Badge } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faFaceTired,
  faFaceMeh,
  faFaceFrown,
  faFaceGrinBeam,
  faCircleQuestion
} from '@fortawesome/free-regular-svg-icons';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      snapshots: []
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
          this.setState({
            username: userInfo.username,
            snapshots: res.data
          });
        })
        .catch((err) => {
          console.log(err);
          console.error(err);
          this.setState({
            username: userInfo.username,
            snapshots: null
          });
        });
    }
  }

  handleRedirectToLogin = () => {
    localStorage.removeItem('userInfo');

    this.props.history.push('/login');
  };

  render() {
    const { snapshots } = this.state;

    const displayMood = (mood) => {
      let val;
      switch (mood) {
        case 'excellent':
          return <FontAwesomeIcon icon={faFaceGrinBeam} size='2x' />;
          break;
        case 'happy':
          return <FontAwesomeIcon icon={faFaceSmile} size='2x' />;
          break;
        case 'neutral':
          return <FontAwesomeIcon icon={faFaceMeh} size='2x' />;
          break;
        case 'sad':
          return <FontAwesomeIcon icon={faFaceFrown} size='2x' />;
          break;
        case 'terrible':
          return <FontAwesomeIcon icon={faFaceTired} size='2x' />;
          break;
        default:
          return <FontAwesomeIcon icon={faCircleQuestion} size='2x' />;
          break;
      }
    };

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
            <p>What does your happiness look like?</p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='justify-content-center'>
            <h2>Snapshots</h2>
            <ListGroup>
              {!snapshots ? (
                <div>Whoops! Something happened :(</div>
              ) : !snapshots.length ? (
                <div>Let the journey begin!</div>
              ) : (
                snapshots.map((snapshot) => {
                  return (
                    <ListGroup.Item
                      key={snapshot.id}
                      className='d-flex justify-content-between align-items-start'
                    >
                      <div className='ms-2 me-auto'>
                        <p>
                          {moment(snapshot.created_at).format(
                            'YYYY-MM-DD HH:mm:ss'
                          )}
                        </p>
                        <p>Mood: {snapshot.mood}</p>
                        <p>Location: {snapshot.location}</p>
                        <p>People: {snapshot.people}</p>
                      </div>
                      <Badge bg='primary' pill>
                        {displayMood(snapshot.mood)}
                      </Badge>
                    </ListGroup.Item>
                  );
                })
              )}
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardScreen;
