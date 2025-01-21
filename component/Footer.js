import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Use Expo Icons for Home and Wishlist

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('HomeScreen')}>
        <FontAwesome name="home" size={24} color="white" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('WishlistScreen')}>
        <FontAwesome name="heart" size={24} color="white" />
        <Text style={styles.iconText}>Wishlist</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'grey',
    shadowRadius: 10,
    height: 60,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});
