import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Prepare from "./components/Prepare";

class App extends Component {
  render() {
    return (
      <Router>
        <Title></Title>
          <Switch>
            <Route path="/test">
            </Route>
            <Route path="/result">
            </Route>
            <Route path="/">
              <Prepare></Prepare>
            </Route>
          </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;