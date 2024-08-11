import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoarding from './pages/OnBoarding';
import OnBoardingName from './pages/OnBoardingName';
import OnBoardingCity from './pages/OnBoardingCity';
import HomePage from './pages/HomePage';

import storage from './services/storage';
import getWeather from './services/getWeather';

export default function App() {
  const Stack = createNativeStackNavigator();
  const { loadCity } = storage;
  const [userCity, setUserCity] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async() => {
      try{
        await loadCity(setUserCity)
        const weatherData = await getWeather(userCity)
        setData(weatherData)
      }catch (err){
        console.errror(err)
      }
    }
    getData()
},[]);
  
  return (
    
    <NavigationContainer>
       <Stack.Navigator 
       initialRouteName={userCity !== null ? 'HomePage' : 'OnBoarding'}>
          <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ headerShown: false }}/>
          <Stack.Screen name='OnBoardingName' component={OnBoardingName} options={{ headerShown: false }}/>
          <Stack.Screen name='OnBoardingCity' component={OnBoardingCity} options={{ headerShown: false }}/>
          <Stack.Screen name='HomePage' options={{ headerShown: false}}>
          {(props) => <HomePage {...props} extraData={data} />}
          </Stack.Screen>
          
        </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
    
  )
}


