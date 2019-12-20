import React from 'react';

const Logout = (props) => {
  
  const handleLogin = () =>  {
    localStorage.clear();
    props.history.push('/public')
  }
  
  return (
    <div>
      <button onClick={handleLogin} className="btn">Log Out</button>
    </div>
  );
}
export default Logout;