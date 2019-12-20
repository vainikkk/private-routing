import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({children, path}) => {
  const isAuthenticated = localStorage.getItem('token');
  return (
    <div>
      <Route
        path={path}
        render = {() =>  isAuthenticated ? ( children ) : <Redirect to={{ pathname: '/login'}} /> }
      />
    </div>
    
  );
}


export default PrivateRoute;