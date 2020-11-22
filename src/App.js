import React from 'react';
import 'normalize.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import LogIn from './components/LogIn'
import Register from './components/Register';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navigation />
          <Navbar />
          <Switch>
            <Route path="/rejestracja">
              <Register />
            </Route>
            <Route path="/logowanie">
              <LogIn />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>

    </>
  );
}

export default App;
