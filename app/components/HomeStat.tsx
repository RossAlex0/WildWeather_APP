import { View, Text } from "react-native";

import { WeatherInterface } from "../types/weatherInterfaces";
import stylesHomeStat from "../styles/styleHomeStat";

export default function HomeStat({ data } :{data: WeatherInterface}){
    return (
        <View style={stylesHomeStat.container}>
            <View style={[stylesHomeStat.statContain, stylesHomeStat.borderBottomLeft, stylesHomeStat.borderRight]}>
                <Text style={stylesHomeStat.statTexteStart}>
                    Humidity
                </Text>
                <Text style={stylesHomeStat.statTexteEnd}>
                    {data.main.humidity}%
                </Text>
            </View>
            <View style={[stylesHomeStat.statContain, stylesHomeStat.borderBottomRight]}>
                
                <Text style={stylesHomeStat.statTexteStart}>
                    Pressure
                </Text>
                <Text style={stylesHomeStat.statTexteEnd}>
                    {Math.floor(data.main.pressure)} hPa
                </Text>
            </View>
            <View style={[stylesHomeStat.statContain, stylesHomeStat.borderRight]}>
                <Text style={stylesHomeStat.statTexteStart}>
                    Wind Direction 
                </Text>
                <Text style={stylesHomeStat.statTexteEnd}>
                    {data.wind.deg}°
                </Text>
            </View>
            <View style={stylesHomeStat.statContain}>
                <Text style={stylesHomeStat.statTexteStart}>
                    Wind Speed
                </Text>
                <Text style={stylesHomeStat.statTexteEnd}>
                    {Math.ceil(data.wind.speed * 3.6)} Km/h
                </Text>
            </View>
        </View>
    )
}