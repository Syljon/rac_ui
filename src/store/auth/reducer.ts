import { AuthState, STORE_USER, AuthActionTypes } from "./types";

const initialState: AuthState = {
  iat: undefined,
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  role: undefined,
};
export default function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case STORE_USER:
      return {
        ...state,
        iat: action.payload.iat,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        role: action.payload.role,
      };
    default:
      return state;
  }
}
