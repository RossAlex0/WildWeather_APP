import axios from "axios";
import Constants from 'expo-constants';
import { WeatherInterface } from "../../types/interfaces/weatherInterfaces";
import { defaultWeather } from "../../types/defaultWeatherState";

const API_KEY = Constants.expoConfig!.extra!.API_KEY;

export default function getWeather(
    city : string,
    setData: (data: typeof defaultWeather) => void,
    setMessageError: (messageError: string) => void
    ): void {

    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    
    .then((res) => {
        setData(res.data)
        setMessageError("")
    })

    .catch((err) => {
        if(err.response.status === 404){
            setMessageError("OOPS!!!\n\n Sorry, but this city does not exist.\n Please enter a new city.")
        }else if(err.response.status === 400 || 
           err.response.status === 401 ||
           err.response.status === 500){
            setMessageError("We encountered a problem while processing your API request.")
        }else{
            setMessageError("An unexpected error occurred.\n Please try again later.");
        }
    })
}