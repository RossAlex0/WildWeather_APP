import { useContext, useEffect, useState } from "react";
import { Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform, Animated } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

import WeatherContext from "../services/context/WeatherContext";
import UserContext from "../services/context/UserContext";

import ButtonGradient from "../components/ButtonGradient";
import BackButton from "../components/BackButton";

import stylesOnBoarding from "../styles/styleOnBoarding";
import addUser from "../services/backApi/postApi";

export default function OnBoardingName() {

    const { setIsSignedIn } = useContext(WeatherContext)
    const { userInfo, setUserInfo} = useContext(UserContext);
    
    const [warningOpacity] = useState(new Animated.Value(0));

    const [isFocus, setIsFocus] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleKeyBoardDone = () => {
        setIsFocus(false);
        setUserInfo({ ...userInfo, city: inputValue });
    }

    const handlePressButtonCity = () => {
        if(inputValue.length > 3){
            addUser(userInfo);
            setIsSignedIn(true);
        }else{
            Animated.timing(warningOpacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();
        }
    };
    
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={stylesOnBoarding.global}>
                <Pressable style={stylesOnBoarding.backButton}>
                    <BackButton />
                </Pressable>
                <View style={stylesOnBoarding.containerName}>
                    <View style={stylesOnBoarding.containerTextCity}>
                        <Text style={stylesOnBoarding.textNameTitle}>
                            {userInfo.name !== null 
                            ? `Thank you, ${userInfo.name}.`
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
                        onFocus={() => setIsFocus(true)}
                        onSubmitEditing={handleKeyBoardDone}
                        value={inputValue}
                        style={stylesOnBoarding.inputCity} />
                    </View>
                    { !isFocus &&
                    <View style={stylesOnBoarding.containerButtonCity}>
                        <Pressable 
                        style={({ pressed }) => [
                        stylesOnBoarding.button,
                        { opacity: pressed ? 0.2 : 1}]}
                        onPress={handlePressButtonCity} 
                        >
                            <ButtonGradient texte="Confirm" />
                        </Pressable>
                        <Animated.Text 
                        style={[stylesOnBoarding.warningText, {opacity: warningOpacity}]}
                        >
                            ⚠️ Please enter a city ! ⚠️
                        </Animated.Text >
                    </View>
                    }
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}