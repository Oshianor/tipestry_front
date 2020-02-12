const initialstate = {
  open: false,
  image: null,
  type: null,
  topicId: null,
  currentCoin: null,
  topicUserId: null,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case "COIN_GIFT":
      return Object.assign({}, state, {
        open: action.payload.open,
        image: action.payload.image,
        type: action.payload.type,
        topicId: action.payload.topicId,
        currentCoin: action.payload.currentCoin,
        topicUserId: action.payload.topicUserId
      });
    default:
      return state;
  }
}