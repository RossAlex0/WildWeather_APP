import { Pressable, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import { useEffect, useState, useContext } from "react";
import { MaterialIcons } from '@expo/vector-icons'; 
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

export default function HomePage() {

    const { data, setData } = useContext(WeatherContext);
    
    const { clearStorage, loadCity, saveCity } = storage;
    const [userCity, setUserCity] = useState("");
    const [inputSearchValue, setInputSearchValue] = useState("");
    const [isValidCity, setIsValidCity] = useState(false)

    useEffect(() => {
        const getData = async() => {
          try{
            await loadCity(setUserCity)
            if(userCity){
            const weatherData = await getWeather(userCity)
            if(weatherData)
            setData(weatherData)
            }
          }catch (err){
            console.error(err)
          }
        }
        getData()
    },[userCity]);
    

    const handleClear = () => {
        console.info("Cleaned")
        clearStorage()
    }
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
                <MaterialIcons style={stylesHome.searchIcon} name="search" size={32} color="#0E0C5E"/>
                <TextInput 
                value={inputSearchValue}
                placeholder="Search for a city"
                returnKeyType="search"
                onChangeText={(e) => setInputSearchValue(e)}
                onSubmitEditing={handleSubmit}
                style={stylesHome.input}
                />
            </View>
            { data && 
                <>
                    <HomeCitySentences />
                    <HomeCloud />
                    <HomeStat />
                    <HomeCarousel userCity={userCity}/>
                </>
            }
            <View>
            <Pressable onPress={handleClear} 
            style={{borderColor: '#000', borderWidth: 2, padding: 4, marginBottom:60}}>
                <Text>Clear</Text>
            </Pressable>
            </View>
            </ScrollView> 
        </LinearGradient>
    )
}