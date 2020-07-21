import axios from ".";
import history from "../components/shared/helpers/history";

export interface ISetPaswordPost {
  token: string;
  password: string;
  password2: string;
}

export async function postPassword(body: ISetPaswordPost) {
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

export async function setPassword(
  form: ISetPaswordPost,
  cb: (isSubmitting: boolean) => void
) {
  try {
    cb(true);
    const response = await postPassword({
      token: form.token,
      password: form.password,
      password2: form.password2,
    });
    if (response.status === 200) {
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
