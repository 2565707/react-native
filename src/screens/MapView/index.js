import React from 'react';

import MapView from 'react-native-maps';

import { StyleSheet, Dimensions } from 'react-native';

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Text,
    Body,
    Thumbnail,
    Left,
    Right,
    Button,
    Icon,
    Title,
    Item,
    Input
} from 'native-base';

class MapScreen extends React.Component {
    render() {
        const { height, width } = Dimensions.get('window');
        const initialRegion = {
            latitude: 43.65,
            longitude: -79.38,
            latitudeDelta: 0.28,
            longitudeDelta: 0.28 * (width / height),
        }
        return (
            <Container>
                <Header searchBar rounded>
                    <Left style={{ flex: 0.12 }}>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Item style={{ flex: 0.88 }}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                </Header>
                <Content>
                    <MapView style={styles.mapStyle}
                        initialRegion={initialRegion}
                    />
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
export default MapScreen;