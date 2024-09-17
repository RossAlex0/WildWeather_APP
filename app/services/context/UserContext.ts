import { createContext } from "react";
import { UserContextTypes } from "../../types/userContextTypes";

const UserContext = createContext<UserContextTypes>({
  userInfo: {
    id: "",
    name: "",
    mail: "",
    city: "",
    token: "",
  },
  setUserInfo: () => {},
  setIsSigned: () => {},
});

export default UserContext;
