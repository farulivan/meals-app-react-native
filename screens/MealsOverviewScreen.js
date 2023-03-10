import { FlatList, StyleSheet, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';

import MealItem from '../components/MealItem';
import { useEffect } from 'react';

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const categoryTitle = route.params.categoryTitle;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useEffect(() => {
    // const categoryTitle = CATEGORIES.find(
    //   (category) => category.id === categoryId
    // ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
          };

          return <MealItem {...mealItemProps} />;
        }}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
