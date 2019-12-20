import React from 'react';
import './App.css';
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import Public from './Routes/Public'
import Login from './Routes/Login';
import Protected from './Routes/Protected';
import PrivateRoute from './Routes/PrivateRoute'
import Logout from './Routes/Logout';

const App = () => {
  return (
    <div className="App">
      <div className='navigation'>
        <div className="nav">
          <Link to='/public'>Public Page</Link>
        </div>
        <div className="nav">
          <Link to='/Protected'>Protected Page</Link>
        </div>
        {localStorage.getItem('token') ? ( 
          <div className="nav-right">
            <Link to='/logout'>Logout</Link>
          </div>
          ) : (
          <div className="nav-right">
            <Link to='/login'>Login</Link>
          </div>
          ) 
        }
      </div>
      <div className="body">
        <Switch>
            <Route path='/public' component={Public} />
            <PrivateRoute path='/protected' ><Protected /></PrivateRoute>
            <Route path='/login' component={Login} />
            <Route path='/logout'>{Logout}</Route>
        </Switch>        
      </div>
    </div>
  );
}

export default withRouter(App);
