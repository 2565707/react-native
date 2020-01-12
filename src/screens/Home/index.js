import React from 'react';

import { Image, RefreshControl } from 'react-native';

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

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            repeatCard: ['Apple', 'Banana', 'Penapple']
        }
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        setTimeout(() => this.setState({ refreshing: false }), 3000);
    }


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
                        <Title>HomeScreen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                }>
                    {this.state.repeatCard.map((value) => (
                        <Card key={value}>
                            <CardItem>
                                <Left>
                                    <Thumbnail
                                        source={{ uri: 'https://cdn.dribbble.com/users/2582637/screenshots/5649660/image.png' }}
                                    />
                                    <Body>
                                        <Text>NativeBase</Text>
                                        <Text note>GeekyAnts</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image
                                    source={{ uri: 'https://vignette.wikia.nocookie.net/naruto/images/d/d6/Jiraiya_pose.png/revision/latest?cb=20150123152652' }}
                                    style={{ height: 200, width: null, flex: 1 }}
                                />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="thumbs-up" />
                                        <Text>12 Likes</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>4 Comments</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>11h ago</Text>
                                </Right>
                            </CardItem>
                        </Card>

                    ))}
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;