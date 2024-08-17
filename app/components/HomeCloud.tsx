import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

import { WeatherInterface } from "../types/weatherInterfaces";
import codeWeather from "../services/codeWeather";

import stylesHomeCloud from "../styles/styleHomeCloud";

export default function HomeCloud({ data } :{data: WeatherInterface}) {
    
    
    return (
        <View style={stylesHomeCloud.container}>
            <LottieView
            source={codeWeather[data.weather[0].icon]}
            autoPlay
            loop
            style={stylesHomeCloud.lottie} 
            />
            <View style={stylesHomeCloud.containerTexte}>
                <Text style={stylesHomeCloud.tempTexte}>{Math.floor(data.main.temp)}°</Text>
                <Text style={stylesHomeCloud.feelTexte}>Real feel {Math.ceil(data.main.feels_like)}°</Text>
            </View>
        </View>
    )
}