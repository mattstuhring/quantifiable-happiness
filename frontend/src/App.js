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
      userInfo: null,
      showHomeNav: false
    };
  }

  componentDidMount = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo) {
      this.setState({
        userInfo
      });
    }

    const showHomeNav = JSON.parse(localStorage.getItem('showHomeNav'));

    if (showHomeNav) {
      this.setState({
        showHomeNav
      });
    }
  };

  handleLogout = () => {
    localStorage.removeItem('userInfo');

    this.setState({
      userInfo: null,
      showHomeNav: false
    });
  };

  handleUserInfo = (userInfo) => {
    if (userInfo) {
      this.setState({
        userInfo
      });
    }
  };

  render() {
    return (
      <Router>
        <Header
          userInfo={this.state.userInfo}
          showHomeNav={this.state.showHomeNav}
          handleLogout={this.handleLogout}
        />

        <main>
          <Container>
            <Route path='/' exact component={HomeScreen}></Route>
            <Route
              path='/login'
              render={(props) => (
                <LoginScreen {...props} handleUserInfo={this.handleUserInfo} />
              )}
            />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/dashboard/:id' component={DashboardScreen} />
            <Route path='/explore' component={ExploreScreen} />
            <Route path='/profile' component={ProfileScreen} />
          </Container>
        </main>
      </Router>
    );
  }
}

export default App;
