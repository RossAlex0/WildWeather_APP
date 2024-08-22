import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoarding from './pages/OnBoarding';
import OnBoardingName from './pages/OnBoardingName';
import OnBoardingCity from './pages/OnBoardingCity';
import HomePage from './pages/HomePage';

import WeatherContext from './services/context/WeatherContext';
import storage from './services/storage';
import LoadingPage from './components/LoadingPage';
import { defaultWeather } from './types/weatherContextTypes';
import AstronomyPage from './pages/AstronomyPage';
import BackButton from './components/BackButton';


export default function App() {
  const Stack = createNativeStackNavigator();

  const { loadCity } = storage

  const [data, setData] = useState(defaultWeather)
  const [ userCity, setUserCity] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCityData = async () => {
      await loadCity(setUserCity);
      setLoading(false); 
    };

    loadCityData();
  }, []);

  if(loading){
    return <LoadingPage />
  }
  
  return (
    <WeatherContext.Provider value={{data: data, setData: setData}}>
      <NavigationContainer>
       <Stack.Navigator 
        initialRouteName={userCity !== "" ? 'HomePage' : 'OnBoarding'}>
          <Stack.Screen name='OnBoarding' component={OnBoarding} options={{ headerShown: false }}/>
          <Stack.Screen name='OnBoardingName' component={OnBoardingName} options={{ headerShown: false }}/>
          <Stack.Screen name='OnBoardingCity' component={OnBoardingCity} options={{ headerShown: false }}/>
          <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false}} />
          <Stack.Screen name='Celestial Events' component={AstronomyPage} options={{ headerShown: true,  headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            },
            headerTintColor: '#0E0C5E',
            headerLeft: () => <BackButton />,
          }} />
        </Stack.Navigator>  
        <StatusBar style="auto" />
      </NavigationContainer>
    </WeatherContext.Provider>
  )
}




