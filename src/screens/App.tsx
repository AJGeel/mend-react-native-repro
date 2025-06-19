import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Screen } from '../components/Screen';

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.hide();

const App = () => (
  <SafeAreaProvider
    initialMetrics={initialWindowMetrics}
    style={styles.container}>
    <StatusBar />
    <Screen />
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default App;
