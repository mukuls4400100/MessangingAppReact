import React from 'react';  
 

import './App.css';  
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login';  

import Signup from './Components/Signup';  

import Dashboard from './Components/Dashboard';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   

function App() {  

  return (  

    <Router>    

      <div className="container">    

        <nav className="navbar navbar-expand-lg navheader">    

          <div className="collapse navbar-collapse" >    

            <ul className="navbar-nav mr-auto">    

              <li className="nav-item">    

                <Link to={'/Login'} className="nav-link">Login</Link>    

              </li>    

              <li className="nav-item">    

                <Link to={'/Signup'} className="nav-link">Sign Up</Link>    

              </li>    

           </ul>    

          </div>    

        </nav> <br />    

        <Switch>    

          <Route exact path='/Login' component={Login} />    

          <Route path='/Signup' component={Signup} />    

       </Switch>    

        <Switch>  

        <Route path='/Dashboard:myKey' component={Dashboard} />    

        </Switch>  

      </div>    

    </Router>   

  );  

}  


export default App;