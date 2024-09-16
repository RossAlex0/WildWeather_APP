import { View, Text, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useContext } from "react";

import ButtonGradient from "../ButtonGradient";

import { EditNameProps } from "../../types/interfaces/profilePropsInterfaces";
import UserContext from "../../services/context/UserContext";

import colors from "../../styles/colors";
import stylesProfile from "../../styles/styleSettingsScreen/styleProfile";

export default function EditName({
  open,
  name,
  handleConfirmName,
}: EditNameProps) {
  const { userInfo } = useContext(UserContext);

  return open.isOpen === "name" ? (
    <View style={stylesProfile.containerInput}>
      <Text style={stylesProfile.label}>Change your name:</Text>
      <TextInput
        placeholder="Enter your name here"
        returnKeyType="done"
        maxLength={15}
        onChangeText={(e) => name.setValueName(e)}
        value={name.valueName}
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
      <Pressable onPress={() => open.setIsOpen("name")}>
        <Icon name="pencil-sharp" size={24} color={colors.primaryColor} />
      </Pressable>
    </View>
  );
}
