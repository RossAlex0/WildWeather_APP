import { View, Text, Dimensions } from "react-native";
import { useContext } from "react";
import { LineChart } from "react-native-chart-kit";

import { ForecastInterfaces } from "../types/interfaces/forecastInterfaces";

import { convertDateHours, convertHourToAPMArray } from "../services/convertHour";
import WeatherContext from "../services/context/WeatherContext";

import stylesHomeChart from "../styles/styleHomeChart";
import chartConfig from "../styles/styleChartConfig";

export default function HomeChart({ dataForecast} : { dataForecast: ForecastInterfaces[]}) {

    const { data } = useContext(WeatherContext);
 
    const labels: string[] = dataForecast.map(forecast => `${convertDateHours(forecast.dt_txt, data.sys.country)}:00`).slice(0, -2);
    const labelsAMPM: string[] = convertHourToAPMArray(labels);
    const humidityData: number[] = dataForecast.map(forecast => (forecast.main.humidity)).slice(0, -2);
    const screenWidth = Dimensions.get('window').width + 4 ;

    return (
        <View>
          {humidityData && (
            <>
              <Text style={stylesHomeChart.title}>Humidity Analysis :</Text>
              <View style={stylesHomeChart.container}>
                <LineChart
                  data={{
                    labels: labels, 
                    datasets: [
                      { 
                        data: humidityData,
                        color: (opacity = 4) => `rgba(14, 12, 94, ${opacity * 10})`,
                        strokeWidth: 6, 
                      },
                    ],
                  }}
                  width={screenWidth}
                  height={160}
                  withHorizontalLabels={false}
                  chartConfig={chartConfig}
                  renderDotContent={({ x, y, index }) => (
                      <Text
                        key={index} 
                        style={{
                          position: 'absolute',
                          top: y - 32,
                          left: x - 12,
                          color: '#0E0C5E',
                          fontSize: 14,
                          fontWeight: 'bold'
                        }}
                      >
                        {humidityData[index]}%
                      </Text>
                    
                  )}
                  withInnerLines={false} 
                  bezier
                  style={{
                    marginVertical: 8,
                    marginLeft: -38,
                    borderRadius: 18,
                  }}
                />
              </View>
            </>
          )}
        </View>
      );
    };
  