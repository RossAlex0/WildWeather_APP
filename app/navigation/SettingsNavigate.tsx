import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsPage from '../screens/SettingsPage';
import BackButton from '../components/BackButton';

export default function SettingsNavigate(){

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name='SettingsPage' component={SettingsPage}
            options={{
                headerTitleStyle: {
                  fontWeight: '800',
                  fontSize: 22,
                  color: '#0E0C5E',
                },
                headerTitleAlign: 'center',
                headerLeft: () => <BackButton />,
                }} />
        </Tab.Navigator>
        
    )
}