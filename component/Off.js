import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Off = () => {
  return (
    <View style={styles.container}>
      <View style={{
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: 10
      }}>
        
        <View>
          {/* im1 */}
          <Image source={require('../assets/Images/h2.png')} />
          <Text>Beauty</Text>
        </View>
        {/* 2 */}
        <View>
    
          <Image source={require('../assets/Images/f1.png')} />
          <Text>Fashion</Text>
        </View>
        {/* 3 */}
        <View>
    
          <Image source={require('../assets/Images/f2.png')} />
          <Text>Kids</Text>
        </View>
        {/* 4 */}
        <View>
    
          <Image source={require('../assets/Images/f3.png')} />
          <Text>Men</Text>
        </View>
        {/* 5 */}
        <View>
    
          <Image source={require('../assets/Images/f5.png')} />
          <Text>Womens</Text>
        </View>
      </View>
    </View>
  )
}

export default Off

const styles = StyleSheet.create({
  container: {
    flex:1,
  
  }
})