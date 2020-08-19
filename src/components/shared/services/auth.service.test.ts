import AuthApi from "../../../api/auth";

import jwt_decode from "jwt-decode";
import authService from "./auth.service";
import snackBar from "../helpers/snackbar";
import store from "../../../store";
import { AxiosResponse } from "axios";

jest.mock("../../../store");
jest.mock("jwt-decode", () => () => ({}));

describe("[Auth Service]", () => {
  beforeAll(() => {
    snackBar.toast = jest.fn().mockReturnValue({});
    store.dispatch = jest.fn();
    AuthApi.login = jest
      .fn()
      .mockReturnValue(Promise.resolve({ status: 200 } as AxiosResponse));
  });
  describe("login", () => {
    it("should return true after success ", async () => {
      const reponse = await authService.loginSubmit({
        email: "",
        password: "",
      });
      expect(reponse).toBeTruthy();
    });

    it("should show success notification on status 200", async () => {
      const spy = jest.spyOn(snackBar, "success");
      const reponse = await authService.loginSubmit({
        email: "",
        password: "",
      });
      expect(spy).toBeCalled();
    });

    it("should show error notification on error", async () => {
      AuthApi.login = jest
        .fn()
        .mockImplementationOnce(() =>
          Promise.reject({ response: { data: { message: "" } } })
        );

      const spy = jest.spyOn(snackBar, "error");

      await authService.loginSubmit({
        email: "",
        password: "",
      });

      expect(spy).toBeCalled();
    });
  });
});
