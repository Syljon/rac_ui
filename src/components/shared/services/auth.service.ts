import AuthApi from "../../../api/auth";
import Snackbar from "../helpers/snackbar";
import ILogin from "../interfaces/Login";
import ISetPassword from "../interfaces/SetPassword";

async function loginSubmit({ email, password }: ILogin): Promise<boolean> {
  try {
    const response = await AuthApi.login({ email: email, password: password });

    if (response.status === 200) {
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
    return error;
  }
}

export default {
  loginSubmit,
  SubmitSetPassword,
};
