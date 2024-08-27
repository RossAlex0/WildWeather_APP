import { StyleSheet, Text, Animated, View } from "react-native";
import { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";

import colors from "../styles/colors";



export default function LoadingPage(){

  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0.1, 
          duration: 1500, 
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1, 
          duration: 1500, 
          useNativeDriver: true,
        }),
      ])
    ).start(() => startAnimation()); // Recursive call to create a loop
    };

    startAnimation();
  }, [opacityAnim]);

  return (
    <>
      <View style={styleLoading.container}>
        <LottieView
          source={require('../../assets/loadingLottie/cloudLoading.json')}
          autoPlay
          loop
          style={styleLoading.lottie}
        />
        <Animated.View
        style={{ opacity: opacityAnim}}
      >
        <Text style={styleLoading.text}>Loading..</Text>
      </Animated.View>
      </View>
    </>
  );
};
  

const styleLoading = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F7FD',
    },
    lottie:{
        height: '30%',
        width: '70%'
    },
    text:{
      fontSize: 32,
      color: colors.flashColor,
      fontWeight: 'bold',
    }
})