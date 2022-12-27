import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
          }          

          return (
            <MealItem
              {...mealItemProps}
            />
          );
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
