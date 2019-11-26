import { QUERIES } from "../actions/queries";
import data from '../config/queries';

const initialState = data;

const queriesReducer = (state = initialState, action) => {
  const nextState = [...state];
  let query = null;
  switch (action.type) {
    case QUERIES.UPDATE_PARAM:
      query = nextState.find(item => item.queryId === action.payload.queryId);
      query.params[action.payload.name] = action.payload.value;
      return nextState;
    case QUERIES.UPDATE_OUTPUT:
      query = nextState.find(item => item.queryId === action.payload.queryId);
      query.output = action.payload.output;
      return nextState;
    default:
      return state;
  }
};

export default queriesReducer;