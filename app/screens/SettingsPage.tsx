import { View } from "react-native";

import stylesSettings from "../styles/styleSettings";

export default function SettingsPage(){

    return(
        <View style={stylesSettings.container}>
            <View style={stylesSettings.containerTitleNav}>
                <View style={stylesSettings.containTitleNav}></View>
                <View style={stylesSettings.containTitleNav}></View>
                <View style={stylesSettings.containTitleNav}></View>
                <View style={stylesSettings.containTitleNav}></View>
            </View>
            <View></View>
        </View>
    )
}