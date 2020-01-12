import React from 'react';

import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text,
    Card,
    CardItem,
    Button,
    Icon,
    Title
} from 'native-base';

class SimpleScreen extends React.Component {
    render() {
        return (
            <Container>
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
                        <Title>Message</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://www.dhresource.com/600x600/f2/albu/g4/M01/F4/11/rBVaEVci7DmAC233AACFOCpi0bg322.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>

        );
    }
}


export default SimpleScreen;