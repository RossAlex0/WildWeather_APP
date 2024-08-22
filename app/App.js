import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoarding from './screens/OnBoarding';
import OnBoardingName from './screens/OnBoardingName';
import OnBoardingCity from './screens/OnBoardingCity';
import HomeNavigate from './navigation/HomeNavigate';
import LoadingPage from './components/LoadingPage';

import WeatherContext from './services/context/WeatherContext';
import storage from './services/storage';

export default function App() {
  const Stack = createNativeStackNavigator();

  const { loadCity } = storage

  const [data, setData] = useState()
  const [ userCity, setUserCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);


  useEffect(() => {
    const loadCityData = async () => {
      await loadCity(setUserCity);
      setLoading(false);
    };
    loadCityData();
  }, []);

  if(loading){
    return <LoadingPage/>
  };
  
  return (
    <WeatherContext.Provider value={{data: data, setData: setData, setIsSignedIn: setIsSignedIn}}>
      <NavigationContainer>
       <Stack.Navigator >
        {!isSignedIn && userCity === "" ? (
          <>
          <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ headerShown: false }}/>
          <Stack.Screen name='OnBoardingName' component={OnBoardingName} options={{ headerShown: false }}/>
          <Stack.Screen name='OnBoardingCity' component={OnBoardingCity} options={{ headerShown: false }}/>
          </>
        ):(
          <>
          <Stack.Screen name='HomeNav' component={HomeNavigate} options={{ headerShown: false}} />
          </>
        )}
        </Stack.Navigator>  
        <StatusBar />
      </NavigationContainer>
    </WeatherContext.Provider>
  )
}




