import { Image, Text, View, Pressable } from 'react-native';

import ButtonConfirm from '../components/ButtonConfirm';

import stylesOnBoarding from '../styles/styleOnBoarding';

export default function OnBoarding({ navigation }:{
    navigation :{
    navigate : (screen: string) => void
}
}) {
    
    return(
    <View style={stylesOnBoarding.global}>
        <View style={stylesOnBoarding.container}>
            <View style={stylesOnBoarding.containerText}>
                <Image
                source={require('../../assets/icon.png')}
                style={stylesOnBoarding.image}
                />
                <Text 
                style={stylesOnBoarding.title}>
                    Your weather,{'\n'}
                    <Text 
                    style={stylesOnBoarding.titleSecondary}>
                        always at hand!
                    </Text> 
                </Text>  
                               
                <Text style={stylesOnBoarding.texte} >Don't let the weather surprise you.</Text>                
            </View>
            <View style={stylesOnBoarding.button}>
                <Pressable  
                style={({ pressed }) => [
                stylesOnBoarding.button,
                { opacity: pressed ? 0.2 : 1}]} 
                onPress={() => navigation.navigate('OnBoardingName')}>
                    <ButtonConfirm texte="Let's go !" />
                </Pressable>
            </View>
        </View>
    </View>
    
    )
}