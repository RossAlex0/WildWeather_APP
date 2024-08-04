import { Text, View, TextInput, Button, Pressable } from "react-native";
import { useState } from "react";

import ButtonConfirm from "../components/ButtonConfirm";

import stylesOnBoarding from "../styles/styleOnBoarding";

export default function OnBoardingName(){
    const[name, setName] = useState("")
    const[inputValue, setInputValue] = useState("")

    console.info(inputValue)

    return (
        <View style={stylesOnBoarding.global}>
        <View style={stylesOnBoarding.containerName}>
            <View style={stylesOnBoarding.containerTextName}>
                <Text style={stylesOnBoarding.textNameTitle}>What's your name?</Text>
                <Text style={stylesOnBoarding.textName}>Let's personalize your expérience.</Text>                               
            </View>
            <View style={stylesOnBoarding.containerInput}>
                <TextInput 
                placeholder="Enter your name here" 
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
                style={stylesOnBoarding.inputName} />
            </View>
            <View style={stylesOnBoarding.containerButton}>
                <Pressable style={stylesOnBoarding.buttonName}>
                    <ButtonConfirm texte="Confirm" />
                </Pressable>
                <Pressable style={stylesOnBoarding.buttonNameSkip}>                    
                    <Text>Skip</Text>
                </Pressable> 
            </View>
        </View>
        </View>
    )
}