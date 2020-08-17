import { login } from "../../../api/auth";
import { ILogin } from "../interfaces/Login";
import Snackbar from "../helpers/snackbar";

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
