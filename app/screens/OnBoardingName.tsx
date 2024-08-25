import { useState } from "react";
import { Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";

import storageData from "../services/storage";
import ButtonGradient from "../components/ButtonGradient";

import stylesOnBoarding from "../styles/styleOnBoarding";

export default function OnBoardingName({ navigation }:{
    navigation :{ navigate : (screen: string) => void }
}) {

    const { saveName, saveMail } = storageData;

    const [focus, setFocus] = useState(false);

    const[inputValueName, setInputValueName] = useState("");
    const[inputValueMail, setInputValueMail] = useState("");

    const handlePressButtonName = () => {
        if(inputValueName.length > 1 && (inputValueMail.length > 6 && inputValueMail.includes("@"))){
        saveName(inputValueName)
        saveMail(inputValueMail)
        navigation.navigate('OnBoardingCity')
        }
    };

    return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : 'height'}>
        <View style={stylesOnBoarding.global}>
            <View style={stylesOnBoarding.containerName}>
                
                <View style={stylesOnBoarding.containerTextName}>
                    <Text style={stylesOnBoarding.textNameTitle}>Make it yours.</Text>     
                </View>
                
                <View style={stylesOnBoarding.containerInput}>
                    <Text style={stylesOnBoarding.textName}>What's your name?</Text> 
                    <TextInput 
                    placeholder="Enter your name here"
                    returnKeyType="done"
                    maxLength={15} 
                    onFocus={() => setFocus(true)}
                    onChangeText={(e) => setInputValueName(e)}
                    onSubmitEditing={() => setFocus(false)}
                    value={inputValueName}
                    style={stylesOnBoarding.inputName} />
                </View>
                <View style={stylesOnBoarding.containerInput}>
                    <Text style={stylesOnBoarding.textName}>What's your mail?</Text> 
                    <TextInput 
                    placeholder="Enter your mail here"
                    returnKeyType="done"
                    maxLength={15} 
                    onChangeText={(e) => setInputValueMail(e)}
                    onFocus={() => setFocus(true)}
                    onSubmitEditing={() => setFocus(false)}
                    value={inputValueMail}
                    style={stylesOnBoarding.inputName} />
                </View>
                { !focus &&
                <View style={stylesOnBoarding.containerButton}>
                    <Pressable  
                    style={({ pressed }) => [
                    stylesOnBoarding.button,
                    { opacity: pressed ? 0.2 : 1}]} 
                    onPress={handlePressButtonName}> 
                        <ButtonGradient texte="Confirm" />
                    </Pressable>
                </View>
                }
            </View>
        </View>
    </KeyboardAvoidingView>
    )
}