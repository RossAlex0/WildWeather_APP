import { useEffect, useRef } from "react";
import { Animated, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

export default function CloudAnimeLeft() {
  const { width: screenWidth } = Dimensions.get("window");

  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animationValue, {
            toValue: screenWidth + 240,
            duration: 23000,
            useNativeDriver: true,
          }),
          Animated.timing(animationValue, {
            toValue: 0,
            duration: 23000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animate();
  }, [animationValue]);

  return (
    <Animated.View
      style={[
        { width: "100%", marginTop: 100 },
        { transform: [{ translateX: animationValue }, { rotateY: "180deg" }] },
      ]}
    >
      <LottieView
        source={require("../../../assets/weatherIconLottie/cloudAnimation.json")}
        autoPlay
        loop
        style={{
          height: 240,
          width: 240,
          opacity: 0.7,
          position: "absolute",
          right: -240,
        }}
      />
    </Animated.View>
  );
}
