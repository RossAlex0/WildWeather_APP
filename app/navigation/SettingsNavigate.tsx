import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsPage from '../screens/SettingsPage';
import Profile from '../screens/Profile';
import Localisation from '../screens/Localisation';
import Language from '../screens/Language';
import Contact from '../screens/Contact';

export default function SettingsNavigate(){

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name='SettingsPage' component={SettingsPage} 
            options={{ 
                headerShown: false,
                tabBarStyle: { display: 'none' }
            }} />
            <Tab.Screen name='Profile' component={Profile}/>
            <Tab.Screen name='Localisation' component={Localisation}/>
            <Tab.Screen name='Language' component={Language}/>
            <Tab.Screen name='Contact' component={Contact}/>
        </Tab.Navigator>
        
    )
}