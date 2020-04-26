import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/registrations/Login';
import Signup from './components/registrations/Signup';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false,
      user: {}
    };
  };

  componentDidMount() {
    this.loginStatus()
  };

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
    {withCredentials: true})

    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedin: true,
      user: data.user
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedin: false,
      user: {}
    });
  };

  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path = '/'
             render={props => (
               <Home {...props} 
                  loggedInStatus = {this.state.isLoggedin}
                  handleLogout = {this.handleLogout} 
                />
             )}
            />
            <Route exact path = '/login' 
              render={props => (
                <Login {...props} 
                  handleLogin={this.handleLogin}
                  loggedInStatus = {this.state.isLoggedin}
                />
              )}
            />
            <Route exact path = '/signup' 
              render={props => (
                <Signup {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedin}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
