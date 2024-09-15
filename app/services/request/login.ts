import Constants from "expo-constants";
import axios from "axios";

const BACK_URL = Constants.expoConfig!.extra!.BACK_URL;

export default async function login(mail: string, password: string) {
  const user = { mail: mail, password: password };
  axios
    .post(`${BACK_URL}/login`, user)
    .then((res) => console.info(res.data))
    .catch((err) => console.error(err.message));
}
