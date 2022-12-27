import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const pressHandler = () => {
          navigation.navigate('MealsOverview', {
            categoryId: item.id,
            categoryTitle: item.title,
          });
        };
        return (
          <CategoryGridTile
            title={item.title}
            color={item.color}
            onPress={pressHandler}
          />
        );
      }}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
