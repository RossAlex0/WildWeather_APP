import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Text, View } from "react-native";

import stylesLanguage from "../../styles/styleSettingsScreen/styleLanguage";

export default function Language(){

    const [isFrChecked, setIsFrChecked] = useState(false)
    const [isEnChecked, setIsEnChecked] = useState(true)
    const [isAlChecked, setIsAlChecked] = useState(false)

    const handleFrCheck = () => {
        if (!isFrChecked) {
          setIsFrChecked(true);
          setIsEnChecked(false);
          setIsAlChecked(false);
        }
      };
    
      const handleEnCheck = () => {
        if (!isEnChecked) {
          setIsEnChecked(true);
          setIsFrChecked(false);
          setIsAlChecked(false);
        }
      };
    
      const handleAlCheck = () => {
        if (!isAlChecked) {
          setIsAlChecked(true);
          setIsFrChecked(false);
          setIsEnChecked(false);
        }
      };

    return(
        <View style={stylesLanguage.container}>
            <View style={stylesLanguage.checkboxSection}>
                <Checkbox
                value={isFrChecked}
                onValueChange={handleFrCheck}
                style={stylesLanguage.checkbox} />
                <Text style={stylesLanguage.labelCheckbox}>🇫🇷 Français</Text>
            </View>
            <View style={stylesLanguage.checkboxSection}>
                <Checkbox
                value={isEnChecked}
                onValueChange={handleEnCheck}
                style={stylesLanguage.checkbox} />
                <Text style={stylesLanguage.labelCheckbox}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 English</Text>
            </View>
            <View style={stylesLanguage.checkboxSection}>
                <Checkbox
                value={isAlChecked}
                onValueChange={handleAlCheck}
                style={stylesLanguage.checkbox} />
                <Text style={stylesLanguage.labelCheckbox}>🇩🇪 Deutsch</Text>
            </View>
        </View>
    )
}