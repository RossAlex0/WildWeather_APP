import axios from "axios";
import Constants from 'expo-constants';
import { WeatherInterface } from "../../types/interfaces/weatherInterfaces";

const API_KEY = Constants.expoConfig!.extra!.API_KEY;

export default function getWeather(city : string): Promise<WeatherInterface>{
    return axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then((res) => res.data)
    .catch((err) => console.error(err))
}