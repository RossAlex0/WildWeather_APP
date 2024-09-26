import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import SettingsNavigate from "./SettingsNavigate";
import AstronomyPage from "../screens/AstronomyPage";
import HomePage from "../screens/HomePage";

import colors from "../styles/colors";
import { Platform } from "react-native";

export default function HomeNavigate() {
  const Tab = createBottomTabNavigator();

  const height = Platform.OS === "ios" ? 88 : 60;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          color: colors.primaryColor,
        },
        tabBarStyle: {
          height: height,
          backgroundColor: "#FFF",
          borderTopWidth: 1,
          borderTopColor: colors.secondaryColor,
          paddingVertical: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              size={28}
              color={focused ? colors.flashColor : colors.primaryColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Celestial Events"
        component={AstronomyPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "moon" : "moon-outline"}
              size={28}
              color={focused ? colors.flashColor : colors.primaryColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigate}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "settings" : "settings-outline"}
              size={28}
              color={focused ? colors.flashColor : colors.primaryColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
