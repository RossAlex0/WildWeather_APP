import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import OnBoarding from './pages/OnBoarding';

import stylesApp from './styles/styleApp';

export default function App() {
  
  return (
    <View style={stylesApp.container}>
      <OnBoarding />
      <StatusBar style="auto" />
    </View>
  );
}


