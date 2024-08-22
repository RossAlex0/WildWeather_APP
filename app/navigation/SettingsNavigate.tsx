import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsPage from '../screens/SettingsPage';
import BackButton from '../components/BackButton';

export default function SettingsNavigate(){

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name='SettingsPage' component={SettingsPage} 
            options={{ 
                headerShown: false,
                tabBarStyle: { display: 'none' }
            }} />
        </Tab.Navigator>
        
    )
}