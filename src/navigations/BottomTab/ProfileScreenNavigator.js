import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from '../../screens/Profile';
import SettingsScreen from '../../screens/Settings';

export default createStackNavigator(
    {
        Profile: { screen: ProfileScreen },
        Settings: { screen: SettingsScreen }
    },
    {
        initialRouteName: 'Profile',
        headerMode: null
    }
);