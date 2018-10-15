import React, { Component } from 'react';
import './App.css';
import './nav-bar.css';
import './about.css';
import './footer.css';
import './units.css';
import './image-info-widget.css';
import { NavBar } from './nav-bar';
import { Container } from './container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { About } from './about';
import { Units } from './units';

class App extends Component {
  render() {
    return ( 
      <Router>
        <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          <NavBar/>
          <Container/>

          <div>
            <Route exact path="/about" component={About} />
            <Route exact path="/units" component={Units} />
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
