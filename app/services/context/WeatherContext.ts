import { createContext } from "react";
import { WeatherContextTypes } from "../../types/weatherContextTypes";
import { defaultWeather } from "../../types/defaultWeatherState";

const WeatherContext = createContext<WeatherContextTypes>({
  data: defaultWeather,
  setData: () => {},
});

export default WeatherContext;
