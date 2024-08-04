import { Image, Text, View } from 'react-native';

import ButtonConfirm from '../components/ButtonConfirm';

import stylesOnBoarding from '../styles/styleOnBoarding';

export default function OnBoarding() {
    
    return(
    <View style={stylesOnBoarding.global}>
        <View style={stylesOnBoarding.container}>
            <View style={stylesOnBoarding.containerText}>
                <Image
                source={require('../../assets/icon.png')}
                style={stylesOnBoarding.image}
                alt='WildWeather, soleil, vague et flocon de neige'
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
            <ButtonConfirm texte="Let's go !"/>
        </View>
        </View>
    
    )
}