import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import GetStarted from './component/GetStarted';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn'







const Stack = createStackNavigator();

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    // Set a timer to transition from SplashScreen to onboarding
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); // Show SplashScreen for 3 seconds

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
        <Stack.Screen name="SignUp" component={SignUp} />
        

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});