import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
    Button,
    Text,
    Icon,
    Item,
    Footer,
    FooterTab,
    Label
} from "native-base";

import Booking from '../../screens/Booking';
import Calendar from '../../screens/Calendar';

export default createBottomTabNavigator(
    {
        Booking: { screen: Booking },
        Calendar: { screen: Calendar }
    },
    {
        initialRouteName: 'Booking',
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            // active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("Booking")}
                        >
                            <Icon name="bowtie" />
                            <Text>Booking</Text>
                        </Button>
                        <Button
                            vertical
                            // active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("Calendar")}
                        >
                            <Icon name="briefcase" />
                            <Text>Calendar</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
);