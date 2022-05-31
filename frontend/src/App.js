import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      showHomeNav: false
    };
  }

  componentDidMount = () => {
    const username = localStorage.getItem('username');

    if (username) {
      this.setState({
        username
      });
    }

    const showHomeNav = localStorage.getItem('showHomeNav');

    console.log('App showHomeNav: ' + showHomeNav);

    if (showHomeNav) {
      this.setState({
        showHomeNav
      });
    }
  };

  handleUsername = () => {
    const username = localStorage.getItem('username');

    console.log('App handle username: ' + username);

    if (username) {
      this.setState({
        username
      });
    }
  };

  render() {
    return (
      <Router>
        <Header
          username={this.state.username}
          showHomeNav={this.state.showHomeNav}
        />

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
            <Route path='/dashboard' component={DashboardScreen} />
            <Route path='/explore' component={ExploreScreen} />
            <Route path='/profile' component={ProfileScreen} />
          </Container>
        </main>
      </Router>
    );
  }
}

export default App;
