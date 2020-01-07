import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from '../../screens/Profile';

export default createStackNavigator({
    Profile: { screen: ProfileScreen },
});