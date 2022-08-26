import React from 'react';
//import './App.css';
import Login from '../component/Login'
import Registration from '../component/Registration'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import '../component/Login.css'

function Nav() {
  return (
  
      <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              It-Technology
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
        <div className="inner">
            <Switch>
              <Route exact path="/" ><Login/></Route>
              <Route path="/sign-in" ><Login/></Route>
              <Route path="/sign-up" ><Registration/></Route>
            </Switch>
            </div>
         
        </div>
      </div>
    </Router>
  );
}

export default Nav;
