import { StyleSheet, Text, View, Dimensions, FlatList, Image, SafeAreaView } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

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
    title: 'Fast Delivery',
    subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    id: '3',
    image: require('../assets/Images/s4.png'),
    title: 'Enjoy Shopping',
    subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
];

const Slide = ({ item }) => {
  return (

<View style={styles.container}>
    <View style={styles.rowContainer}>
      <Text style={styles.num}>
        1/
        <Text style={styles.highlight}>3</Text>
      </Text>
      <Text style={styles.skip}>Skip</Text>
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
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id}
      />
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
  image: {
    width: width * 0.8,
    height: height * 0.5,
    resizeMode: 'contain',
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
    paddingHorizontal: 20, // Adds horizontal padding for spacing
    paddingTop: 50, // Pushes the rowContainer down slightly
  },
  num: {
    fontSize: 18, // Font size for 1/3
    color: '#000', // Default text color
  },
  highlight: {
    color: '#A0A0A1', // Custom color for 3
  },
});
