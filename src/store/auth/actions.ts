import { User, STORE_USER, AuthActionTypes } from "./types";

export function storeUser(user: User): AuthActionTypes {
  return {
    type: STORE_USER,
    payload: user,
  };
}
