import React from 'react';

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
    Separator ,
    List,
     ListItem,
} from 'native-base';

class ContactScreen extends React.Component {
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
                        <Title>Contact</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Lee Allen</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>MIDFIELD</Text>
                    </Separator>
                    <ListItem>
                        <Text>Caroline Aaron</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Lee Allen</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

export default ContactScreen;