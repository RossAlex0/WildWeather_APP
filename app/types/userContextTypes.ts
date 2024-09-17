export interface UserInfo {
  id: string;
  name: string;
  mail: string;
  city: string;
  token: string;
}

export interface UserContextTypes {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
  setIsSigned: (isSigned: boolean) => void;
}
