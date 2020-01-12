import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Message from "../../screens/Message";
import Contact from "../../screens/Contact";

import {
    Button,
    Text,
    Icon,
    Item,
    Footer,
    FooterTab,
    Label
} from "native-base";

export default createBottomTabNavigator(
    {
        Message: { screen: Message },
        Contact: { screen: Contact },
    },
    {
        initialRouteName: 'Message',
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            // active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("Message")}
                        >
                            <Icon name="bowtie" />
                            <Text>Message</Text>
                        </Button>
                        <Button
                            vertical
                            // active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("Contact")}
                        >
                            <Icon name="briefcase" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
);