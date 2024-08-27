import { Text, TextInput, View, Pressable } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";
import MapView,{ Marker, Callout } from "react-native-maps";
import { useContext, useEffect, useState } from "react";

import WeatherContext from "../../services/context/WeatherContext";
import dataCodeCountry from "../../services/data/dataCodeCountry.json";
import cityFromArrondissement from "../../services/transformCityName";
import getWeather from "../../services/fetchData/getWeather";
import getWeatherWithLoc from "../../services/fetchData/getWeatherWithLoc";
import { locationInterface } from "../../types/interfaces/locationInterfaces";
import stylesLocalisation from "../../styles/styleSettingsScreen/styleLocalisation";
import requestLocation from "../../services/functionScreen/Location/requestLocation";

import ButtonGradient from "../../components/ButtonGradient";
import ConfirmBox from "../../components/ConfirmBox";


export default function Localisation(){

    const { data, setData } = useContext(WeatherContext);
    const codeCountry: Record<string, string> = dataCodeCountry;

    let lat = data.coord.lat;
    let lon = data.coord.lon;

    const [messageError, setMessageError] = useState("");
    const [errorMsgLocation, setErrorMsgLocation] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false)

    const [location, setLocation] = useState<locationInterface | null>(null);

    const [inputValue, setInputValue] = useState("");
    const [newCity, setNewCity] = useState("");

    const handleConfirm = () => {
        getWeather(newCity, setData, setMessageError);
        setInputValue("");
        setNewCity("");
        setIsConfirmed(true);
          setTimeout(() => {
            setIsConfirmed(false);
          }, 2500);
    }
    const handleGeoLoc = () => {
      if(location){
      getWeatherWithLoc(`${location.coords.latitude}`, `${location.coords.longitude}`, setData, setMessageError);
      setIsConfirmed(true);
          setTimeout(() => {
            setIsConfirmed(false);
          }, 2500);
      }
    }

    useEffect(() => {
      requestLocation(setErrorMsgLocation, setLocation)
    }, []);

    return(
        <View style={stylesLocalisation.container}>
            
            <View style={stylesLocalisation.sectionText}>
            { isConfirmed &&
                <ConfirmBox text="Your new localisation is confirmed!" />
            }
                <Text style={stylesLocalisation.text}>
                The selected city will be displayed by default when you open your space.
                </Text>
            </View>
            <View style={stylesLocalisation.sectionInput}>
                <Icon name="search" size={31} color="#0E0C5E" style={stylesLocalisation.searchIcon}/>
                <TextInput 
                value={inputValue}
                placeholder="Search for a city"
                returnKeyType="search"
                onChangeText={(e) => setInputValue(e)}
                onSubmitEditing={() => setNewCity(inputValue)}
                style={stylesLocalisation.input}/>
                <Pressable style={stylesLocalisation.geoloc} onPress={handleGeoLoc}>
                    <Icon name="locate" size={31} color="#0E0C5E"/>
                    <Text style={stylesLocalisation.textGeoloc}>Click here to use your location</Text>
                </Pressable>
            </View>
            <View style={stylesLocalisation.sectionMap}>
                <MapView
                style={stylesLocalisation.map}
                region={{
                  latitude: lat,
                  longitude: lon,
                  latitudeDelta: 0.8,
                  longitudeDelta: 0.8,
                }}
              >
                <Marker coordinate={{ latitude: lat, longitude: lon }}>
                    <Callout tooltip>
                        <View style={stylesLocalisation.calloutContainer}>
                          <Text style={stylesLocalisation.calloutTitle}>{cityFromArrondissement(data.name)}</Text>
                          <Text style={stylesLocalisation.calloutDescription}>{codeCountry[data.sys.country]}</Text>
                          <View style={stylesLocalisation.calloutLine} />
                          <Text style={stylesLocalisation.calloutDescription}>Lat: {lat} | Lon: {lon}</Text>
                          <Text style={stylesLocalisation.calloutDescription}>Weather: "{data.weather[0].description}"</Text>
                        </View>
                    </Callout>
                </Marker>
              </MapView>
            </View>
            {newCity !=="" &&
            <Pressable onPress={handleConfirm} style={stylesLocalisation.confirm}>
                <ButtonGradient texte="Confirm" />
            </Pressable>
            }
        </View>
    )
}