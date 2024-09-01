import { Image, Text, View} from "react-native";
import { useContext } from "react";

import UserContext from "../services/context/UserContext";
import WeatherContext from "../services/context/WeatherContext";

import stylesHome from "../styles/styleHome";

export default function HomeHeader(){

    const { data } = useContext(WeatherContext)
    const { userInfo } = useContext(UserContext)

    return (
        <View style={stylesHome.header}>
            <Text style={stylesHome.headerTxt}>Hi {userInfo.name}, {data && data.weather[0].description} now!</Text>
            <View style={stylesHome.headerLine}/>
        </View>
    )
}