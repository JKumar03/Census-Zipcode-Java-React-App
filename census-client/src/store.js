import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware, logger));

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;