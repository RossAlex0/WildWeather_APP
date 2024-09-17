import Constants from "expo-constants";
import axios from "axios";

const BACK_URL = Constants.expoConfig!.extra!.BACK_URL;

interface LoginResponse {
  id: string;
  name: string;
  mail: string;
  city: string;
  token: string;
}

export default async function login(
  mail: string,
  password: string
): Promise<LoginResponse> {
  const user = { mail, password };
  return axios
    .post(`${BACK_URL}/login`, user)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw err;
    });
}
