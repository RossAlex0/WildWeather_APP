import { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 


import ButtonConfirm from "../components/ButtonConfirm";

import stylesOnBoarding from "../styles/styleOnBoarding";

export default function OnBoardingName(){
    const[city, setCity] = useState("")
    const[inputValue, setInputValue] = useState("")

    return (
        <View style={stylesOnBoarding.global}>
        <View style={stylesOnBoarding.containerName}>
            <View style={stylesOnBoarding.containerTextCity}>
                <Text style={stylesOnBoarding.textNameTitle}>Thank you, Alex.</Text>
                <Text style={stylesOnBoarding.textNameTitle}>Where do you live?</Text>                               
            </View>
            <View style={stylesOnBoarding.containerInput}>
            <MaterialIcons style={stylesOnBoarding.searchIcon} name="search" size={28} color="#0E0C5E"/>
                <TextInput 
                placeholder="Research" 
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
                style={stylesOnBoarding.inputName} />
            </View>
            <View style={stylesOnBoarding.containerButtonCity}>
                <Pressable style={stylesOnBoarding.buttonName}>
                    <ButtonConfirm texte="Confirm" />
                </Pressable>
            </View>
        </View>
        </View>
    )
}