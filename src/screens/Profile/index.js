import React from 'react';

import { Text, View } from 'react-native';

import { Button, Icon } from '@ant-design/react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigate, navigation }) => ({
        headerTitle: 'Profile',
        headerRight: () => (
            <Icon
                name="setting"
                color="black"
                size="lg"
                onPress={() => navigation.navigate(`Settings`)}
            />
        ),
        // headerRightContainerStyle: {
        //     paddingRight: 40
        // }
    });
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text type="primary">Profile</Text>
            </View>
        );
    }
}

export default ProfileScreen;