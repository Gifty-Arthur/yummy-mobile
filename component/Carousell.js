import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

const dresses = [
  {
    id: 1,
    image: require('../assets/Images/d5.png'),
    title: "IWC Schaffhausen 2021 Pilot's Watch 'SIHH 2019' 44mm",
    price: '$500',
  },
  {
    id: 2,
    image: require('../assets/Images/d6.png'),
    title: "ILabbin White Sneakers For Men and Female",
    price: '$400',
  },
  {
    id: 3,
    image: require('../assets/Images/d7.png'),
    title: "Mammon Women's Handbag (Set of 3, Beige)",
    price: '$700',
  },
  {
    id: 4,
    image: require('../assets/Images/d8.png'),
    title: "IWC Schaffhausen 2021 Pilot's Watch 'SIHH 2019' 44mm",
    price: '$802',
  },
];

const Carousell = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < dresses.length - 2) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex - 1, animated: true });
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={dresses}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        snapToAlignment="center"
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        onScrollToIndexFailed={(info) => {
          flatListRef.current.scrollToOffset({
            offset: info.averageItemLength * info.index,
            animated: true,
          });
        }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.button}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* new Arri */}
      <View style={{
        width: '100%'
      }}>
           <Image source={require('../assets/Images/n1.png')} />
      </View>
    </View>
    
  );
};

export default Carousell;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 150, // Adjust width to fit two cards on the screen
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
  },
  image: {
    width: 140, // Adjust width
    height: 140, // Adjust height
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FD6E87',
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '50%'
    
  },
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
