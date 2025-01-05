import React, { useRef } from 'react';
import { StyleSheet, View, Image, Text, DrawerLayoutAndroid, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const HomeScreen = () => {
  const drawer = useRef(null);

  const navigationView = () => (
    <View style={styles.sidebar}>
      <View style={styles.menuItems}>
        <Text style={styles.sidebarTitle}>Menu</Text>
        <Text style={styles.sidebarItem}>Home</Text>
        <Text style={styles.sidebarItem}>Profile</Text>
        <Text style={styles.sidebarItem}>Settings</Text>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <View style={styles.rowheader}>
          <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
            <Entypo name="menu" size={24} color="black" />
          </TouchableOpacity>
          <Image source={require('../assets/Images/s11.png')} />
          <Image source={require('../assets/Images/h1.png')} />
        </View>
        <Text style={styles.content}>Welcome to the Home Screen!</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  content: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#4392F9',
    padding: 20,
    justifyContent:'space-between',
    paddingVertical: 30 ,
    marginTop: 30 // Ensures items are spaced correctly
  },
  menuItems: {
    flex: 1,
  },
  sidebarTitle: {
    fontSize: 28,
    marginTop: 20,
    fontWeight: 'bold',
    marginBottom: 70,
    color: '#fff'
  },
  sidebarItem: {
    fontSize: 18,
    marginBottom: 25,
    paddingVertical: 10,
    color: '#fff'
  },
  logoutContainer: {
    justifyContent: 'flex-end',
  },
 
   
  logoutText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
