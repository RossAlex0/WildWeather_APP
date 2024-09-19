import { Pressable, Text, View, Switch } from "react-native";
import { useContext, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import ButtonGradient from "../components/ButtonGradient";

import settings from "../services/data/dataSettings";
import { destroyDataStorage } from "../services/storage";
import UserContext from "../services/context/UserContext";

import stylesSettings from "../styles/styleSettings";
import colors from "../styles/colors";
import handleMailContact from "../services/mailContact";
import ConfirmBox from "../components/ConfirmBox";

export default function SettingsPage({
  navigation,
}: {
  navigation: { navigate: (screen: string) => void };
}) {
  const { userInfo, setUserInfo, setIsSigned } = useContext(UserContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isActived, setIsactived] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    setIsactived(true);
    setTimeout(() => {
      setIsactived(false);
    }, 2500);
  };
  const handleClear = async () => {
    console.info("Cleaned");
    setUserInfo({
      id: "",
      name: "",
      mail: "",
      city: "",
      token: "",
    });
    await destroyDataStorage();
    setIsSigned(false);
  };

  return (
    <View style={stylesSettings.container}>
      <View style={stylesSettings.containerTitleNav}>
        {settings.map((setting) => (
          <Pressable
            key={setting.name}
            style={stylesSettings.containTitleNav}
            onPress={
              setting.name === "Contact"
                ? () => handleMailContact(userInfo.name)
                : setting.navigate
                ? () => navigation.navigate(setting.navigateTo)
                : null
            }
          >
            <Icon
              name={setting.nameIcon}
              size={setting.sizeIcon}
              color={colors.flashColor}
            />
            <Text style={stylesSettings.textTitleNav}>{setting.name}</Text>
            {setting.navigate ? (
              <View style={stylesSettings.imageTitleNav}>
                <Icon
                  name="chevron-forward-outline"
                  size={28}
                  color={colors.primaryColor}
                />
              </View>
            ) : (
              <Switch
                style={stylesSettings.imageTitleNav}
                trackColor={{ false: "#F3F7FD", true: colors.flashColor }}
                thumbColor={isEnabled ? "#F3F7FD" : colors.flashColor}
                ios_backgroundColor="#F3F7FD"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            )}
          </Pressable>
        ))}
      </View>
      <Pressable style={stylesSettings.buttonLogout} onPress={handleClear}>
        <ButtonGradient texte="Logout" />
      </Pressable>
      <View style={stylesSettings.containerCopy}>
        <Text style={stylesSettings.textCopy}>V.1.0.0</Text>
        <Text style={stylesSettings.textCopy}>All rights reserved</Text>
        <Text style={stylesSettings.textCopy}>
          © WildWeather 2024 - Rossignol Alex
        </Text>
      </View>
      {isActived && (
        <ConfirmBox
          text={
            isEnabled
              ? "Notifications on your phone is actived!"
              : "Notifications on your phone is desactivated!"
          }
        />
      )}
    </View>
  );
}
