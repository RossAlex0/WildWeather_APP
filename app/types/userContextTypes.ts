export interface UserInfo {
  id: string;
  name: string;
  mail: string;
  city: string;
  token: string;
}

export interface CreateUser {
  name: string;
  mail: string;
  city: string;
  password: string;
}

export interface UserContextTypes {
  userInfo: UserInfo;
  createUser: CreateUser;
  setCreateUser: (createUser: CreateUser) => void;
  setUserInfo: (userInfo: UserInfo) => void;
  setIsSigned: (isSigned: boolean) => void;
}
