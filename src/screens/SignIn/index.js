import React from 'react';

import {
    AsyncStorage,
    StyleSheet,
    View,
} from 'react-native';

import { Button } from '@ant-design/react-native';

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this._signInAsync} >
                    Sign In
                     </Button>
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SignInScreen;