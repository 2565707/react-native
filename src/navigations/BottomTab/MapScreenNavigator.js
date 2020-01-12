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

import MapView from "../../screens/MapView";
import ListView from "../../screens/ListView";

const routes = {
    MapView: { screen: MapView },
    ListView: { screen: ListView }
}

export default createBottomTabNavigator(
    routes,
    {
        initialRouteName: 'MapView',
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            // active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("MapView")}
                        >
                            <Icon name="bowtie" />
                            <Text>MapView</Text>
                        </Button>
                        <Button
                            vertical
                            // active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("ListView")}
                        >
                            <Icon name="briefcase" />
                            <Text>ListView</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
);