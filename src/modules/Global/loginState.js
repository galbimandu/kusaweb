import { handleActions, createAction } from "redux-actions";

const TOGGLE = "loginState/TOGGLE";

export const changeLoginState = createAction(TOGGLE);

const initialState = false;

const loginState = handleActions(
  {
    [TOGGLE]: (state, { payload: bool }) => bool,
  },
  initialState
);

export default loginState;
