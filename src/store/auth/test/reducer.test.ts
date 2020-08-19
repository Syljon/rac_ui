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

  it("should handle ADD_TODO", () => {
    const payloadMock: types.User = {
      id: "123",
      iat: 123,
      firstName: "Test",
      lastName: "Test",
      email: "test_test@test.com",
      role: "User",
    };

    expect(
      reducer(undefined, {
        type: types.STORE_USER,
        payload: { ...payloadMock },
      })
    ).toEqual({ ...payloadMock });
  });
});
