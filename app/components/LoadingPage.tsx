import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

import LottieView from "lottie-react-native";


export default function LoadingPage(){
    return (
        <LinearGradient
          colors={['#D5E8FF', '#FFFFFF']}
          start={{ x: 0, y: 0 }} 
          end={{ x: 0, y: 1 }}
          style={styleLoading.container}
        >
          <LottieView
            source={require('../../assets/loadingLottie/cloudLoading.json')}
            autoPlay
            loop
            style={styleLoading.lottie}
          />
        </LinearGradient>
      );
    };

const styleLoading = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lottie:{
        height: '30%',
        width: '70%'
    }
})