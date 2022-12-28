import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

import { MEALS } from '../data/dummy-data';
import IconButton from '../components/IconButton';

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const {
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log('button pressed!');
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="star"
          color="white"
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.mealDetail}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          textStyle={styles.detailText}
        />
      </View>
      <Subtitle>Ingredients</Subtitle>
      <List data={ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={steps} />
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  mealDetail: {
    flex: 1,
    margin: 16,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
    fontSize: 14,
  },
});
