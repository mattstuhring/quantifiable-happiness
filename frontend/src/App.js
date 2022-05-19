import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };
  }

  componentDidMount = () => {
    const username = localStorage.getItem('username');

    console.log('username: ' + username);

    if (username) {
      this.setState({
        username
      });
    }
  };

  handleUsername = () => {
    const username = localStorage.getItem('username');

    console.log('username: ' + username);

    if (username) {
      this.setState({
        username
      });
    }
  };

  render() {
    return (
      <Router>
        <Header username={this.state.username} />

        <main>
          <Container>
            <Route path='/' exact component={HomeScreen}></Route>
            <Route
              path='/login'
              render={(props) => (
                <LoginScreen {...props} handleUsername={this.handleUsername} />
              )}
            />
            <Route path='/register' component={RegisterScreen} />
          </Container>
        </main>
      </Router>
    );
  }
}

export default App;
