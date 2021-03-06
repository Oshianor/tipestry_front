const initialstate = {
  topics: [],
  user: {},
  token: "",
  siteTopic: {},
  profile: {},
  favourite: [],
  followers: [],
  following: [],
  comment: [],
  site: [],
  history: [],
  trends: [],
  leaderboard: [],
  popular: [],
  type: "hot",
  pageNumber: 2,
  warning: false
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case "X_AUTH_TOKEN":
      return Object.assign({}, state, {
        token: action.payload
      });
    case "LOGIN_WARNING":
      return Object.assign({}, state, {
        warning: action.payload
      });
    case "INCREASE_PAGE_NUMBER":
      return Object.assign({}, state, {
        pageNumber: action.payload
      });
    case "SORT_TYPE":
      return Object.assign({}, state, {
        type: action.payload
      });
    case "USER_DATA":
      return Object.assign({}, state, {
        user: action.payload
      });
    case "GET_SITE_TOPICS_LIST":
      return Object.assign({}, state, {
        site: action.payload
      });
    case "GET_TOPICS":
      return Object.assign({}, state, {
        topics: action.payload
      });
    case "GET_SITE_TOPIC":
      return Object.assign({}, state, {
        siteTopic: action.payload
      });
    case "GET_PROFILE":
      return Object.assign({}, state, {
        profile: action.payload
      });
    case "GET_PROFILE_FAVOURITE":
      return Object.assign({}, state, {
        favourite: action.payload
      });
    case "GET_PROFILE_COMMENT":
      return Object.assign({}, state, {
        comment: action.payload
      });
    case "GET_PROFILE_FOLLOWERS":
      return Object.assign({}, state, {
        followers: action.payload
      });
    case "GET_PROFILE_FOLLOWING":
      return Object.assign({}, state, {
        following: action.payload
      });
    case "GET_TIP_HISTORY":
      return Object.assign({}, state, {
        history: action.payload
      });
    case "GET_TRENDS":
      return Object.assign({}, state, {
        trends: action.payload
      });
    case "GET_LEADER_BOARD":
      return Object.assign({}, state, {
        leaderboard: action.payload
      });
    case "GET_POPULAR":
      return Object.assign({}, state, {
        popular: action.payload
      });
    default:
      return state;
  }
}