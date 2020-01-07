import React from 'react';

import { Button } from '@ant-design/react-native';
import { Text, View } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            // <Button
            //     title="CAO"
            //     onPress={() => navigate('Profile', { name: 'Jane' })}
            // />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                PRFIOLE
            </Text>
            </View>

        );
    }
}

export default ProfileScreen;