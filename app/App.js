import { StatusBar } from 'expo-status-bar';

import OnBoarding from './pages/OnBoarding';
import OnBoardingName from './pages/OnBoardingName';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  const themes = {
    colors:{
      flex: 1,
      backgroundColor: '#D5E8FF',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoardingName'>
        <Stack.Screen name='OnBoarding' component={OnBoarding}
         options={{ headerShown: false }}/>
        <Stack.Screen name='OnBoardingName' component={OnBoardingName} options={{ headerShown: false }}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  )
  
  // return (
  //   <View style={stylesApp.container}>
  //     <OnBoarding />
  //     <StatusBar style="auto" />
  //   </View>
  // );
}


