const initialState = {
  orders: [],
  route: [],
  currentOrder: {},
};

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "SET_ROUTE":
      return {
        ...state,
        route: action.payload,
      };
    case "SET_CURRENT_ORDER":
      return {
        ...state,
        currentOrder: action.payload,
      };
    default:
      return state;
  }
}

export default orderReducer;
