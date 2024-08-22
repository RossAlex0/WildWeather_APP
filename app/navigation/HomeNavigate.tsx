import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsNavigate from './SettingsNavigate';
import AstronomyPage from '../screens/AstronomyPage';
import BackButton from '../components/BackButton';
import HomePage from '../screens/HomePage';

export default function HomeNavigate(){

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name='HomePage' component={HomePage} options={{ headerShown: false }}/>
            <Tab.Screen name='SettingsNav' component={SettingsNavigate} options={{ headerShown: false}}/>
            <Tab.Screen name='Celestial Events' component={AstronomyPage} 
                options={{
                headerTitleStyle: {
                    fontWeight: '800',
                    fontSize: 22,
                    color: '#0E0C5E',
                },
                headerTitleAlign: 'center',
                headerLeft: () => <BackButton />,
                }} 
            />
        </Tab.Navigator>
        
    )
}