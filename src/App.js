import React, { Component } from 'react';
import './App.css';
import './nav-bar.css';
import { HomePage } from './homePage';
import { NavBar } from './nav-bar';


class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <NavBar/>
        <HomePage/>
      </div>
    );
  }
}

export default App;
