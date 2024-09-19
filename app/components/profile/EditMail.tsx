import { View, Text, TextInput, Pressable } from "react-native";
import { useContext, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import ButtonGradient from "../ButtonGradient";
import { updateUserMail } from "../../services/request/updateUser";
import EditProps from "../../types/interfaces/profilePropsInterfaces";
import UserContext from "../../services/context/UserContext";

import colors from "../../styles/colors";
import stylesProfile from "../../styles/styleSettingsScreen/styleProfile";

export default function EditMail({ open, setTextConfirm }: EditProps) {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { isOpen, setIsOpen } = open;

  const [valueMail, setValueMail] = useState("");

  const handleConfirmMail = async () => {
    const newMail = await updateUserMail(valueMail);
    if (newMail) {
      setIsOpen("");
      setTextConfirm("mail");
      setUserInfo({ ...userInfo, mail: valueMail });
      setValueMail("");

      setTimeout(() => {
        setTextConfirm("");
      }, 2500);
    }
  };

  return isOpen === "mail" ? (
    <View style={stylesProfile.containerInput}>
      <Text style={stylesProfile.label}>Change your mail:</Text>
      <TextInput
        placeholder="Enter your mail here"
        returnKeyType="done"
        maxLength={15}
        onChangeText={(e) => setValueMail(e)}
        value={valueMail}
        style={stylesProfile.input}
      />
      <Pressable style={stylesProfile.btnConfirm} onPress={handleConfirmMail}>
        <ButtonGradient texte="Confirm" />
      </Pressable>
    </View>
  ) : (
    <View style={stylesProfile.containerInputClose}>
      <Text style={stylesProfile.label}>
        Your mail:{"  "}
        <Text style={stylesProfile.textUser}>{userInfo.mail}</Text>
      </Text>
      <Pressable onPress={() => setIsOpen("mail")}>
        <Icon name="pencil-sharp" size={24} color={colors.primaryColor} />
      </Pressable>
    </View>
  );
}
