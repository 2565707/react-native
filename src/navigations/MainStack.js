import React from "react";

import { createDrawerNavigator } from 'react-navigation-drawer';

import SideBar from '../components/SideBar';


import HomeScreen from '../screens/Home';
// import ProfileScreen from '../screens/Profile';

import MapScreenNavigator from './BottomTab/MapScreenNavigator';
import MessageScreenNavigator from './BottomTab/MessageScreenNavigator';
import AgendaScreenNavigator from './BottomTab/AgendaScreenNavigator';
import ProfileScreenNavigator from './BottomTab/ProfileScreenNavigator';


const routes = {
  Home: { screen: HomeScreen },
  Map: { screen: MapScreenNavigator },
  Message: { screen: MessageScreenNavigator },
  Agenda: { screen: AgendaScreenNavigator },
  Profile: { screen: ProfileScreenNavigator },
}


export default createDrawerNavigator(
  routes,
  {
    initialRouteName: 'Profile',
    tabBarComponent: props => <SideBar routes={Object.keys(routes)} {...props} />
  }
);

