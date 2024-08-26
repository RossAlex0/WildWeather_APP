import { Pressable, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import { useEffect, useState, useContext } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';

import HomeHeader from "../components/HomeHeader";
import HomeCitySentences from "../components/HomeCitySentences";
import HomeCloud from "../components/HomeCloud";
import HomeStat from "../components/HomeStat";
import HomeCarousel from "../components/HomeCarousel";

import storage from "../services/storage";
import getWeather from "../services/fetchData/getWeather";

import stylesHome from "../styles/styleHome";
import WeatherContext from "../services/context/WeatherContext";
import UserContext from "../services/context/UserContext";

export default function HomePage() {

    const { data, setData } = useContext(WeatherContext);
    const { userCity, setUserCity} = useContext(UserContext);
    const { loadCity, saveCity } = storage;

    const [inputSearchValue, setInputSearchValue] = useState("");
    const [messageError, setMessageError] = useState("")

    useEffect(() => {loadCity(setUserCity)},[])
    useEffect(() => {(
        async() => {
            if(userCity){
        getWeather(userCity, setData, setMessageError);
        }})
    ()
    },[userCity])

    const handleSubmit = () =>  {
        setUserCity(inputSearchValue)
        saveCity(inputSearchValue)
        setInputSearchValue("")
    }

    return(
    
        <LinearGradient
        colors={['#D5E8FF', '#FFFFFF']}
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: 1 }}
        >
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={stylesHome.container}>
            <HomeHeader />
            <View style={stylesHome.containerInput}>
                <Icon style={stylesHome.searchIcon} name="search" size={31} color="#0E0C5E"/>
                <TextInput 
                value={inputSearchValue}
                placeholder="Search for a city"
                returnKeyType="search"
                onChangeText={(e) => setInputSearchValue(e)}
                onSubmitEditing={handleSubmit}
                style={stylesHome.input}
                />
            </View>
            { data && messageError === ""
            ?   <>
                    <HomeCitySentences />
                    <HomeCloud />
                    <HomeStat />
                    <HomeCarousel />
                </>
            :   <>
                    <View style={stylesHome.containerError}>
                        <View style={stylesHome.containerTextError}>
                            <Icon name="search-circle-outline" style={stylesHome.iconError}/>
                            <Text style={stylesHome.textError}>{messageError}</Text>
                        </View>
                    </View>
                </>
            }
            </ScrollView> 
        </LinearGradient>
    )
}