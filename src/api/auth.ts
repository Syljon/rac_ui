import axios from ".";
import history from "../components/shared/helpers/history";

export interface IPostPasswordBody {
  token: string;
  password: string;
  password2: string;
}
export interface ISetPassword extends IPostPasswordBody {
  cb: (isSubmitting: boolean) => void;
}

export interface IPostLoginBody {
  email: string;
  password: string;
}

export const login = async (body: IPostLoginBody) =>
  await axios.post("/auth/login", JSON.stringify(body));

export async function postPassword(body: IPostPasswordBody) {
  try {
    const results = await axios.post(
      "/auth/set-password",
      JSON.stringify(body)
    );
    return results;
  } catch (error) {
    return error.response;
  }
}
export async function setPassword({
  token,
  password,
  password2,
  cb,
}: ISetPassword) {
  try {
    cb(true);
    const response = await postPassword({
      token: token,
      password: password,
      password2: password2,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.token);
      history.push("login");
    } else {
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  } finally {
    cb(false);
  }
}
