import { StatusBar } from 'expo-status-bar';

import OnBoarding from './pages/OnBoarding';
import OnBoardingName from './pages/OnBoardingName';
import OnBoardingCity from './pages/OnBoardingCity';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoardingCity'>
        <Stack.Screen name='OnBoarding' component={OnBoarding}
         options={{ headerShown: false }}/>
        <Stack.Screen name='OnBoardingName' component={OnBoardingName} options={{ headerShown: false }}/>
        <Stack.Screen name='OnBoardingCity' component={OnBoardingCity} options={{ headerShown: false }}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  )
}


