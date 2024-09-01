export interface UserInfo {
  name: string;
  mail: string;
  city: string;
  password: string;
}

export interface UserContextTypes {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void; // Utilisation de UserInfo ici
}
// export interface UserContextTypes{
//     userName: string,
//     setUserName: (userName: string) => void,
//     userCity: string,
//     setUserCity: (userCity: string) => void
//   }