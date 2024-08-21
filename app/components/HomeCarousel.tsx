import { Pressable, ScrollView, Text, View, Animated } from "react-native";
import { useEffect, useState, useContext } from "react";
import LottieView from "lottie-react-native";

import HomeChart from "./HomeChart";

import { ForecastInterfaces } from "../types/interfaces/forecastInterfaces";

import { convertDateHours, convertHourToAPM } from "../services/convertHour";
import codeWeather from "../services/codeWeather";
import getForecast from "../services/fetchData/getForecast";
import WeatherContext from "../services/context/WeatherContext";

import stylesHomeCarousel from "../styles/styleCarousel";

export default function HomeCarousel({ userCity } : { userCity : string }){

    const { data } = useContext(WeatherContext);

    const [dataForecast, setDataForecast] = useState<ForecastInterfaces[]>([]);
    const [isPress, setIsPress] = useState<number | null>(null);

    useEffect(() => {(
        async () => {
          const forecast = await getForecast(userCity);
          setDataForecast(forecast);
        })
    ()}, [userCity]);

    return (
      <>
        <View style={stylesHomeCarousel.container}>
          <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          >
            {dataForecast?.map((forecast) => (
              <Pressable 
              key={forecast.dt} 
              style={isPress === forecast.dt ? stylesHomeCarousel.slideVerso : stylesHomeCarousel.slide}
              onPress={() => setIsPress(isPress === forecast.dt ? null : forecast.dt)}
              >
              {isPress === forecast.dt
              ? ( 
                  <>
                    <View style={stylesHomeCarousel.statVerso}>
                      <Text style={stylesHomeCarousel.titleStat}>Humidity</Text>
                      <Text style={stylesHomeCarousel.dataStat}>
                        {forecast.main.humidity}%
                      </Text>
                    </View>
                    <View style={stylesHomeCarousel.statVerso}>
                      <Text style={stylesHomeCarousel.titleStat}>Wind Gust</Text>
                      <Text style={stylesHomeCarousel.dataStat}>
                        {(forecast.wind.gust * 3.6).toFixed(1)}Km/h
                      </Text>
                    </View>
                    <View style={stylesHomeCarousel.statVerso}>
                      <Text style={stylesHomeCarousel.titleStat}>Visibility</Text>
                      <Text style={stylesHomeCarousel.dataStat}>
                        {Math.floor((forecast.visibility) / 1000)}Km
                      </Text>
                    </View>
                  </>
              ):( 
                  <>
                    <Text style={stylesHomeCarousel.hours}>
                      {convertHourToAPM(convertDateHours(forecast.dt_txt, data.sys.country))}
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
                  </>
              )}
              </Pressable>
            ))}
            </ScrollView>
        </View>
          {dataForecast.length > 0 && 
          <HomeChart dataForecast={dataForecast}
        />
        }
      </>
    )
}