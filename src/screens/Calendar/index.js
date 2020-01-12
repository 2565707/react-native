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
    Title
} from 'native-base';

class CalendarScreen extends React.Component {
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
                        <Title>Calendar</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Card >
                        <CardItem>
                            <Text>Calendar</Text>
                        </CardItem>

                    </Card>
                </Content>
            </Container>

        );
    }
}


export default CalendarScreen;