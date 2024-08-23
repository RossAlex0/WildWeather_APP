import { Pressable, Text, View } from "react-native";

import stylesSettings from "../styles/styleSettings";
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../styles/colors";
import ButtonGradient from "../components/ButtonGradient";

import settings from "../services/data/dataSettings";

export default function SettingsPage(){

    

    return(
        <View style={stylesSettings.container}>
            <View style={stylesSettings.containerTitleNav}>
                {settings.map((setting) => (
                <View key={setting.name} style={stylesSettings.containTitleNav}>
                    <Icon
                    name={setting.nameIcon}
                    size={setting.sizeIcon} 
                    color={colors.orangeColor}
                    />
                    <Text style={stylesSettings.textTitleNav}>
                    {setting.name}
                    </Text>
                    {setting.navigate ? (
                    <Pressable style={stylesSettings.imageTitleNav}>
                        <Icon
                        name='chevron-forward-outline'
                        size={28}
                        color={colors.primaryColor}
                        />
                    </Pressable>
                    ) : (
                    <Text style={stylesSettings.imageTitleNav}>!Toggle!</Text>
                    )}
                </View>
                ))}   
            </View>
            <Pressable style={stylesSettings.buttonLogout}>
                <ButtonGradient texte='Logout'/>
            </Pressable>
            <View style={stylesSettings.containerCopy}>
                <Text style={stylesSettings.textCopy}>V.1.0.0</Text>
                <Text style={stylesSettings.textCopy}>All rights reserved</Text>
                <Text style={stylesSettings.textCopy}>© WildWeather 2024 - Rossignol Alex</Text>
            </View>
        </View>
    )
}