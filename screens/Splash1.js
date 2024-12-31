// Splash1.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Splash1 = () => (
  <View style={styles.container}>
    <Text>Welcome to Splash1</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Splash1;
