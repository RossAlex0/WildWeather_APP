import Constants from "expo-constants";
import axios from "axios";

const BACK_URL = Constants.expoConfig!.extra!.BACK_URL;

export default async function addUser(userInfo: {
  name: string;
  mail: string;
  city: string;
  password: string;
}) {
  return axios
    .post(`${BACK_URL}/users`, userInfo, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      console.log("User created:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error("Error creating user:", err.message);
      return "error";
    });
}
