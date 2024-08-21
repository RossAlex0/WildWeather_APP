import { WeatherInterface } from "./interfaces/weatherInterfaces";

export interface WeatherContextTypes{
    data: WeatherInterface;
    setData: React.Dispatch<React.SetStateAction<WeatherInterface>>;
  }