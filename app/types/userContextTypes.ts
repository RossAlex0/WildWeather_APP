export interface UserInfo {
  id: string;
  name: string;
  mail: string;
  city: string;
  password: string;
}

export interface UserContextTypes {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
  setIsSigned: (isSigned: boolean) => void;
}
