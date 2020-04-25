import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
            <Route exact path = '/' component={} />
            <Route exact path = '/login' component={} />
            <Route exact path = '/signup' component={} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
