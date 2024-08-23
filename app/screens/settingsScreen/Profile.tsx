import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";

import storage from "../../services/storage";
import ButtonGradient from "../../components/ButtonGradient";

import stylesProfile from "../../styles/styleSettingsScreen/styleProfile";
import colors from "../../styles/colors";

export default function Profile(){

    const { loadName, saveName } = storage;

    const [value, setValue] = useState("");
    const [valueName, setValueName] = useState("");
    const [inputCurrentPassword, setInputCurrentPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [isOpen, setIsOpen] = useState("");
    const [userName, setUserName] = useState("");
    const [userNameDefault, setUserNameDefault] = useState("");

    const handleConfirmCurrentPassword = () => {
        if( inputCurrentPassword === "1234"){
            setConfirmPassword(true)
        }
    }

    useEffect(() => {
        loadName(setUserNameDefault)
    }, []);
    useEffect(() => {
        if(userName !== ""){
            saveName(userName)
        }
    }, [userName]);

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
                    onPress={() => {setIsOpen(""); setUserName(valueName)}}>
                        <ButtonGradient texte="Confirm"/>
                    </Pressable>
                </View>
            ):(
                <View style={stylesProfile.containerInputClose}>
                    <Text style={stylesProfile.label}>
                        Your name:{'  '}
                        <Text style={{ textDecorationLine: 'underline'}}>
                            {userName !== "" ? userName : userNameDefault}</Text>
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
                        <Text style={{ textDecorationLine: 'underline'}}>alexnw33910@gmail.com</Text>
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
                                placeholder="Enter your password here"
                                returnKeyType="done"
                                maxLength={15}
                                onChangeText={(e) => setInputCurrentPassword(e)}
                                value={inputCurrentPassword} 
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
                        <Text style={{ textDecorationLine: 'underline'}}>***********</Text>
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