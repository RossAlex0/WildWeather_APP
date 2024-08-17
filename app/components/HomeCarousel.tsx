import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

import { WeatherInterface } from "../types/weatherInterfaces";
import { ForecastInterfaces } from "../types/forecastInterfaces";

import codeWeather from "../services/codeWeather";
import getForecast from "../services/fetchData/getForecast";
import convertHours from "../services/convertHour";

import stylesHomeCarousel from "../styles/styleCarousel";

export default function HomeCarousel({ data, userCity } :{ data: WeatherInterface, userCity : string }){

    const [dataForecast, setDataForecast] = useState<ForecastInterfaces[]>([]);

    useEffect(() => {(
        async () => {
          const forecast = await getForecast(userCity);
          setDataForecast(forecast);
        })
    ()}, [userCity]);

    return (
        <View style={stylesHomeCarousel.container}>
          <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          >
            {dataForecast.map((forecast) => (
                <View key={forecast.dt} style={stylesHomeCarousel.slide}>
                  <Text style={stylesHomeCarousel.hours}>
                    {convertHours(forecast.dt_txt, data.sys.country)}:00
                  </Text>
                  <LottieView
                    source={codeWeather[forecast.weather[0].icon]}
                    autoPlay
                    loop
                    style={stylesHomeCarousel.lottie}
                  />
                  <Text style={stylesHomeCarousel.temperature}>
                    {Math.floor(forecast.main.temp)}°
                  </Text>
              </View>
            ))}
            </ScrollView>
        </View>
    )
}