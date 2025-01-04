import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('HomeScreen'); // Navigate to the SignIn page
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an {'\n'} Account</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <Text
        style={{
          color: '#676767',
          marginTop: 10,
          fontSize: 12,
        }}
      >
        By clicking the <Text style={{ color: '#FF4B26' }}>Register</Text> button, you agree{'\n'} to the public offer.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create an Account</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: '#575757',
          textAlign: 'center',
          marginTop: 15,
          fontSize: 12,
        }}
      >
        -OR Continue with-
      </Text>

      <View style={styles.rowContainer}>
        {/* Social Login Buttons */}
      </View>

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('SignIn')}>
          Log In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;

// Styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#A8A8A9',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 40,
    fontSize: 16,
    paddingLeft: 30,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#F83758',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  linkText: {
    color: '#F83758',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row', // Align items in a row
  },
  inputIcon: {
    marginTop: 55,
    position: 'absolute',
    paddingLeft: 10,
  },
  iconPass: {
    flexDirection: 'row',
  },
  googleButton: {
    height: 50,
    width: 50,
    borderRadius: 25, // Fully rounded
    borderWidth: 2,
    borderColor: '#F83758',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    alignSelf: 'center', // Align the button at the center of the screen
    marginTop: 20, // Add space above the button
    marginHorizontal: 8
  },
  rowContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,



  }
});