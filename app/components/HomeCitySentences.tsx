import { Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import dataCodeCountry from "../services/data/dataCodeCountry.json";
import dataSentences from "../services/data/dataSentences.json";
import WeatherContext from "../services/context/WeatherContext";
import cityFromArrondissement from "../services/transformCityName";

import stylesHomeCity from "../styles/styleHomeCity";

export default function HomeCitySentences(){

    const { data } = useContext(WeatherContext);

    const codeCountry: Record<string, string> = dataCodeCountry;
    const sentences: Record<string, string[]> = dataSentences;

    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * 3));
  
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