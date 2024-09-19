import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import ButtonGradient from "../ButtonGradient";
import EditProps from "../../types/interfaces/profilePropsInterfaces";

import colors from "../../styles/colors";
import stylesProfile from "../../styles/styleSettingsScreen/styleProfile";

export default function EditPassword({ open, setTextConfirm }: EditProps) {
  const { isOpen, setIsOpen } = open;

  const [valueCurrentPassword, setValueCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [valuePassword, setValuePassword] = useState("");

  const handleConfirmPassword = () => {
    setIsOpen("");
    setTextConfirm("password");
    setConfirmPassword(false);
    setValuePassword("");
    setValueCurrentPassword("");
    setTimeout(() => {
      setTextConfirm("");
    }, 2500);
  };

  const handleCheckCurrentPassword = () => {
    if (valueCurrentPassword === "1234") {
      setConfirmPassword(true);
    }
  };
  return isOpen === "password" ? (
    <View style={stylesProfile.containerInput}>
      {confirmPassword ? (
        <>
          <Text style={stylesProfile.label}>Changed your password:</Text>
          <TextInput
            placeholder="Enter your new password here"
            returnKeyType="done"
            maxLength={15}
            onChangeText={(e) => setValuePassword(e)}
            value={valuePassword}
            style={stylesProfile.input}
          />
          <Text style={[stylesProfile.label, { marginTop: 12 }]}>
            Confirm your password:
          </Text>
          <TextInput
            placeholder="Confirm your new password here"
            returnKeyType="done"
            maxLength={15}
            onChangeText={(e) => setValuePassword(e)}
            value={valuePassword}
            style={stylesProfile.input}
          />
          <Pressable
            style={stylesProfile.btnConfirm}
            onPress={handleConfirmPassword}
          >
            <ButtonGradient texte="Confirm" />
          </Pressable>
        </>
      ) : (
        <>
          <Text style={stylesProfile.label}>
            Enter your password to authorize the change:
          </Text>
          <TextInput
            placeholder="Enter your current password here"
            returnKeyType="done"
            maxLength={15}
            onChangeText={(e) => setValueCurrentPassword(e)}
            value={valueCurrentPassword}
            style={stylesProfile.input}
          />
          <Pressable
            style={stylesProfile.btnConfirm}
            onPress={handleCheckCurrentPassword}
          >
            <ButtonGradient texte="Confirm" />
          </Pressable>
        </>
      )}
    </View>
  ) : (
    <View style={stylesProfile.containerInputClose}>
      <Text style={stylesProfile.label}>
        Your password:{"  "}
        <Text style={stylesProfile.textUser}>***********</Text>
      </Text>
      <Pressable onPress={() => setIsOpen("password")}>
        <Icon name="pencil-sharp" size={24} color={colors.primaryColor} />
      </Pressable>
    </View>
  );
}
