import axios from ".";
import ILogin from "../shared/interfaces/Login";
import ISetPassword from "../shared/interfaces/SetPassword";
import { AxiosResponse } from "axios";

const login = async (body: ILogin) =>
  await axios.post("/auth/login", JSON.stringify(body));

const setPassword = async (
  body: ISetPassword
): Promise<AxiosResponse<{ token: string }>> =>
  await axios.post("/auth/set-password", JSON.stringify(body));

export default {
  login,
  setPassword,
};
