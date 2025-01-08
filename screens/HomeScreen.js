import React, { useRef } from 'react';
import { StyleSheet, View, Image, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import Entypo from '@expo/vector-icons/Entypo';
import { TextInput } from 'react-native-gesture-handler';
import Off from '../component/Off';

const HomeScreen = () => {
  const drawer = useRef(null);

  const navigationView = () => (
    <View style={styles.sidebar}>
      <View style={styles.menuItems}>
        <Text style={styles.sidebarTitle}>Menu</Text>
        <Text style={styles.sidebarItem}>Home</Text>
        <Text style={styles.sidebarItem}>Trending Product</Text>
        <Text style={styles.sidebarItem}>Shop page</Text>
        <Text style={styles.sidebarItem}>Profile</Text>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <DrawerLayout
      ref={drawer}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <View style={styles.container}>
          <View style={styles.rowheader}>
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
              <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
            <Image source={require('../assets/Images/s11.png')} />
            <View>
              <Image source={require('../assets/Images/h1.png')} />
            </View>
          </View>
          {/* search */}
          <View style={styles.searchbar}>
            <Entypo name="magnifying-glass" size={20} color="gray" style={{ marginRight: 10 }} />
            <TextInput
              style={styles.input}
              placeholder='Search'
              placeholderTextColor='gray'
            />
          </View>
          {/* all feature */}
          <View style={styles.feature}>
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>All Featured</Text>
            {/* sort */}
            <View style={{ flexDirection: 'row', marginLeft: 10, justifyContent: 'space-between', width: 150 }}>
              <View style={{ borderRadius: 6, backgroundColor: '#fff', width: 61, height: 24 }}>
                <Text style={{ textAlign: 'center' }}>Sort</Text>
              </View>
              {/* filter */}
              <View style={{ borderRadius: 6, backgroundColor: '#fff', width: 61, height: 24 }}>
                <Text style={{ textAlign: 'center' }}>Filter</Text>
              </View>
            </View>
          </View>
          <Off />
        </View>
      </ScrollView>
    </DrawerLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,
  },
  rowheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
    paddingVertical: 30,
    marginTop: 30,
    borderRadius: 7,
  },
  menuItems: {
    flex: 1,
  },
  sidebarTitle: {
    fontSize: 28,
    marginTop: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
  },
  sidebarItem: {
    fontSize: 18,
    marginBottom: 10,
    paddingVertical: 10,
    color: '#000',
  },
  logoutContainer: {
    justifyContent: 'flex-end',
  },
  logoutText: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});