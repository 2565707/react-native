import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

class SimpleScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Simple
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SimpleScreen;