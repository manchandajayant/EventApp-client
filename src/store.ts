import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./Reducers/rootReducer";
import ReduxThunk from "redux-thunk";
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));
const store = createStore(reducer, enhancer);
export default store;
