import Constants from "expo-constants";
import axios from "axios";
import { getPrivateStorage } from "../storage";

const BACK_URL = Constants.expoConfig!.extra!.BACK_URL;

export async function verifyPassword(password: string) {
  const userPrivateData = await getPrivateStorage();

  const { id, token } = userPrivateData;
  console.info(id);
  const userData = {
    password: password,
    token: token,
  };
  return axios
    .post(`${BACK_URL}/users/password/${id}`, userData, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data)
    .catch((err) => console.error("Wrong password:", err.message));
}

module.exports = { verifyPassword };
