import { useContext, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import { AstroInterface } from "../types/interfaces/astronomyInterfaces";
import WeatherContext from "../services/context/WeatherContext";
import getAstroData from "../services/fetchData/getAstroData";
import { convertUnixToHours } from "../services/convertHour";
import convertDateYMD from "../services/convertDateYMD";

import stylesAstronomy from "../styles/styleAstronomy";

export default function AstronomyPage(){

    const { data } = useContext(WeatherContext);

    const [astroData, setAstroData] = useState<AstroInterface>()

    useEffect(() => {
        const fetchAstroData = async () => {
            try {
                const date = convertDateYMD();
                const newData = await getAstroData(date); 
                setAstroData(newData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAstroData();
    }, []); 

    return(
        <View style={stylesAstronomy.container}>
            <View style={stylesAstronomy.containerSun}>
                        <View style={stylesAstronomy.containSun}>
                            <Image
                            source={require('../../assets/imagesAstro/sun.png')}
                            style={stylesAstronomy.imageSun}
                            />
                            <View style={stylesAstronomy.containerTextSun}>
                                <Text style={stylesAstronomy.textTimeSun}>
                                    {data ? convertUnixToHours(data.sys.sunrise, data.sys.country): '07:39'}
                                </Text>
                                <Text style={stylesAstronomy.textSun}>Sunrise</Text>
                            </View>
                        </View>
                        <View style={stylesAstronomy.containSun}>
                            <Image
                            source={require('../../assets/imagesAstro/moon.png')}
                            style={stylesAstronomy.imageSun}
                            />
                            <View style={stylesAstronomy.containerTextSun}>
                                <Text style={stylesAstronomy.textTimeSun}>
                                    {data ? convertUnixToHours(data.sys.sunrise, data.sys.country) : '20:46'}
                                </Text>
                                <Text style={stylesAstronomy.textSun}>Sunset</Text>
                            </View>
                        </View>
            </View>
            <View>

            </View>
        </View>
    )
}