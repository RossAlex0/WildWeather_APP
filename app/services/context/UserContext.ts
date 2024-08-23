import { createContext } from "react";
import { UserContextTypes } from "../../types/userContextTypes";

const UserContext = createContext<UserContextTypes>({
    userName: "",
    setUserName: () => {},
    userCity: "",
    setUserCity: () => {}
  });

export default UserContext;