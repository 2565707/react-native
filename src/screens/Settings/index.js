import React from 'react';

import { AsyncStorage, View, Button } from 'react-native';

class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Sign Out" color="#f194ff" onPress={this._signOutAsync} />
            </View>

        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

}

export default SettingsScreen;