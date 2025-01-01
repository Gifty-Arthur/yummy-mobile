import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'


const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('../assets/Images/g2.png')}
      style={styles.background}
      >
        
          <View style={styles.colContainer}>
              <Text style={styles.text}>You want{'\n'} Authentic, here {'\n'} you go!</Text>
              <Text style={styles.textsm}>Find it here, buy it now</Text>
              
                <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('SignUp')}> 
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
              
          </View>
      </ImageBackground>
      
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        flex: 1,
    resizeMode: 'cover', // Scale image to fill screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally


    },
    text:{
        fontSize: 34,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40
    },
    textsm:{
        color: "#F2F2F2",
        fontSize: 18,
        textAlign: 'center',
        margin: 2
    },
    btn:{
        backgroundColor: '#F83758', // Button background color
        paddingVertical: 10, // Vertical padding
        paddingHorizontal: 50, // Horizontal padding
        marginTop: 70,
        width: 300,
        
        alignItems: 'center'
    },
    colContainer:{
        marginTop: '100%',
        paddingTop: 90,
    },
    buttonText: {
        color: '#fff', // Text color
        fontSize: 24, // Font size
        fontWeight: 'bold', // Bold text
        textAlign: 'center', // Center the text
      },
})