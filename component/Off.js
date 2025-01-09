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
          
        <View  style={{  flexDirection: 'row',
       alignContent: 'center',
       justifyContent: 'space-between',
       padding: 10}}>
           <View>
             <Image source={require('../assets/Images/d1.png')} />
             <Text style={styles.imagetext}>Women Printed Kurta</Text>
             <Text style={{fontSize: 10, fontWeight: 'regular'}}>Neque porro quisquam est qui {'\n'}dolorem ipsum quia</Text>
             <Text style={{fontSize: 12, fontWeight: 'medium'}}>$1500</Text>

             <Text>⭐️⭐️⭐️⭐️⭐️</Text>
           </View>
           <View >
             <Image source={require('../assets/Images/d2.png')} />
               <Text style={styles.imagetext}>HRX by Hrithik Roshan</Text>
               <Text style={{fontSize: 10, fontWeight: 'regular'}}>Neque porro quisquam est qui {'\n'}dolorem ipsum quia</Text>
               <Text style={{fontSize: 12, fontWeight: 'medium'}}>$2499</Text>
               <Text>⭐️⭐️⭐️⭐️⭐️</Text>
           </View>

        
        </View>

        {/* special offer */}
        <View style={styles.specialflex}>
          <Image source={require('../assets/Images/d3.png')} />
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Special Offers 😱</Text>
            <Text style={styles.anysmall}>We make sure you get the {'\n'}offer you need at best prices</Text>
          </View>
        </View>
<View style={{marginTop: 10}}>
  
          <ImageBackground
          source={require('../assets/Images/dg.png')}
          style={styles.image}
        >
           <View style={{flexDirection: 'row'}}>
             <Image source={require('../assets/Images/d4.png')} />
             <View>
               <Text style={{fontSize: 18, fontWeight: 'bold'}}>Flat and Heels</Text>
               <Text style={styles.anysmall}>Stand a chance to get rewarded</Text>
               <View style={{
                  flexDirection: 'row',
                  paddingLeft: 7,
                  backgroundColor: '#F83758',
                  width: 102,
                  height: 24,
                  marginTop: 10
                  }}>
                  <Text style={{color: '#fff', marginTop: 3,padding: 2}}>Visit Now</Text>
                  <FontAwesome name='arrow-right' color='#fff' size={16} style={{marginTop: 7, paddingLeft: 8}}/>
                </View>
             </View>
           </View>
  
        </ImageBackground>
</View>

{/* trending Product
 */}

<View style={{
      width: '100%',
      height: 60,
      backgroundColor: '#FD6E87',
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
          
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 6, marginTop: 5}}>Trending Product</Text>
              <Text style={{color: '#fff', fontSize: 12, marginTop: 10,marginLeft: 6 }}>Last Date 29/02/22</Text>
          </View>
          <TouchableOpacity>
              <View style={{
                width: 92,
                height: 32,
                borderRadius: 6,
                borderWidth: 2,
                borderColor: '#fff',
                marginTop: 10,
                marginRight: 19
                
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
    </View>
  )
}

export default Off;

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
     overflow: 'hidden'
  
  },
  image: {
   
     resizeMode: 'contain', // Adjust size as needed
    
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
  imagetext:{
    fontSize: 12,
    fontWeight: 'medium'
  }, 
  anysmall:{
    fontSize: 12,
    fontWeight: 'light'
  },
  specialflex:{
    flexDirection: 'row',
       alignContent: 'center',
       justifyContent: 'space-between',
       padding: 20
  }
})