import axios from "axios";
import Constants from 'expo-constants';

const API_KEY = Constants.expoConfig!.extra!.API_KEY;

export default function getForecast(city : string){
    return axios
    .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=9&appid=${API_KEY}`)
    .then((res) => res.data.list)
    .catch((err) => console.error(err))
}