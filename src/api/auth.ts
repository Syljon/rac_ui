import axios from ".";
import ILogin from "../components/shared/interfaces/Login";
import ISetPassword from "../components/shared/interfaces/SetPassword";
import { AxiosResponse } from "axios";

export const login = async (body: ILogin) =>
  await axios.post("/auth/login", JSON.stringify(body));

export const setPassword = async (
  body: ISetPassword
): Promise<AxiosResponse<{ token: string }>> =>
  await axios.post("/auth/set-password", JSON.stringify(body));
