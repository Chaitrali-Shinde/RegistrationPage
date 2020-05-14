import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPg from './components/LoginPg'
import Registration from './components/RegistrationPg';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Route exact path= "/" component= {Registration}/>
        <Route path= "/loginPg" component= {LoginPg}/>
        <Route path= "/registration" component= {Registration}/>
      </div>
    </Router>
  );
}

export default App;