import { Text, TextInput, View, Pressable } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";
import MapView,{ Marker, Callout } from "react-native-maps";
import { useContext } from "react";

import WeatherContext from "../../services/context/WeatherContext";
import dataCodeCountry from "../../services/data/dataCodeCountry.json";
import cityFromArrondissement from "../../services/transformCityName";

import stylesLocalisation from "../../styles/styleSettingsScreen/styleLocalisation";


export default function Localisation(){

    const { data, setData } = useContext(WeatherContext);

    const codeCountry: Record<string, string> = dataCodeCountry;

    let lat = data.coord.lat;
    let lon = data.coord.lon;

    return(
        <View style={stylesLocalisation.container}>
            <View style={stylesLocalisation.sectionText}>
                <Text style={stylesLocalisation.text}>
                The selected city will be displayed by default when you open your space.
                </Text>
            </View>
            <View style={stylesLocalisation.sectionInput}>
                <Icon name="search" size={31} color="#0E0C5E" style={stylesLocalisation.searchIcon}/>
                <TextInput 
                placeholder="Search for a city"
                returnKeyType="search"
                style={stylesLocalisation.input}/>
                <Pressable style={stylesLocalisation.geoloc}>
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
        </View>
    )
}