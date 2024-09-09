import { View, Image, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { useContext, useState } from "react";

import WeatherContext from "../services/context/WeatherContext";

import ButtonGradient from "../components/ButtonGradient";
import BackButton from "../components/BackButton";

import stylesOnBoarding from "../styles/styleOnBoarding";
import CloudAnimate from "../components/animateBackground/CloudAnimate";

export default function OnBoardingLog({ navigation }:{
    navigation :{ navigate : (screen: string) => void }
}) {

    const { setIsSignedIn } = useContext(WeatherContext)

    const [focus, setFocus] = useState(false);

    const [inputMail, setInputMail] = useState("");
    const [inputPassword, setInputPassword] = useState("");


    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : 'height'}>
            <View style={stylesOnBoarding.global}>
                <Pressable style={stylesOnBoarding.backButton}>
                    <BackButton />
                </Pressable>
                <CloudAnimate/>
                <View style={stylesOnBoarding.container}>
                    <View style={stylesOnBoarding.containerTextLog}>
                        { !focus &&
                        <Image
                        source={require('../../assets/icon.png')}
                        style={stylesOnBoarding.image}
                        />
                        }
                        <Text 
                        style={stylesOnBoarding.titleLog}>
                            Your weather,{'\n'}
                            <Text 
                            style={stylesOnBoarding.titleSecondary}>
                                always at hand!
                            </Text> 
                        </Text>  
                    </View>
                    <View style={stylesOnBoarding.sectionInput}>
                        <Text style={stylesOnBoarding.labelLog}>Enter your mail:</Text>
                        <TextInput
                        value={inputMail}
                        placeholder="Mail"
                        returnKeyType="done"
                        onChangeText={(e) => setInputMail(e)}
                        onFocus={() => setFocus(true)}
                        onSubmitEditing={() => setFocus(false)}
                        style={stylesOnBoarding.inputLog} 
                        />
                        <Text style={stylesOnBoarding.labelLog}>Enter your password:</Text>
                        <TextInput
                        value={inputPassword}
                        placeholder="Password"
                        returnKeyType="done"
                        onChangeText={(e) => setInputPassword(e)}
                        onFocus={() => setFocus(true)}
                        onSubmitEditing={() => setFocus(false)}
                        style={stylesOnBoarding.inputLog} 
                        />
                        { !focus &&
                        <>
                            <Pressable  
                            style={({ pressed }) => [
                            stylesOnBoarding.buttonLog,
                            { opacity: pressed ? 0.2 : 1},{marginBottom: 16}]} 
                            onPress={() => navigation.navigate('OnBoarding')}>
                                <ButtonGradient texte="Let's go!" />
                            </Pressable>
                            <View style={stylesOnBoarding.containerTxtSign}>
                                <Text style={stylesOnBoarding.textSignUp}>
                                    Don’t have an account?
                                </Text>
                                <Pressable 
                                style={stylesOnBoarding.btnSignUp}
                                onPress={() => navigation.navigate('OnBoardingName')}>
                                    <Text style={stylesOnBoarding.textSignNav}>
                                        Sign up now!
                                    </Text>
                                </Pressable>
                            </View>
                        </>
                        }
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}