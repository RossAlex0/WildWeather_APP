import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoarding from './pages/OnBoarding';
import OnBoardingName from './pages/OnBoardingName';
import OnBoardingCity from './pages/OnBoardingCity';
import HomePage from './pages/HomePage';

import storage from './services/storage';


export default function App() {
  const Stack = createNativeStackNavigator();
  const { loadCity } = storage;
  const [userCity, setUserCity] = useState("");

  useEffect(() => {
    loadCity(setUserCity)
  },[]);
  
  return (
    
    <NavigationContainer>
      {userCity !== null
      ? <Stack.Navigator initialRouteName='OnBoarding'>
          <Stack.Screen name='OnBoarding' component={OnBoarding}
          options={{ headerShown: false }}/>
          <Stack.Screen name='OnBoardingName' component={OnBoardingName} options={{ headerShown: false }}/>
          <Stack.Screen name='OnBoardingCity' component={OnBoardingCity} options={{ headerShown: false }}/>
          <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false}} />
        </Stack.Navigator>
      : <Stack.Navigator initialRouteName='HomePage'>
          <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false}} />
        </Stack.Navigator>
      }
        <StatusBar style="auto" />
    </NavigationContainer>
    
  )
}


