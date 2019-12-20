import React from 'react'

const Protected = (props) => {
  return (
    <div>
      {console.log(props)}
        <h1>This is Protected page</h1>  
    </div>
  );
}

export default Protected;