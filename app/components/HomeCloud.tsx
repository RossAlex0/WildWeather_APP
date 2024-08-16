import { Image, View, Text } from "react-native";
import LottieView from "lottie-react-native";

import { WeatherInterface } from "../types/weatherInterfaces";
import codeWeather from "../services/codeWeather";

export default function HomeCloud({ data } :{data: WeatherInterface}) {
    
    
    return (
        <View >
            <LottieView
            source={codeWeather[data.weather[0].icon]}
            autoPlay
            loop
            style={{height: '40%', width: '40%'}} 
            />
            <Text>{Math.floor(data.main.temp)}°</Text>
            <Text>Real feel {Math.ceil(data.main.feels_like)}°</Text>
        </View>
    )
}