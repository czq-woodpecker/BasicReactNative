/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const App: () => ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={styles.title}>Hello World!</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
