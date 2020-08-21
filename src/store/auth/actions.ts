import { User, STORE_USER, AuthActionTypes, REMOVE_USER } from "./types";

export function storeUser(user: User): AuthActionTypes {
  return {
    type: STORE_USER,
    payload: user,
  };
}

export function removeUser(): AuthActionTypes {
  return {
    type: REMOVE_USER,
  };
}
