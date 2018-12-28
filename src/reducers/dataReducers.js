const initialstate = {
  topics: [],
  user: {},
  token: ''
}
export default (state = initialstate, action) => {
  switch (action.type) {
    case "X_AUTH_TOKEN":
      return Object.assign({}, state, {
        token: action.payload
      });
    case "USER_DATA":
      return Object.assign({}, state, {
        user: action.payload
      });
    case "GET_TOPICS":
      return Object.assign({}, state, {
        topics: action.payload
      });
    default:
      return state
  }
}