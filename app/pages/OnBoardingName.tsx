import { useState } from "react";
import { Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";

import storageData from "../services/storage";
import ButtonConfirm from "../components/ButtonConfirm";

import stylesOnBoarding from "../styles/styleOnBoarding";

export default function OnBoardingName({ navigation }:{
    navigation :{ navigate : (screen: string) => void }
}) {

    const { saveName } = storageData;

    const[inputValue, setInputValue] = useState<string>("");

    const handlePressButtonName = () => {
        saveName(inputValue)
        navigation.navigate('OnBoardingCity')
    };

    return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={stylesOnBoarding.global}>
            <View style={stylesOnBoarding.containerName}>
                <View style={stylesOnBoarding.containerTextName}>
                    <Text style={stylesOnBoarding.textNameTitle}>What's your name?</Text>
                    <Text style={stylesOnBoarding.textName}>Let's personalize your expérience.</Text>                               
                </View>
                <View style={stylesOnBoarding.containerInput}>
                    <TextInput 
                    placeholder="Enter your name here"
                    returnKeyType="done"
                    maxLength={15} 
                    onChangeText={(e) => setInputValue(e)}
                    value={inputValue}
                    style={stylesOnBoarding.inputName} />
                </View>
                <View style={stylesOnBoarding.containerButton}>
                    <Pressable  
                    style={({ pressed }) => [
                    stylesOnBoarding.button,
                    { opacity: pressed ? 0.2 : 1}]} 
                    onPress={handlePressButtonName}> 
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
    </KeyboardAvoidingView>
    )
}