import { handleActions, createAction } from "redux-actions";

const SETTOKEN = "token/SETTOKEN";

export const setToken = createAction(SETTOKEN);

const initialState = null;

const token = handleActions(
  {
    [SETTOKEN]: (state, { payload: token }) => token,
  },
  initialState
);

export default token;
