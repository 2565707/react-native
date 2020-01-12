import React from 'react';

import { StyleSheet } from 'react-native';
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
    Title
} from 'native-base';
class SimpleScreen extends React.Component {
    render() {
        return (
            <Container >
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>
                            ListView
                        </Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                        ListView
                </Text>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SimpleScreen;