import { Text, View } from "react-native";
import { WeatherInterface } from "../types/weatherInterfaces";

import dataCodeCountry from "../services/data/dataCodeCountry.json";
import dataSentences from "../services/data/dataSentences.json";

import stylesHomeCity from "../styles/styleHomeCity";
import { useEffect, useState } from "react";

export default function HomeCitySentences({ data } :{data: WeatherInterface}){
    const codeCountry: Record<string, string> = dataCodeCountry;
    const sentences: Record<string, string[]> = dataSentences;

    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * 3));

    const cityFromArrondissement = (cityName : string) => {
        const deleteSpeChart = cityName.replace(/'/g, " ");
        const breakSentence = deleteSpeChart.split(" ");
    
        return breakSentence.includes("Arrondissement") ? breakSentence.slice(2).join(" ") : cityName;
    };
  
    useEffect(() => {
        setRandomIndex(Math.floor(Math.random() * 3));
    }, [data]);  

    return (
        <View style={stylesHomeCity.container}>
            <View style={stylesHomeCity.container}>
                <Text style={stylesHomeCity.city}>{cityFromArrondissement(data.name)}</Text>
                <Text style={stylesHomeCity.country}>{codeCountry[data.sys.country]}</Text>
            </View>
            <View style={stylesHomeCity.conatainerSentences}>
                <Text style={stylesHomeCity.sentences}>{sentences[data.weather[0].main][randomIndex]}</Text>
            </View>
        </View>
    )
}