import { KeyboardAvoidingView, Platform, View, Text, TextInput,Pressable } from "react-native";
import { useContext, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import ButtonGradient from "../components/ButtonGradient";
import BackButton from "../components/BackButton";

import stylesOnBoarding from "../styles/styleOnBoarding";
import colors from "../styles/colors";
import UserContext from "../services/context/UserContext";
import CloudAnimate from "../components/animateBackground/CloudAnimate";

export default function OnBoardingPassword({ navigation }:{
    navigation :{ navigate : (screen: string) => void }
}){
    
    const { userInfo, setUserInfo } = useContext(UserContext)

    const [focus, setFocus] = useState(false);
    const [isValid, setIsValid] = useState(true)

    const [isVisibleFirst, setIsVisibleFirst] = useState(true);
    const [isVisibleLast, setIsVisibleLast] = useState(true);
    const [inputPassword, setInputPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");

    const handlePressButtonPassword = () => {
        if(inputPassword.length <= 6 || inputConfirmPassword.length <= 6){
            setIsValid(false)
            setTimeout(() => {
                setIsValid(true)
            }, 6000);
        }
        if(inputPassword === inputConfirmPassword && inputPassword.length > 6){
        setUserInfo({...userInfo, password: inputPassword})
        navigation.navigate('OnBoardingCity')
        }
    };

    return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : 'height'}>
        <View style={stylesOnBoarding.global}>
            <Pressable style={stylesOnBoarding.backButton}>
                <BackButton />
            </Pressable>
            <CloudAnimate/>
            <View style={stylesOnBoarding.containerName}>
                <View style={stylesOnBoarding.containerTextName}>
                    <Text style={stylesOnBoarding.textNameTitle}>Secure Your Account!</Text>     
                </View>
                <View style={stylesOnBoarding.containerInput}>
                    <Text style={stylesOnBoarding.textName}>Choose a password</Text> 
                    <TextInput 
                    placeholder="Enter a password here"
                    returnKeyType="done"
                    maxLength={15} 
                    onFocus={() => setFocus(true)}
                    onChangeText={(e) => setInputPassword(e)}
                    onSubmitEditing={() => setFocus(false)}
                    secureTextEntry={isVisibleFirst}
                    autoCorrect={false} 
                    autoCapitalize="none" 
                    keyboardType="default"
                    value={inputPassword}
                    style={stylesOnBoarding.inputName} />
                    <Pressable 
                    style={stylesOnBoarding.iconPassword}
                    onPress={() => setIsVisibleFirst(!isVisibleFirst)}
                    >
                        <Icon 
                        name="eye-off-outline"
                        size={28}
                        color={colors.primaryColor}
                        />
                    </Pressable>
                </View>
                <View style={stylesOnBoarding.containerInputBottom}>
                    <Text style={stylesOnBoarding.textName}>Confirm this password</Text> 
                    <TextInput 
                    placeholder="Confirm your password here"
                    returnKeyType="done"
                    maxLength={15} 
                    onChangeText={(e) => setInputConfirmPassword(e)}
                    onFocus={() => setFocus(true)}
                    onSubmitEditing={() => setFocus(false)}
                    secureTextEntry={isVisibleLast}
                    autoCorrect={false} 
                    autoCapitalize="none" 
                    keyboardType="default"
                    value={inputConfirmPassword}
                    style={stylesOnBoarding.inputName} />
                    <Pressable 
                    style={stylesOnBoarding.iconPasswordBottom}
                    onPress={() => setIsVisibleLast(!isVisibleLast)}>
                        <Icon 
                        name="eye-off-outline"
                        size={28}
                        color={colors.primaryColor}
                        />
                    </Pressable>
                </View>
                { !isValid &&
                    <Text style={stylesOnBoarding.errorPassword}>
                        Password needs to be 6 characters or more!
                    </Text>
                }
                { !focus &&
                <View style={stylesOnBoarding.containerButton}>
                    <Pressable  
                    style={({ pressed }) => [
                    stylesOnBoarding.button,
                    { opacity: pressed ? 0.2 : 1}]} 
                    onPress={handlePressButtonPassword}> 
                        <ButtonGradient texte="Confirm" />
                    </Pressable>
                </View>
                }
            </View>
        </View>
    </KeyboardAvoidingView>
    )
}