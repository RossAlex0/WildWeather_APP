import { View, Text, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useContext, useState } from "react";

import ButtonGradient from "../ButtonGradient";
import { updateUserName } from "../../services/request/updateUser";
import EditProps from "../../types/interfaces/profilePropsInterfaces";
import UserContext from "../../services/context/UserContext";

import colors from "../../styles/colors";
import stylesProfile from "../../styles/styleSettingsScreen/styleProfile";

export default function EditName({ open, setTextConfirm }: EditProps) {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { isOpen, setIsOpen } = open;

  const [valueName, setValueName] = useState("");

  const handleConfirmName = async () => {
    const response = await updateUserName(valueName);
    if (response) {
      setIsOpen("");
      setUserInfo({ ...userInfo, name: valueName });
      setTextConfirm("name");
      setValueName("");
      setTimeout(() => {
        setTextConfirm("");
      }, 2500);
    }
  };

  return isOpen === "name" ? (
    <View style={stylesProfile.containerInput}>
      <Text style={stylesProfile.label}>Change your name:</Text>
      <TextInput
        placeholder="Enter your name here"
        returnKeyType="done"
        maxLength={15}
        onChangeText={(e) => setValueName(e)}
        value={valueName}
        style={stylesProfile.input}
      />
      <Pressable style={stylesProfile.btnConfirm} onPress={handleConfirmName}>
        <ButtonGradient texte="Confirm" />
      </Pressable>
    </View>
  ) : (
    <View style={stylesProfile.containerInputClose}>
      <Text style={stylesProfile.label}>
        Your name:{"  "}
        <Text style={stylesProfile.textUser}>{userInfo.name}</Text>
      </Text>
      <Pressable onPress={() => setIsOpen("name")}>
        <Icon name="pencil-sharp" size={24} color={colors.primaryColor} />
      </Pressable>
    </View>
  );
}
