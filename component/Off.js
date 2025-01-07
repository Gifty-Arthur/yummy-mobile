import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import dresses from './data';

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
      <ImageBackground 
        source={require('../assets/Images/f6.png')} 
        style={styles.image}
      >
        <View style={{
          paddingVertical: 20,
          padding:15
        }}>
          <Text style={styles.text}>50 - 40% OFF</Text>
          <Text style={{
            color: '#fff',
            marginTop: 8,
            fontWeight: '300',
            fontSize: 12
          }}>Now in (product) {'\n'} All colors </Text>
          <TouchableOpacity>
            <View style={{
              width: 120,
              height: 32,
              borderRadius: 6,
              borderWidth: 2,
              borderColor: '#fff',
              marginTop:30
            }}>
            <View style={{
              flexDirection: 'row',
              paddingLeft: 7
            }}>
              <Text style={{color: '#fff', marginTop: 3,padding: 2}}>Shop Now</Text>
              <FontAwesome name='arrow-right' color='#fff' size={16} style={{marginTop: 7, paddingLeft: 8}}/>
            </View>
            </View>
          </TouchableOpacity>

         
        </View>

      </ImageBackground>


      <View style={{
      width: '95%',
      height: 60,
      backgroundColor: '#4392F9',
      marginTop: 20,
      marginLeft: 10,
      borderRadius: 8
      
      
        
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 1
        }}>
          <View>
          
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 6, marginTop: 5}}>Deal of the Day</Text>
              <Text style={{color: '#fff', fontSize: 12, marginTop: 10,marginLeft: 6 }}>22h 55m 20s remaining</Text>
          </View>
          <TouchableOpacity>
              <View style={{
                width: 120,
                height: 32,
                borderRadius: 6,
                borderWidth: 2,
                borderColor: '#fff',
                marginTop: 10,
                marginRight: 8
                
              }}>
              <View style={{
                flexDirection: 'row',
                paddingLeft: 7
              }}>
                <Text style={{color: '#fff', marginTop: 3,padding: 2}}>View All</Text>
                <FontAwesome name='arrow-right' color='#fff' size={16} style={{marginTop: 7, paddingLeft: 8}}/>
              </View>
              </View>
            </TouchableOpacity>
        </View>
      
            
          </View>


          {/* data.js */}
          {dresses.map((dress) => (
        <View key={dress.id} style={styles.card}>
          <Image source={dress.image} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{dress.title}</Text>
            <Text style={styles.subtitle}>{dress.subtitle}</Text>
            <Text style={styles.price}>${dress.price}</Text>
            <Text style={styles.rate}>{dress.rate}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default Off

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  
  },
  image: {
    width:170,  // Adjust size as needed
    height: 200, // Adjust size as needed
    
    borderRadius: 16,
    marginLeft: 9,
    marginTop: 10

    // Align content horizontally
  },
  text: {
    color: '#fff', // Change color for better visibility
    fontSize: 20,
    fontWeight: 'bold',
  },


  cardContent: {
    flexDirection: 'row',


  },
  
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  rate: {
    fontSize: 12,
    color: '#FFD700', // Gold color for stars
  },
})