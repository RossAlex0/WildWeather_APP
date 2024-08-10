import { Pressable, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

import HomeHeader from "../components/HomeHeader";
import storage from "../services/storage";

import stylesHome from "../styles/styleHome";



export default function HomePage() {

    const { loadCity, clearStorage } = storage;
    const [userCity, setUserCity] = useState<string>("");

    useEffect(() => {
        loadCity(setUserCity)
    },[]);

    const handleClear = () => {
        console.info("C'est clear")
        clearStorage()
    }
    const [inputSearchValue, setInputSearchValue] = useState("")
    const handleSubmit = () =>  {
        console.info(inputSearchValue)
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
        <Pressable onPress={handleClear} 
        style={{borderColor: '#000', borderWidth: 2, padding: 4}}>
            <Text>Clear</Text>
        </Pressable>
    </LinearGradient>
        
        
    )
}