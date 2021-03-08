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
import Testpo from './components/Testpo';
import Testpt from "./components/Testpt";
import Result from "./components/Result"

class App extends Component {
  render() {
    return (
      <Router>
        <Title></Title>
        <Switch> 
          <Route path="/result/:list">
            <Result></Result>
          </Route>
          <Route path="/2/:list">
            <Testpt></Testpt>
          </Route>
          <Route path="/1/:list">
            <Testpo></Testpo>
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