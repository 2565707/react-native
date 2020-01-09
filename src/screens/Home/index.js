import React from 'react';

import { Text, View } from 'react-native';
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    HOME
                </Text>
            </View>
        );
    }
}

export default HomeScreen;