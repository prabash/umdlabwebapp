import React, { Component } from 'react';
import './App.css';
import Menu from "./components/menu/menu"
import Login from "./components/login/login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Bootstrap style */
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Menu} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
