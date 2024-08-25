import { View, Text, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import ButtonGradient from "../ButtonGradient";

import { EditMailProps } from "../../types/interfaces/profilePropsInterfaces";

import colors from "../../styles/colors";
import stylesProfile from "../../styles/styleSettingsScreen/styleProfile";

export default function EditMail({ open, mail, handleConfirmMail}: EditMailProps){

    return(
        open.isOpen === "mail"
            ?(
                <View style={stylesProfile.containerInput}>
                    <Text style={stylesProfile.label}>Change your mail:</Text>
                    <TextInput 
                        placeholder="Enter your mail here"
                        returnKeyType="done"
                        maxLength={15} 
                        onChangeText={(e) => mail.setValueMail(e)}
                        value={mail.valueMail} 
                        style={stylesProfile.input} 
                    />
                    <Pressable style={stylesProfile.btnConfirm} onPress={handleConfirmMail}>
                        <ButtonGradient texte="Confirm"/>
                    </Pressable>
                </View>
            ):(
                <View style={stylesProfile.containerInputClose}>
                    <Text style={stylesProfile.label}>
                        Your mail:{'  '}
                        <Text style={stylesProfile.textUser}>alexnw33910@gmail.com</Text>
                    </Text>
                    <Pressable onPress={() => open.setIsOpen("mail")}>
                        <Icon
                            name="pencil-sharp"
                            size={24}
                            color={colors.primaryColor}
                        />
                    </Pressable>
                </View>
            )
    )
}