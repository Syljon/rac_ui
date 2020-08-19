export interface AuthState extends User {}

export interface User {
  id: string | undefined;
  iat: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  role: string | undefined;
}

export const STORE_USER = "STORE_USER";

interface StoreUser {
  type: typeof STORE_USER;
  payload: User;
}

export type AuthActionTypes = StoreUser;
