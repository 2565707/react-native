/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';

import AppNavigator from './navigations';


export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  return (
    <View style={styles.container}>
      {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />} */}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});