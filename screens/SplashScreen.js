import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image 
          source={require('../assets/Images/she.jpg')} 
          style={styles.splash}
        />
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash: {
    resizeMode: 'contain',
    flex: 1,
  },
});