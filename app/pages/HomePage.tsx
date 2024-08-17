import { Pressable, Text, TextInput, View } from "react-native";
import { useEffect, useState, useContext } from "react";
import { MaterialIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

import HomeHeader from "../components/HomeHeader";
import HomeCitySentences from "../components/HomeCitySentences";
import HomeCloud from "../components/HomeCloud";
import HomeStat from "../components/HomeStat";

import storage from "../services/storage";
import getWeather from "../services/getWeather";

import stylesHome from "../styles/styleHome";


export default function HomePage() {
    
    const { clearStorage, loadCity, saveCity } = storage;
    const [userCity, setUserCity] = useState("");
    const [inputSearchValue, setInputSearchValue] = useState("")
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async() => {
          try{
            await loadCity(setUserCity)
            if(userCity){
            const weatherData = await getWeather(userCity)
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
        {data && <HomeCitySentences data={data} />}
        {data && <HomeCloud data={data} />}
        {data && <HomeStat data={data} />}
        <Pressable onPress={handleClear} 
        style={{borderColor: '#000', borderWidth: 2, padding: 4}}>
            <Text>Clear</Text>
        </Pressable>
    </LinearGradient>
        
        
    )
}