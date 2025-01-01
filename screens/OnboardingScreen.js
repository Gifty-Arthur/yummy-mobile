import { StyleSheet, Text, View, Dimensions, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');
const COLORS = {
    black: '#17223B',
  };

const slides = [
  {
    id: '1',
    image: require('../assets/Images/s2.png'),
    title: 'Choose Products',
    subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    id: '2',
    image: require('../assets/Images/s3.png'),
    title: 'Make Payment',
    subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    id: '3',
    image: require('../assets/Images/s4.png'),
    title: 'Get Your Order',
    subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
];

const Slide = ({ item,skip }) => {
  return (

<View style={styles.container}>
    <View style={styles.rowContainer}>
      <Text style={styles.num}>
        1/
        <Text style={styles.highlight}>3</Text>
      </Text>
      <TouchableOpacity onPress={skip}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.slideContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
    const [currentSlideIndex, setCurentSlideIndex] = React.useState(0);
    const ref = React.useRef(null);

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurentSlideIndex(lastSlideIndex);
      };

    const Footer =() =>{
        return  <View style={{
                position: 'absolute', // Fixes the Footer at the bottom
                bottom: 0, // Aligns the Footer to the bottom of the screen
                width: '100%',
                height: height * 0.1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 30, 
            }}>

                <View style={styles.row}>
                
                     {/* Prev */}<TouchableOpacity style={styles.btn} onPress={goPrevSlide}>
                         
                         <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#C4C4C4', // Next button color
                            textAlign: 'right', 
                            marginTop: 25
                         }}>Prev</Text>
                     </TouchableOpacity>
                
                    <View style={styles.indicatorsContainer}>
                      {slides.map((_,index)=>(
                          <View key={index} style={[styles.indicator,
                            currentSlideIndex ==index && {
                                backgroundColor: COLORS.black,
                                width: 30,
                            }
                        ]}/>
                      ))}
                    </View>
                     {/* Prev */}<TouchableOpacity style={styles.btn} onPress={goNextSlide}>
                         
                         <Text style={styles.next}>Next</Text>
                     </TouchableOpacity>
                </View>
               
            
        </View>
        
    };
    const updateCurrentSlideIndex = e =>{
        const contentOffsetX = e. nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurentSlideIndex(currentIndex)
    };
    const goNextSlide =()=> {
        const nextSlideIndex = currentSlideIndex +1;
        if( nextSlideIndex != slides.length){
            const offset = nextSlideIndex * width;
        ref?.current.scrollToOffset({offset, animated:true});
        setCurentSlideIndex(nextSlideIndex);
        } else{
            navigation.navigate('GetStarted');
        }
        
    };
    const goPrevSlide =()=> {
        const prevSlideIndex = currentSlideIndex -1;
        if( prevSlideIndex != slides.length){
            const offset = prevSlideIndex * width;
        ref?.current.scrollToOffset({offset});
        setCurentSlideIndex(prevSlideIndex);
        }
        
    };
 
   

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      ref={ref}
      onMomentumScrollEnd={updateCurrentSlideIndex}
      pagingEnabled
        data={slides}
        horizontal
        
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} skip={skip} />}
        keyExtractor={(item) => item.id}
      />
      <Footer/>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex start'
  },
  slideContainer: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F83758', // Next button color
    textAlign: 'right', 
    marginTop: 25
  },
  image: {
    width: width * 0.8,
    height: height * 0.5,
    resizeMode: 'contain',
    marginTop: 30,
    

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space between 1/3 and Skip
    alignItems: 'center', // Align items vertically
    paddingHorizontal: 30, // Adds horizontal padding for spacing
    paddingTop: 50, // Pushes the rowContainer down slightly
  },
  num: {
    fontSize: 18, // Font size for 1/3
    color: '#000', // Default text color
  },
  highlight: {
    color: '#A0A0A1', // Custom color for 3
  },
  indicator:{
    height:10,
    width:10,
    marginHorizontal: 3,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginTop: 30
  },
  row: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Vertically align items
    justifyContent: 'space-between', // Space between indicators and Next
  },
  indicatorsContainer:{
    flexDirection: 'row', // Arrange indicators in a row
    justifyContent: 'center', // Center indicators
    flex: 2, 
  }

});
