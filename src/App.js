import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import Nav from './component/Nav';
import DashBord from './Dashbordfolder/DashBord'


function App() {
  return (
    <div>

      <Router>
        
        <Switch>
         
          <Route path="/dash"><DashBord /></Route>
        </Switch>
        <Nav />
      </Router>

    </div>
  )
};

export default App;
