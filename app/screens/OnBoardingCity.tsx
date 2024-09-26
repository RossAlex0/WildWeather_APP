import { useContext, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import UserContext from "../services/context/UserContext";

import ButtonGradient from "../components/ButtonGradient";
import BackButton from "../components/BackButton";

import stylesOnBoarding from "../styles/styleOnBoarding";
import addUser from "../services/request/createUser";
import CloudAnimate from "../components/animateBackground/CloudAnimate";
import ConfirmBox from "../components/ConfirmBox";

export default function OnBoardingName({
  navigation,
}: {
  navigation: { navigate: (screen: string) => void };
}) {
  const { createUser, setCreateUser } = useContext(UserContext);

  const [warningOpacity] = useState(new Animated.Value(0));

  const [isFocus, setIsFocus] = useState(false);
  const [isValide, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleKeyBoardDone = () => {
    setIsFocus(false);
    setCreateUser({ ...createUser, city: inputValue });
  };

  const handlePressButtonCity = async () => {
    try {
      if (inputValue.length > 3) {
        const response = await addUser(createUser);
        if (response !== "error") {
          setIsValid(true);
          setTimeout(() => {
            setIsValid(false);
            navigation.navigate("OnBoardingLog");
          }, 1700);
        }
      } else {
        Animated.timing(warningOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }).start();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={stylesOnBoarding.global}>
        <Pressable style={stylesOnBoarding.backButton}>
          <BackButton />
        </Pressable>
        <CloudAnimate />
        <View style={stylesOnBoarding.containerName}>
          <View style={stylesOnBoarding.containerTextCity}>
            <Text style={stylesOnBoarding.textNameTitle}>
              {createUser.name !== null
                ? `Thank you, ${createUser.name}.`
                : "Thank you."}
            </Text>
            <Text style={stylesOnBoarding.textNameTitle}>
              Where do you live?
            </Text>
          </View>
          <View style={stylesOnBoarding.containerInput}>
            <MaterialIcons
              style={stylesOnBoarding.searchIcon}
              name="search"
              size={28}
              color="#0E0C5E"
            />
            <TextInput
              placeholder="Research"
              returnKeyType="done"
              onChangeText={(e) => setInputValue(e)}
              onFocus={() => setIsFocus(true)}
              onSubmitEditing={handleKeyBoardDone}
              value={inputValue}
              style={stylesOnBoarding.inputCity}
            />
          </View>
          {!isFocus && (
            <View style={stylesOnBoarding.containerButtonCity}>
              <Pressable
                style={({ pressed }) => [
                  stylesOnBoarding.button,
                  { opacity: pressed ? 0.2 : 1 },
                ]}
                onPress={handlePressButtonCity}
              >
                <ButtonGradient texte="Confirm" />
              </Pressable>
              <Animated.Text
                style={[
                  stylesOnBoarding.warningText,
                  { opacity: warningOpacity },
                ]}
              >
                ⚠️ Please enter a city ! ⚠️
              </Animated.Text>
            </View>
          )}
        </View>
        {isValide && (
          <View style={stylesOnBoarding.confirmAccount}>
            <ConfirmBox text="Your account has been created!" />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
