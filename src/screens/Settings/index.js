import React from 'react';

import { Button } from '@ant-design/react-native';
import { AsyncStorage, View } from 'react-native';

class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button type="warning" onPress={this._signOutAsync}>Sign Out</Button>
            </View>

        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

}

export default SettingsScreen;