import Constants from "expo-constants";
import axios from "axios";
import { getPrivateStorage } from "../storage";

const BACK_URL = Constants.expoConfig!.extra!.BACK_URL;

export async function updateUserCity(city: string) {
  const userPrivateData = await getPrivateStorage();

  const { id, token } = userPrivateData;
  const userData = {
    city: city,
    token: token,
  };
  axios
    .put(`${BACK_URL}/users/${id}`, userData, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => console.log("User updated:", res.data))
    .catch((err) => console.error("Error updating user:", err.message));
}

export async function updateUserName(name: string) {
  const userPrivateData = await getPrivateStorage();
  const { id, token } = userPrivateData;
  const userData = {
    name: name,
    token: token,
  };
  axios
    .put(`${BACK_URL}/users/${id}`, userData, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => console.log("User updated:", res.data))
    .catch((err) => console.error("Error updating user:", err.message));
}

export async function updateUserMail(mail: string) {
  const userPrivateData = await getPrivateStorage();
  const { id, token } = userPrivateData;
  const userData = {
    mail: mail,
    token: token,
  };
  axios
    .put(`${BACK_URL}/users/${id}`, userData, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => console.log("User updated:", res.data))
    .catch((err) => console.error("Error updating user:", err.message));
}
