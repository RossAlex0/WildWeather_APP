import { View, Image, Text, TextInput, Pressable } from "react-native";
import { useContext, useState } from "react";

import WeatherContext from "../services/context/WeatherContext";

import ButtonGradient from "../components/ButtonGradient";

import stylesOnBoarding from "../styles/styleOnBoarding";

export default function OnBoardingLog({ navigation }:{
    navigation :{ navigate : (screen: string) => void }
}) {

    const { setIsSignedIn } = useContext(WeatherContext)

    const [inputMail, setInputMail] = useState("");
    const [inputPassword, setInputPassword] = useState("");


    return(
        <View style={stylesOnBoarding.global}>
        <View style={stylesOnBoarding.container}>
            <View style={stylesOnBoarding.containerTextLog}>
                <Image
                source={require('../../assets/icon.png')}
                style={stylesOnBoarding.image}
                />
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
                returnKeyType="search"
                onChangeText={(e) => setInputMail(e)}
                style={stylesOnBoarding.inputLog} 
                />
                <Text style={stylesOnBoarding.labelLog}>Enter your password:</Text>
                <TextInput
                value={inputPassword}
                placeholder="Password"
                returnKeyType="search"
                onChangeText={(e) => setInputPassword(e)}
                style={stylesOnBoarding.inputLog} 
                />
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
            </View>
        </View>
    </View>
    )
}