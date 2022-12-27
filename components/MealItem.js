import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MealDetails from './MealDetails';

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation();
  
  const pressHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id
    })
  };


  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: '#555' }}
        onPress={pressHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
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
});
