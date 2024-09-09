import { useEffect, useRef } from "react";
import { Animated, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

export default function CloudAnimeRight(){

    const { width: screenWidth } = Dimensions.get('window');

    const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animationValue, {
            toValue: screenWidth + 180,
            duration: 9000, 
            useNativeDriver: true
          }),
          Animated.timing(animationValue, {
            toValue: 0, 
            duration: 9000, 
            useNativeDriver: true
          }),
        ])
      ).start();
    };

    animate();
  }, [animationValue]);
    return(
        <Animated.View style={[{ width: "100%"}, { transform: [{ translateX: animationValue }] }]}>
            <LottieView
            source={require('../../../assets/weatherIconLottie/cloudAnimation.json')}
            autoPlay
            loop
            style={{ height: 180, width: 180, opacity: 0.7, position: "absolute", left: -180 }}
            />
        </Animated.View>
    )
}