import { createContext } from "react";
import { WeatherInterface } from "../../types/weatherInterfaces";
import { defaultWeather } from "../../types/defaultWeatherInterfaces";

const WeatherContext = createContext<WeatherInterface>(defaultWeather);

export default WeatherContext;