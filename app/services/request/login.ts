import Constants from "expo-constants";
import axios from "axios";

const BACK_URL = Constants.expoConfig!.extra!.BACK_URL;

export default async function login(
  mail: string,
  password: string,
  setter: (set: any) => void
) {
  const user = { mail, password };
  axios
    .post(`${BACK_URL}/login`, user)
    .then((res) => setter(res.data))
    .catch((err) => console.error(err.message));
}
