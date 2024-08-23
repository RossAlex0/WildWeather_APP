import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useState, useContext } from "react";

import storage from "../../services/storage";
import ButtonGradient from "../../components/ButtonGradient";

import UserContext from "../../services/context/UserContext";

import stylesProfile from "../../styles/styleSettingsScreen/styleProfile";
import colors from "../../styles/colors";

export default function Profile(){

    const { saveName } = storage;
    const { userName, setUserName} = useContext(UserContext)

    const [isOpen, setIsOpen] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(false);

    const [value, setValue] = useState("");
    const [valueName, setValueName] = useState("");
    const [valueCurrentPassword, setValueCurrentPassword] = useState("");

    const handleConfirmCurrentPassword = () => {
        if( valueCurrentPassword === "1234"){
            setConfirmPassword(true)
        }
    }
    
    const handleConfirmName = () => {
        setIsOpen(""); 
        setUserName(valueName);
        saveName(valueName);
        setValueName("")
    }


    return(
        
        <KeyboardAvoidingView style={stylesProfile.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            { isOpen === "name"
            ? (
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
                    <Pressable 
                    style={stylesProfile.btnConfirm} 
                    onPress={handleConfirmName}>
                        <ButtonGradient texte="Confirm"/>
                    </Pressable>
                </View>
            ):(
                <View style={stylesProfile.containerInputClose}>
                    <Text style={stylesProfile.label}>
                        Your name:{'  '}
                        <Text style={stylesProfile.textUser}>
                            {userName}</Text>
                    </Text>
                    <Pressable onPress={() => setIsOpen("name")}>
                        <Icon
                            name="pencil-sharp"
                            size={24}
                            color={colors.primaryColor}
                        />
                    </Pressable>
                </View>
            )}

            { isOpen === "mail"
            ?(
                <View style={stylesProfile.containerInput}>
                    <Text style={stylesProfile.label}>Change your mail:</Text>
                    <TextInput 
                        placeholder="Enter your mail here"
                        returnKeyType="done"
                        maxLength={15} 
                        onChangeText={(e) => setValue(e)}
                        value={value} 
                        style={stylesProfile.input} 
                    />
                    <Pressable style={stylesProfile.btnConfirm} onPress={() => setIsOpen("")}>
                        <ButtonGradient texte="Confirm"/>
                    </Pressable>
                </View>
            ):(
                <View style={stylesProfile.containerInputClose}>
                    <Text style={stylesProfile.label}>
                        Your mail:{'  '}
                        <Text style={stylesProfile.textUser}>alexnw33910@gmail.com</Text>
                    </Text>
                    <Pressable onPress={() => setIsOpen("mail")}>
                        <Icon
                            name="pencil-sharp"
                            size={24}
                            color={colors.primaryColor}
                        />
                    </Pressable>
                </View>
            )}

            {isOpen === "password"
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
                                onChangeText={(e) => setValue(e)}
                                value={value} 
                                style={stylesProfile.input} 
                            />
                            <Text style={[stylesProfile.label, {marginTop: 12}]}>Confirm your password:</Text>
                            <TextInput 
                                placeholder="Confirm your new password here"
                                returnKeyType="done"
                                maxLength={15} 
                                onChangeText={(e) => setValue(e)}
                                value={value} 
                                style={stylesProfile.input} 
                            />
                            <Pressable style={stylesProfile.btnConfirm} onPress={() => {setConfirmPassword(false); setIsOpen("")}}>
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
                                onChangeText={(e) => setValueCurrentPassword(e)}
                                value={valueCurrentPassword} 
                                style={stylesProfile.input} 
                            />
                            <Pressable style={stylesProfile.btnConfirm} onPress={handleConfirmCurrentPassword}>
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
                    <Pressable onPress={() => setIsOpen("password")}>
                        <Icon
                            name="pencil-sharp"
                            size={24}
                            color={colors.primaryColor}
                        />
                    </Pressable>
                </View>

            )}
            </ScrollView>
        </KeyboardAvoidingView>
)}