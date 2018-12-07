const initialstate = {
  user: {}
}
export default (state = initialstate, action) => {
  switch (action.type) {
    case "USER_DATA":
      return Object.assign({}, state, {
        user: user.payload
      });
    default:
      return state
  }
}