import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';

export default createStackNavigator({
  SignIn: { screen: SignInScreen },
  SignUpScreen: { screen: SignUpScreen },
});


