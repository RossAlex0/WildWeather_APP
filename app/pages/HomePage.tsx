import { Pressable, Text, View } from "react-native";

import storage from "../services/storage";

import stylesHome from "../styles/styleHome";
import { useEffect, useState } from "react";

export default function HomePage() {

    const { loadCity, loadName, clearStorage } = storage;
    const [userCity, setUserCity] = useState<string>("");
    const [userName, setUserName] = useState<string>("");

    useEffect(() => {
        loadCity(setUserCity)
        loadName(setUserName)
    },[]);

    const handleClear = () => {
        console.info("C'est clear")
        clearStorage()
    }

    return(
        <View style={stylesHome.container} >
            <Text>Hello to my HomePage {userName} and my city fav' is {userCity}</Text>
            <Pressable onPress={handleClear} 
            style={{borderColor: '#000', borderWidth: 2, padding: 4}}>
                <Text>Clear</Text>
            </Pressable>
        </View>
        
    )
}