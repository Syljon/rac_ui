import reducer from "../reducer";
import * as types from "../types";
import { AuthActionTypes } from "../types";

describe("todos reducer", () => {
  const mockState = {
    iat: undefined,
    id: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    role: undefined,
  };
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as AuthActionTypes)).toEqual({ ...mockState });
  });
});
