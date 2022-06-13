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
import QuantifyScreen from './screens/QuantifyScreen';

// TODO: Refactor global state management
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
      showGoHomeNav: false
    };
  }

  componentDidMount() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const showGoHomeNav = JSON.parse(localStorage.getItem('showGoHomeNav'));

    this.setState({
      userInfo,
      showGoHomeNav
    });
  }

  handleUserLogout = () => {
    localStorage.removeItem('userInfo');

    this.setState({
      userInfo: null,
      showGoHomeNav: false
    });
  };

  handleUserInfo = (userInfo) => {
    this.setState({
      userInfo
    });
  };

  render() {
    return (
      <Router>
        <Header
          userInfo={this.state.userInfo}
          showGoHomeNav={this.state.showGoHomeNav}
          handleUserLogout={this.handleUserLogout}
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
            <Route path='/dashboard' component={DashboardScreen} />
            <Route path='/quantify' component={QuantifyScreen} />
            <Route path='/explore' component={ExploreScreen} />
            <Route path='/profile' component={ProfileScreen} />
          </Container>
        </main>
      </Router>
    );
  }
}

export default App;
