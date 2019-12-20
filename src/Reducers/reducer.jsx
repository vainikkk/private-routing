const initialState = {
  isLoggedin: false
}

export  const reducer = (state=initialState, action) => {
  switch(action.type){
    case "CHANGE_DATA": 
      return {
        ...state,
        isLoggedin: !state.isLoggedin
      }
      default: 
        return state
  }
}