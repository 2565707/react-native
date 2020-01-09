import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

export default createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        Profile: { screen: ProfileStack }
    },
    {
        initialRouteName: 'Profile',
        defaultNavigationOptions: ({ navigation }) => ({
            // tabBarIcon: ({ focused, tintColor }) => {
            //     const { routeName } = navigation.state;
            //     let iconName;
            //     if (routeName === 'Home') {
            //         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            //     } else if (routeName === 'Settings') {
            //         iconName = `ios-options${focused ? '' : '-outline'}`;
            //     }

            //     // You can return any component that you like here! We usually use an
            //     // icon component from react-native-vector-icons
            //     return <Icon name="account-book" size="md" color="red" />;
            // },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
)