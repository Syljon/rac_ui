import AuthApi from "../../../api/auth";
import Snackbar from "../helpers/snackbar";
import ILogin from "../interfaces/Login";
import jwt_decode from "jwt-decode";
import ISetPassword from "../interfaces/SetPassword";
import { User } from "../../../store/auth/types";
import * as AuthActions from "../../../store/auth/actions";
import store from "../../../store";
import axios from "../../../api/index";

async function loginSubmit({ email, password }: ILogin): Promise<boolean> {
  try {
    const response = await AuthApi.login({ email: email, password: password });

    if (response.status === 200) {
      axios.defaults.headers.common["Authorization"] = response.data;
      const user: User = jwt_decode(response.data);
      store.dispatch(AuthActions.storeUser(user));
      Snackbar.success("Login successful");
      return true;
    } else {
      Snackbar.warning("Login unsuccessful");
      return false;
    }
  } catch (error) {
    Snackbar.error(error.response.data?.message);
    return false;
  }
}

async function SubmitSetPassword({ token, password, password2 }: ISetPassword) {
  try {
    const response = await AuthApi.setPassword({
      token: token,
      password: password,
      password2: password2,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    Snackbar.error(error.response.data?.message);
    return false;
  }
}

export default {
  loginSubmit,
  SubmitSetPassword,
};
