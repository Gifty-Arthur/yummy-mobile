import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <SafeAreaView >
      <View>
        <TextInput/>
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})