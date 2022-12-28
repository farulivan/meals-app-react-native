import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { MEALS } from '../data/dummy-data';

import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const categoryTitle = route.params.categoryTitle;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <MealsList items={displayedMeals} />
  );
};

export default MealsOverviewScreen;
