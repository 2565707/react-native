import React from 'react';

import { Text, View } from 'react-native';

class SimpleScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Sign Up
                </Text>
            </View>

        );
    }
}

export default SimpleScreen;