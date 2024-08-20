import { useEffect, useState, useRef } from "react";
import { Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform, Animated } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import storageData from "../services/storage";

import ButtonConfirm from "../components/ButtonConfirm";

import stylesOnBoarding from "../styles/styleOnBoarding";

export default function OnBoardingName({ navigation }:{
    navigation :{ navigate : (screen: string) => void }
}) {

    const { saveCity, loadName} = storageData;
    const [warningOpacity] = useState(new Animated.Value(0));

    const[name, setName] = useState<string>("");
    const[inputValue, setInputValue] = useState<string>("");

    const handlePressButtonCity = () => {
        if(inputValue.length > 3){
            saveCity(inputValue)
            navigation.navigate('HomePage')
        }else {
            Animated.timing(warningOpacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();
        }
    };

    useEffect(() => {
        loadName(setName)
    }, []);

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={stylesOnBoarding.global}>
                <View style={stylesOnBoarding.containerName}>
                    <View style={stylesOnBoarding.containerTextCity}>
                        <Text style={stylesOnBoarding.textNameTitle}>
                            {name !== null 
                            ? `Thank you, ${name}.`
                            : 'Thank you.'
                            }                            
                        </Text>
                        <Text style={stylesOnBoarding.textNameTitle}>Where do you live?</Text>                               
                    </View>
                    <View style={stylesOnBoarding.containerInput}>
                    <MaterialIcons style={stylesOnBoarding.searchIcon} name="search" size={28} color="#0E0C5E"/>
                        <TextInput 
                        placeholder="Research"
                        returnKeyType="done" 
                        onChangeText={(e) => setInputValue(e)}
                        value={inputValue}
                        style={stylesOnBoarding.inputCity} />
                    </View>
                    <View style={stylesOnBoarding.containerButtonCity}>
                        <Pressable 
                        style={({ pressed }) => [
                        stylesOnBoarding.button,
                        { opacity: pressed ? 0.2 : 1}]}
                        onPress={handlePressButtonCity} 
                        >
                            <ButtonConfirm texte="Confirm" />
                        </Pressable>
                        <Animated.Text 
                        style={[stylesOnBoarding.warningText, {opacity: warningOpacity}]}
                        >
                            ⚠️ Please enter a city ! ⚠️
                        </Animated.Text >
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}