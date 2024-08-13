import { Text, View } from "react-native";
import { WeatherApiInterface } from "../types/weatherInterfaces";

export default function HomeCitySentences({ data } :{data: WeatherInterface}){
    
    return (
        <>
            <View>
                <Text>{data.name}</Text>
                <Text>{data.sys.country}</Text>
            </View>
            <View>
                <Text>{data.coord.lat}</Text>
            </View>
        </>
    )
}