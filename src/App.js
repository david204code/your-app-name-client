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
