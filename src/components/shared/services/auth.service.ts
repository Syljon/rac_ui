import { login, setPassword } from "../../../api/auth";
import Snackbar from "../helpers/snackbar";
import ILogin from "../interfaces/Login";
import ISetPassword from "../interfaces/SetPassword";

export async function loginSubmit({
  email,
  password,
}: ILogin): Promise<boolean> {
  try {
    const response = await login({ email: email, password: password });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    Snackbar.error(error.response.data?.message);
    return false;
  }
}

export async function SubmitSetPassword({
  token,
  password,
  password2,
}: ISetPassword) {
  try {
    const response = await setPassword({
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
