import React from 'react'
import { connect } from 'react-redux'

const Public = () => {
  return (
    <div>
        <h1>This is public page</h1>  
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data : state.isLoggedin
  }
}

export default connect(mapStateToProps)(Public);