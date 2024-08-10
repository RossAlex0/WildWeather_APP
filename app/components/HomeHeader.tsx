import { Text, View, Pressable, Image } from "react-native";
import { useState, useEffect } from "react";

import storage from "../services/storage";
import stylesHome from "../styles/styleHome";

export default function HomeHeader(){

    const { loadName } = storage;
    const [userName, setUserName] = useState<string>("");

    useEffect(() => {
        loadName(setUserName)
    },[]);

    return (
        <View style={stylesHome.header}>
            <Text style={stylesHome.headerTxt}>Hi {userName} !</Text>
            <View style={stylesHome.headerBtn}>
                <Pressable>
                    <Image 
                    source={require('../../assets/imagesBtn/Vector.png')}
                    style={stylesHome.headerImg} />
                </Pressable>
                <Pressable>
                    <Image 
                    source={require('../../assets/imagesBtn/parameter.png')}
                    style={stylesHome.headerImg} />
                </Pressable>
            </View>
        </View>
    )
}