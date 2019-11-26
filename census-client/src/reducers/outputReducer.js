import { OUTPUT } from "../actions/output";

const initialState = {};

const outputReducer = (state = initialState, action) => {
  switch (action.type) {
    case OUTPUT.UPDATE_OUTPUT:
      return action.payload
    default:
      return state;
  }
};

export default outputReducer;