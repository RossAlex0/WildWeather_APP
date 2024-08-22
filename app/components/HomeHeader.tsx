import { Text, View, Pressable, Image } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, ParamListBase, NavigationProp } from "@react-navigation/native";


import storage from "../services/storage";

import stylesHome from "../styles/styleHome";


export default function HomeHeader(){

    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const { loadName } = storage
    const [userName, setUserName] = useState("")

    useEffect(() => {
        loadName(setUserName)
    })

    return (
        <View style={stylesHome.header}>
            <Text style={stylesHome.headerTxt}>Hi {userName} !</Text>
            <View style={stylesHome.headerBtn}>
                <Pressable onPress={() => navigation.navigate('Celestial Events')}>
                    <Image 
                    source={require('../../assets/imagesBtn/VectorAstro.png')}
                    style={stylesHome.headerImg} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Settings')}>
                    <Image 
                    source={require('../../assets/imagesBtn/parameter.png')}
                    style={stylesHome.headerImg} />
                </Pressable>
            </View>
        </View>
    )
}