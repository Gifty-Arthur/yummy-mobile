import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Sponsered = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
      <Image source={require('../assets/Images/n1.png')} />
   
        
      </View>
      <View style={{
        marginTop: 20
             }}>
           <View style={{
             flexDirection: 'row',
              alignContent: 'center',
               justifyContent: 'space-between'
                 }}>
            <View>
            <Text style={styles.text}>New Arrivals</Text>
            <Text>Summer' 25 Collection</Text>
              </View>
                <View style={{
                  flexDirection: 'row',
                  paddingLeft: 7,
                  backgroundColor: '#F83758',
                  width: 102,
                  height: 29,
                  marginTop: 10
                  }}>
                  <Text style={{color: '#fff', marginTop: 3,padding: 2}}>Visit Now</Text>
                  <FontAwesome name='arrow-right' color='#fff' size={16} style={{marginTop: 7, paddingLeft: 8}}/>
                </View>
               </View>
            
        <View>

        </View>
        
      </View>
    <View>
      <Text  style={{
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold'
    }}>Sponsored</Text>

<View style={{
  marginTop: 20,
  alignItems: 'center'
}}>
  <Image source={require('../assets/Images/d9.png')} />
</View>
    </View>

    </View>
  )
}

export default Sponsered

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20

    }
}) 
;
