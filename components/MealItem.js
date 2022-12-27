import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: '#555' }}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailText}>{duration}m</Text>
          <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    // android
    elevation: 4,
    // ios
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // android-ripple effect
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  // ios
  pressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 8,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailText: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
