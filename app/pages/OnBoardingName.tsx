import { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";


import ButtonConfirm from "../components/ButtonConfirm";

import stylesOnBoarding from "../styles/styleOnBoarding";

export default function OnBoardingName({ navigation }:{
    navigation :{
    navigate : (screen: string) => void
}
}) {
    const[name, setName] = useState("")
    const[inputValue, setInputValue] = useState("")
    // ### Function for save user name ###

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
                    <Pressable  
                    style={({ pressed }) => [
                    stylesOnBoarding.button,
                    { opacity: pressed ? 0.2 : 1}]} 
                    onPress={() => navigation.navigate('OnBoardingCity')}> 
                        <ButtonConfirm texte="Confirm" />
                    </Pressable>
                    <Pressable style={({ pressed }) => [
                         pressed ? stylesOnBoarding.buttonNameSkipPressed : stylesOnBoarding.buttonNameSkip]}
                         onPress={() => navigation.navigate('OnBoardingCity')}>                    
                        <Text style={stylesOnBoarding.buttonSkipText}>Skip</Text>
                    </Pressable> 
                </View>
            </View>
        </View>
    )
}