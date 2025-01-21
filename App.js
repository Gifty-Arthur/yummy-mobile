import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import GetStarted from './component/GetStarted';
import SignUp from './component/SignUp';
import Footer from './component/Footer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeScreen">
          {(props) => (
            <View style={styles.screen}>
              <HomeScreen {...props} />
              <Footer navigation={props.navigation} />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="WishlistScreen">
          {(props) => (
            <View style={styles.screen}>
              {/* Replace with your Wishlist screen */}
              <Text>Wishlist Screen</Text>
              <Footer navigation={props.navigation} />
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
