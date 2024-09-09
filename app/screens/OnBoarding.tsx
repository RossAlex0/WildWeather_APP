import { Image, Text, View, Pressable, Animated, Dimensions } from 'react-native';

import ButtonGradient from '../components/ButtonGradient';

import stylesOnBoarding from '../styles/styleOnBoarding';
import CloudAnimate from '../components/animateBackground/CloudAnimate';

export default function OnBoarding({ navigation }:{
    navigation :{ navigate : (screen: string) => void }
}) {
    
    return(
    <View style={stylesOnBoarding.global}>
        <CloudAnimate />
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
            <View style={stylesOnBoarding.sectionbutton}>
                <Pressable  
                style={({ pressed }) => [
                stylesOnBoarding.button,
                { opacity: pressed ? 0.2 : 1},{marginBottom: 16}]} 
                onPress={() => navigation.navigate('OnBoardingLog')}>
                    <ButtonGradient texte="Log In" />
                </Pressable>
                <Pressable  
                style={({ pressed }) => [
                stylesOnBoarding.buttonWhite,
                { opacity: pressed ? 0.2 : 1}]} 
                onPress={() => navigation.navigate('OnBoardingName')}>
                    <Text style={stylesOnBoarding.textBtn}>Create account</Text>
                </Pressable>
            </View>
        </View>
    </View>
    
    )
}