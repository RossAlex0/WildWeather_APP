import { WeatherInterface } from "./interfaces/weatherInterfaces";
import { defaultWeather } from "./defaultWeatherState";

export interface WeatherContextTypes{
    data: WeatherInterface;
    setData: (data: typeof defaultWeather) => void;
    setIsSignedIn: (isSignedIn: boolean) => void;
  }