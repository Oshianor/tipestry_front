// user auth token
export const getToken = (token) => {
  return {
    type: "X_AUTH_TOKEN",
    payload: token
  }
}


// topic page number
export const setPageNumber = (num) => {
  return {
    type: "INCREASE_PAGE_NUMBER",
    payload: num
  };
}


// toggle sort by 
export const setType = (token) => {
  return {
    type: "SORT_TYPE",
    payload: token
  }
}



// get topic for a particaular site
export const getSiteTopicList = (arg) => {
  return {
    type: "GET_SITE_TOPICS_LIST",
    payload: arg
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


export const getSiteTopic = (topic) => {
  return {
    type: "GET_SITE_TOPIC",
    payload: topic
  }
}


// profile action setters
export const getProfile = (arg) => {
  return {
    type: "GET_PROFILE",
    payload: arg
  }
}

export const getFavourite = (arg) => {
  
  
  return {
    type: "GET_PROFILE_FAVOURITE",
    payload: arg
  }
}

export const getComment = (arg) => {
  return {
    type: "GET_PROFILE_COMMENT",
    payload: arg
  }
}

export const getFollowers = (arg) => {
  // console.log("followers", arg);
  return {
    type: "GET_PROFILE_FOLLOWERS",
    payload: arg
  }
}

export const getFollowing = (arg) => {
  // console.log("getFollowing", arg);
  return {
    type: "GET_PROFILE_FOLLOWING",
    payload: arg
  }
}


export const getTipHistory = (arg) => {
  // console.log("getFollowing", arg);
  return {
    type: "GET_TIP_HISTORY",
    payload: arg
  }
}

export const getTrends = (arg) => {
  // console.log("getFollowing", arg);
  return {
    type: "GET_TRENDS",
    payload: arg
  }
}

export const getLeaderBoard = (arg) => {
  // console.log("getFollowing", arg);
  return {
    type: "GET_LEADER_BOARD",
    payload: arg
  }
}


export const getPopular = (arg) => {
  return {
    type: "GET_POPULAR",
    payload: arg
  }
}