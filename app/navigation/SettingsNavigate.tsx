import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsPage from '../screens/SettingsPage';
import Profile from '../screens/settingsScreen/Profile';
import Localisation from '../screens/settingsScreen/Localisation';
import Language from '../screens/settingsScreen/Language';
import Contact from '../screens/settingsScreen/Contact';
import BackButton from '../components/BackButton';

export default function SettingsNavigate(){

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: { display: 'none' }
        }}>
            <Tab.Screen name='SettingsPage' component={SettingsPage} 
            options={{ 
                headerShown: false,
                tabBarStyle: { display: 'none' }
            }} />
            <Tab.Screen name='Profile' component={Profile} 
            options={{ 
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
            },
            headerTintColor: '#0E0C5E',
            headerLeft: () => <BackButton />,
            }}/>
            <Tab.Screen name='Localisation' component={Localisation} 
            options={{ 
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
            },
            headerTintColor: '#0E0C5E',
            headerLeft: () => <BackButton />,
            }}/>
            <Tab.Screen name='Language' component={Language} 
            options={{ 
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
            },
            headerTintColor: '#0E0C5E',
            headerLeft: () => <BackButton />,
            }}/>
            <Tab.Screen name='Contact' component={Contact} 
            options={{ 
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
            },
            headerTintColor: '#0E0C5E',
            headerLeft: () => <BackButton />,
            }}/>
        </Tab.Navigator>
        
    )
}