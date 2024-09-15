import Constants from "expo-constants";
import axios from "axios";

const BACK_URL = Constants.expoConfig!.extra!.BACK_URL;

export default async function loadUserCookie(setter: (state: any) => void) {
  axios
    .get(`${BACK_URL}/userCookie`, {
      withCredentials: true,
    })
    .then((res) => setter(res.data))
    .catch((err) => console.error("Error fetching user data:", err.message));
}
