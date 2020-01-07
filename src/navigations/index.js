import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/Loading/Auth';
import AuthStack from './AuthStack';
import BottomTabStack from './BottomTab';

export default createAppContainer(
    createSwitchNavigator(
        {
            // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            AuthLoading: AuthLoadingScreen,
            Auth: AuthStack,
            App: BottomTabStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);