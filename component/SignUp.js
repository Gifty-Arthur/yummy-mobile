import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Basic validation
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    // Handle sign-up logic here
    Alert.alert('Success', `Welcome, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an {'\n'} account</Text>

      <View styles={styles.inputContainer}>
      <FontAwesome name="user" size={20} color="#626262" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="username or Email"
          
          placeholderTextColor="#888"
          value={name}
          onChangeText={text => setName(text)}
        
        />
        
      </View>


      <View style={styles.iconPass}>
        <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#626262"   style={styles.inputIcon}  />
          <TextInput
            style={styles.input}
            placeholder="Password"
        
            placeholderTextColor="#888"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        {/* <FontAwesome6 name="eye" size={20} color="#626262"   style={styles.PIcon}   /> */}
      </View>
      <View style={styles.iconPass}>
        <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#626262"   style={styles.inputIcon}  />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
        
            placeholderTextColor="#888"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        {/* <FontAwesome6 name="eye" size={20} color="#626262"   style={styles.PIcon}   /> */}
      </View>
     
     <Text>By clicking the Register button, you agree{'\n'} to the public offer</Text>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.linkText}>Log In</Text>
      </Text>
    </View>
  );
};

export default SignUp;

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
    marginTop: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
    color: '#888',
  },
  linkText: {
    color: '#F83758',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row', // Align items in a row
    
    
   
  },
  inputIcon:{
    marginTop: 55,
    position: 'absolute',
    paddingLeft: 10
  }, 
  iconPass:{
    flexDirection: 'row',
    
  },
  PIcon:{
    justifyContent: 'space-between',
    marginRight: 15,
    marginTop: 65
  }
});
