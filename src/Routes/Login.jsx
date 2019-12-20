import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

const Login = (props) => {
  
  const [ data, setData ] = useState(false)

  const handleLogin = () =>  {
    localStorage.setItem('token', "@gavd217627ghGsvga")
    setData(true);
    props.history.push({
      pathname: '/protected',
      state: { detail: data }
    })
  }
  return (
    <div>
      {console.log("login page state : ", data)}
        <h1>This is Login page</h1>
        <button onClick={handleLogin} className='btn'>Login</button>
    </div>
  );
}

export default withRouter(Login);
