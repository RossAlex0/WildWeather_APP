import { Text, View } from "react-native";
import { WeatherInterface } from "../types/weatherInterfaces";

import dataCodeCountry from "../services/data/dataCodeCountry.json";

import stylesHomeCity from "../styles/styleHomeCity";

export default function HomeCitySentences({ data } :{data: WeatherInterface}){

    const cityFromArrondissement = (cityName : string) => {
        const deleteSpeChart = cityName.replace(/'/g, " ");
        const breakSentence = deleteSpeChart.split(" ");
    
        return breakSentence.includes("Arrondissement") ? breakSentence.slice(2).join(" ") : cityName;
      };

      const codeCountry: Record<string, string> = dataCodeCountry;
    
    return (
        <>
            <View>
                <Text style={stylesHomeCity.city}>{cityFromArrondissement(data.name)}</Text>
                <Text style={stylesHomeCity.country}>{codeCountry[data.sys.country]}</Text>
            </View>
            <View style={stylesHomeCity.conatainerSentences}>
                <Text style={stylesHomeCity.sentences}>It's 10 AM, and the weather isn't very nice today. Bring an umbrella if you go out.</Text>
            </View>
        </>
    )
}