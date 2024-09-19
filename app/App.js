import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoarding from "./screens/OnBoarding";
import OnBoardingName from "./screens/OnBoardingName";
import OnBoardingCity from "./screens/OnBoardingCity";
import OnBoardingLog from "./screens/OnBoardingLog";
import OnBoardingPassword from "./screens/OnBoardingPassword";
import HomeNavigate from "./navigation/HomeNavigate";
import LoadingPage from "./components/LoadingPage";

import UserContext from "./services/context/UserContext";
import WeatherContext from "./services/context/WeatherContext";

import { getDataStorage } from "./services/storage";
export default function App() {
  const Stack = createNativeStackNavigator();

  const [userInfo, setUserInfo] = useState();

  const [data, setData] = useState();
  const [isSigned, setIsSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSigned) {
      const getStorage = async () => {
        setLoading(true);
        const dataStorage = await getDataStorage();
        setUserInfo(dataStorage);
        setLoading(false);
      };
      getStorage();
    }
  }, [isSigned]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <WeatherContext.Provider value={{ data, setData }}>
      <UserContext.Provider value={{ userInfo, setUserInfo, setIsSigned }}>
        <NavigationContainer>
          <Stack.Navigator>
            {!userInfo || (userInfo.city === "" && !isSigned) ? (
              <>
                <Stack.Screen
                  name="OnBoarding"
                  component={OnBoarding}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OnBoardingName"
                  component={OnBoardingName}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OnBoardingCity"
                  component={OnBoardingCity}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OnBoardingLog"
                  component={OnBoardingLog}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OnBoardingPassword"
                  component={OnBoardingPassword}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="HomeNav"
                  component={HomeNavigate}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
          <StatusBar />
        </NavigationContainer>
      </UserContext.Provider>
    </WeatherContext.Provider>
  );
}
