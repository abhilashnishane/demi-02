import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import Insights from '../pages/Insights';


export default class Main extends React.Component {
  render() {
    return(
      <Router basename="/demo-02">
        <div>

          <Route exact path="/" component={Home} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/insights" component={Insights} />

        </div>
      </Router>
    )
  }
}