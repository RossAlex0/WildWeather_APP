import { WeatherInterface } from "./interfaces/weatherInterfaces";

export interface WeatherContextTypes{
    data: WeatherInterface;
    setData: React.Dispatch<React.SetStateAction<WeatherInterface>>;
    setIsSignedIn: React.Dispatch<React.SetStateAction<Boolean>>;
    setUserCity: React.Dispatch<React.SetStateAction<String>>;
  }