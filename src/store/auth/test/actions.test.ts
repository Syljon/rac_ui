import * as actions from "../actions";
import * as types from "../types";

describe("[Auth Actions]", () => {
  it("should create an action to store user", () => {
    const user: types.User = {
      id: "",
      iat: 0,
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    };
    const expectedAction = {
      type: types.STORE_USER,
      payload: user,
    };
    expect(actions.storeUser(user)).toEqual(expectedAction);
  });
});
