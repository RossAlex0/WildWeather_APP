import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useState, useContext } from "react";

import ButtonGradient from "../../components/ButtonGradient";
import ConfirmBox from "../../components/ConfirmBox";
import EditName from "../../components/profile/EditName";

import UserContext from "../../services/context/UserContext";
import storage from "../../services/storage";

import stylesProfile from "../../styles/styleSettingsScreen/styleProfile";
import colors from "../../styles/colors";
import EditMail from "../../components/profile/EditMail";
import EditPassword from "../../components/profile/EditPassword";


export default function Profile(){

    const { saveName } = storage;
    const { setUserName} = useContext(UserContext)

    const [isOpen, setIsOpen] = useState("");
    // For ConfirmBox =>
    const [msgConfirm, setMsgConfirm] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);
    // For check current password
    const [confirmPassword, setConfirmPassword] = useState(false);

    const [valueMail, setValueMail] = useState("");
    const [valueName, setValueName] = useState("");
    const [valuePassword, setValuePassword] = useState("");
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
        setValueName("");
        setMsgConfirm("name");
        setIsConfirmed(true);
        setTimeout(() => {
            setIsConfirmed(false);
        }, 2500);
    }
    const handleConfirmMail = () => {
        setIsOpen(""); 
        setValueMail("");
        setMsgConfirm("mail");
        setIsConfirmed(true);
        setTimeout(() => {
            setIsConfirmed(false);
        }, 2500);
    }
    const handleConfirmPassword = () => {
        setIsOpen(""); 
        setValuePassword("");
        setValueCurrentPassword("");
        setMsgConfirm("password");
        setIsConfirmed(true);
        setConfirmPassword(false);
        setTimeout(() => {
            setIsConfirmed(false);
        }, 2500);
    }


    return(
        
        <KeyboardAvoidingView style={stylesProfile.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <EditName 
            open={{isOpen, setIsOpen}}
            name={{valueName, setValueName}} 
            handleConfirmName={handleConfirmName}
            />

            <EditMail
            open={{isOpen, setIsOpen}}
            mail={{valueMail, setValueMail}} 
            handleConfirmMail={handleConfirmMail}
            /> 

            <EditPassword 
            confirmPassword={confirmPassword}
            open={{isOpen, setIsOpen}}
            password={{valuePassword, setValuePassword}}  
            currentPassword={{valueCurrentPassword, setValueCurrentPassword}} 
            functions={{handleConfirmPassword, handleConfirmCurrentPassword}}
            />
            
            </ScrollView>
            {isConfirmed &&
                <ConfirmBox text={`Your new ${msgConfirm} is confirmed!`} />
            }
        </KeyboardAvoidingView>
)}