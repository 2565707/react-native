import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/Loading/Auth';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default createAppContainer(
    createSwitchNavigator(
        {
            // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            AuthLoading: AuthLoadingScreen,
            Auth: AuthStack,
            App: MainStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);