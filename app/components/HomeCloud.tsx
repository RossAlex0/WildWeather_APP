import { View, Text, Platform } from "react-native";
import { useContext } from "react";
import LottieView from "lottie-react-native";

import WeatherContext from "../services/context/WeatherContext";
import dataCodeWeather from "../services/data/dataCodeWeather";

import stylesHomeCloud from "../styles/styleHomeCloud";


export default function HomeCloud() {
    
    const { data } = useContext(WeatherContext);
   
    return (
        <View style={stylesHomeCloud.container}>
            <LottieView
            source={dataCodeWeather[data.weather[0].icon]}
            autoPlay
            loop
            style={stylesHomeCloud.lottie} 
            />
            <View style={stylesHomeCloud.containerTexte}>
                <Text 
                style={Platform.OS === "android" 
                ? stylesHomeCloud.tempTexteAndroid
                : stylesHomeCloud.tempTexteIos}
                >
                    {Math.floor(data.main.temp)}°
                </Text>
                <Text style={stylesHomeCloud.feelTexte}>Real feel {Math.ceil(data.main.feels_like)}°</Text>
            </View>
        </View>
    )
}