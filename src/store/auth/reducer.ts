import { AuthState, STORE_USER, AuthActionTypes, REMOVE_USER } from "./types";

const initialState: AuthState = {
  user: undefined,
};
export default function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case STORE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
}
