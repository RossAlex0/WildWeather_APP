import { Pressable, Text, View, Switch } from "react-native";
import { useContext, useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';

import ButtonGradient from "../components/ButtonGradient";

import settings from "../services/data/dataSettings";
import storage from "../services/storage";
import WeatherContext from "../services/context/WeatherContext";

import stylesSettings from "../styles/styleSettings";
import colors from "../styles/colors";

export default function SettingsPage(){

    const { clearStorage } = storage;
    const { setIsSignedIn, setUserCity } = useContext(WeatherContext)

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(!isEnabled);

    const handleClear = () => {
        console.info("Cleaned")
        setIsSignedIn(false)
        clearStorage()
        setUserCity("")
    }

    return(
        <View style={stylesSettings.container}>
            <View style={stylesSettings.containerTitleNav}>
                {settings.map((setting) => (
                <Pressable key={setting.name} style={stylesSettings.containTitleNav}>
                    <Icon
                    name={setting.nameIcon}
                    size={setting.sizeIcon} 
                    color={colors.orangeColor}
                    />
                    <Text style={stylesSettings.textTitleNav}>
                    {setting.name}
                    </Text>
                    {setting.navigate ? (
                    <View style={stylesSettings.imageTitleNav}>
                        <Icon
                        name='chevron-forward-outline'
                        size={28}
                        color={colors.primaryColor}
                        />
                    </View>
                    ) : (
                        <Switch
                        style={stylesSettings.imageTitleNav}
                        trackColor={{ false: '#F3F7FD', true: colors.orangeColor }}
                        thumbColor={isEnabled ? '#F3F7FD' : colors.orangeColor}
                        ios_backgroundColor= '#F3F7FD'
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    )}
                </Pressable>
                ))}   
            </View>
            <Pressable style={stylesSettings.buttonLogout} onPress={handleClear}>
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