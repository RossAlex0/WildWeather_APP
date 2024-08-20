import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { ForecastInterfaces } from "../types/forecastInterfaces";
import { WeatherInterface } from "../types/weatherInterfaces";
import { convertDateHours, convertHourToAPMArray } from "../services/convertHour";

import stylesHomeChart from "../styles/styleHomeChart";


export default function HomeChart({ dataForecast, data } : { dataForecast: ForecastInterfaces[], data: WeatherInterface}) {
 
    const labels: string[] = dataForecast.map(forecast => `${convertDateHours(forecast.dt_txt, data.sys.country)}h`).slice(0, -2);
    const labelsAMPM: string[] = convertHourToAPMArray(labels);
    const humidityData: number[] = dataForecast.map(forecast => (forecast.main.humidity)).slice(0, -2);
    const screenWidth = Dimensions.get('window').width + 4 ;

    return (
        <View>
          {humidityData && data && (
            <>
              <Text style={stylesHomeChart.title}>Humidity Analysis :</Text>
              <View style={stylesHomeChart.container}>
                <LineChart
                  data={{
                    labels: labelsAMPM, 
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
                  chartConfig={{
                    backgroundGradientFrom: '#F1F8FF',
                    backgroundGradientFromOpacity: 1,
                    backgroundGradientTo: '#F1F8FF',
                    backgroundGradientToOpacity: 1,
                    fillShadowGradientFrom: '#0E0C5E',
                    fillShadowGradientFromOpacity: 0.6,
                    fillShadowGradientFromOffset: 0.3,
                    fillShadowGradientTo: '#F1F8FF',
                    fillShadowGradientToOpacity: 0.4,
                    fillShadowGradientToOffset: 0.86,
                    decimalPlaces: 0,
                    color: (opacity = 6) => `rgba(14, 12, 94, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(14, 12, 94, ${opacity})`,
                    
                    propsForBackgroundLines: {
                      strokeDasharray: '', 
                      stroke: 'transparent', 
                    },
                    propsForDots: {
                      r: '5',
                      strokeWidth: 4,
                      stroke: '#0E0C5E',
                      fill: `#D5E8FF`
                    },
                  }}
                  renderDotContent={({ x, y, index }) => (
                      <Text
                        key={index} 
                        style={{
                          position: 'absolute',
                          top: y - 32,
                          left: x - 12,
                          color: '#0E0C5E',
                          fontSize: 14,
                          fontWeight: 'bold',
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
  