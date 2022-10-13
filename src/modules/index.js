import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import token from "./Global/token";
import loginState from "./Global/loginState";
//watcher saga -> actions -> worker saga
// import loading from "./loading";
import { enableES5 } from "immer";

enableES5();

const rootReducer = combineReducers({
  token,
  loginState,
  // loading,
});

// export default rootReducer;
export default (state, action) =>
  rootReducer(action.type === "USER_LOGOUT" ? undefined : state, action);

//wathcer saga
export function* rootSaga() {
  yield all([]);
}
