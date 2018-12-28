// user auth token
export const getToken = (token) => {
  return {
    type: "X_AUTH_TOKEN",
    payload: token
  }
}



// get the user details
export const getUser = (user) => {
  return {
    type: "USER_DATA",
    payload: user
  }
}

// save topics valuse to the state
export const getTopics = (topic) => {
  return {
    type: "GET_TOPICS",
    payload: topic
  }
}

export const getVotesCount = (comment) => {
  return {
    type: "GET_VOTES_COUNT",
    payload: comment
  }
}

export const getCommentCount = (comment) => {
  return {
    type: "GET_COMMENT_COUNT",
    payload: comment
  }
}