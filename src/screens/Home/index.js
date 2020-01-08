import React from 'react';

// import { Button } from '@ant-design/react-native';
import { Text, View } from 'react-native';
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            // <Button
            //     title="Go to Jane's profile"
            //     onPress={() => navigate('Profile', { name: 'Jane' })}
            // />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    HOME
                </Text>
            </View>
        );
    }
}

export default HomeScreen;