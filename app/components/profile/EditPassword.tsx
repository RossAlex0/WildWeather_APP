import { View, Text, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import ButtonGradient from "../ButtonGradient";

import { EditPasswordProps } from "../../types/interfaces/profilePropsInterfaces";

import colors from "../../styles/colors";
import stylesProfile from "../../styles/styleSettingsScreen/styleProfile";

export default function EditPassword({confirmPassword, open, password, currentPassword, functions}: EditPasswordProps){

    return( open.isOpen === "password"
        ? ( 
            <View style={stylesProfile.containerInput}>
            {confirmPassword ?
            (
                    <>
                        <Text style={stylesProfile.label}>Changed your password:</Text>
                        <TextInput 
                            placeholder="Enter your new password here"
                            returnKeyType="done"
                            maxLength={15} 
                            onChangeText={(e) => password.setValuePassword(e)}
                            value={password.valuePassword} 
                            style={stylesProfile.input} 
                        />
                        <Text style={[stylesProfile.label, {marginTop: 12}]}>Confirm your password:</Text>
                        <TextInput 
                            placeholder="Confirm your new password here"
                            returnKeyType="done"
                            maxLength={15} 
                            onChangeText={(e) => password.setValuePassword(e)}
                            value={password.valuePassword} 
                            style={stylesProfile.input} 
                        />
                        <Pressable style={stylesProfile.btnConfirm} onPress={functions.handleConfirmPassword}>
                            <ButtonGradient texte="Confirm"/>
                        </Pressable>
                    </>

            ) : (

                    <>
                        <Text style={stylesProfile.label}>Enter your password to authorize the change:</Text>
                        <TextInput 
                            placeholder="Enter your current password here"
                            returnKeyType="done"
                            maxLength={15}
                            onChangeText={(e) => currentPassword.setValueCurrentPassword(e)}
                            value={currentPassword.valueCurrentPassword} 
                            style={stylesProfile.input} 
                        />
                        <Pressable style={stylesProfile.btnConfirm} onPress={functions.handleConfirmCurrentPassword}>
                            <ButtonGradient texte="Confirm"/>
                        </Pressable>
                    </>
            )}
            </View>
        ):(
            <View style={stylesProfile.containerInputClose}>
                <Text style={stylesProfile.label}>
                    Your password:{'  '}  
                    <Text style={stylesProfile.textUser}>***********</Text>
                </Text>
                <Pressable onPress={() => open.setIsOpen("password")}>
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