export interface AuthState {
  user: User | undefined;
}

export interface User {
  id: string;
  iat: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export const STORE_USER = "STORE_USER";
export const REMOVE_USER = "REMOVE_USER";

interface StoreUser {
  type: typeof STORE_USER;
  payload: User;
}
interface RemoveUser {
  type: typeof REMOVE_USER;
}
export type AuthActionTypes = StoreUser | RemoveUser;
