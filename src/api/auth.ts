import axios from ".";

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
